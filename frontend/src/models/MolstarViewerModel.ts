import { StructureSelectionQuery } from "molstar/lib/commonjs/mol-plugin-state/helpers/structure-selection-query";
import { PluginUIContext } from "molstar/lib/commonjs/mol-plugin-ui/context";
import {
  DefaultPluginUISpec,
  PluginUISpec,
} from "molstar/lib/commonjs/mol-plugin-ui/spec";
import { Expression } from "molstar/lib/commonjs/mol-script/language/expression";
import { StateObjectCell } from "molstar/lib/commonjs/mol-state";
import { Color } from "molstar/lib/commonjs/mol-util/color";
import { MolScriptBuilder as MS } from "molstar/lib/mol-script/language/builder";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { setSubtreeVisibility } from "molstar/lib/commonjs/mol-plugin/behavior/static/state";

export type View = "cartoon" | "surface" | "ball-and-stick";
export type Coloring = "structure" | "charges";

interface CellRefs {
  assembly?: StateObjectCell;
  all?: {
    cartoon?: StateObjectCell;
    surface?: StateObjectCell;
    ballAndStick?: StateObjectCell;
  };
  water?: StateObjectCell;
}

export default class MolstarViewerModel {
  private readonly _plugin: PluginUIContext;
  private _cellRefs: CellRefs = {};
  private _subscriptions: Subscription[] = [];

  public state = {
    isInitialized: new BehaviorSubject<boolean>(false),
    isLoading: new BehaviorSubject<boolean>(false),
    showControls: new BehaviorSubject<boolean>(false),
    isExpanded: new BehaviorSubject<boolean>(false),
    currentView: new BehaviorSubject<View>("cartoon"),
    currentColoring: new BehaviorSubject<Coloring>("charges"),
    showWater: new BehaviorSubject<boolean>(false),
  };

  constructor() {
    const defaultSpec = DefaultPluginUISpec();
    const spec: PluginUISpec = {
      ...defaultSpec,
      layout: {
        initial: {
          isExpanded: this.state.isExpanded.value,
          showControls: this.state.showControls.value,
        },
      },
      canvas3d: {
        renderer: {
          backgroundColor: Color(0xffffff),
        },
      },
    };
    this._plugin = new PluginUIContext(spec);

    this._init();
  }

  get plugin() {
    return this._plugin;
  }

  sub() {
    this._subscribe(this.state.isInitialized, (isInitialized) => {
      if (!isInitialized) return;
    });

    this._subscribe(this.state.currentView, (currentView) => {
      this._handleCurrentView(currentView);
    });

    // sync UI layout controls
    this._subscribe(this._plugin!.layout.events.updated, () => {
      this.state.showControls.next(this._plugin.layout.state.showControls);
      this.state.isExpanded.next(this._plugin.layout.state.isExpanded);
    });
  }

  unsub() {
    this._plugin.unmount();
    for (const sub of this._subscriptions) sub.unsubscribe();
    this._subscriptions = [];
  }

  async loadInit(pdbId: string) {
    if (this.state.isLoading.value) return;

    this.state.isLoading.next(true);

    await this._plugin.clear();
    await this._loadInit(pdbId);

    this.state.isLoading.next(false);
  }

  // focus(selection: Selection) {
  //   const structureRef =
  //     this.plugin.managers.structure.hierarchy.current.structures[0];
  //   const structure = structureRef.cell.obj?.data;
  //   if (!structure) return;

  //   const expression = this._getAllExpression();
  //   const query = compile<StructureSelection>(expression);
  //   const structureSelection = query(new QueryContext(structure));
  //   const loci = StructureSelection.toLociWithSourceUnits(structureSelection);

  //   this._plugin.managers.camera.focusLoci(loci);
  //   // this.plugin.managers.interactivity.lociHighlights.highlightOnly({ loci });
  //   // this.plugin.managers.interactivity.lociSelects.selectOnly({ loci });
  //   // this.plugin.managers.structure.focus.setFromLoci(loci);
  // }

  private async _init() {
    await this._plugin.init();

    this._plugin.managers.interactivity.setProps({
      granularity: "element",
    });
    this._plugin.behaviors.layout.leftPanelTabName.next("data");

    this.state.isInitialized.next(true);
  }

  private _subscribe<T>(observable: Observable<T>, sub: (v: T) => void) {
    this._subscriptions.push(observable.subscribe(sub));
  }

  private async _loadInit(pdbId: string) {
    const allSelectionQuery = StructureSelectionQuery(
      "All",
      this._getAllExpression()
    );
    const waterSelectionQuery = StructureSelectionQuery(
      "Water",
      this._getWaterExpression()
    );

    // load and create structure
    const data = await this._plugin.builders.data.download({
      url: `https://www.ebi.ac.uk/pdbe/entry-files/download/${pdbId}.bcif`,
      isBinary: true,
    });
    const trajectory = await this._plugin.builders.structure.parseTrajectory(
      data,
      "mmcif"
    );
    const model = await this._plugin.builders.structure.createModel(trajectory);
    const structure = await this._plugin.builders.structure.createStructure(
      model,
      {
        name: "auto",
        params: {},
      }
    );

    if (!model?.cell?.obj?.data) {
      console.error("Missing model");
      return;
    }

    // todo: change to select everything except water
    const all =
      await this._plugin.builders.structure.tryCreateComponentFromSelection(
        structure,
        allSelectionQuery,
        "all"
      );
    const water =
      await this._plugin.builders.structure.tryCreateComponentFromSelection(
        structure,
        waterSelectionQuery,
        "water"
      );

    // check successful build
    if (!all || !water) {
      console.error("Failed to create component");
      return;
    }

    // create visual representations
    const allCartoonVisual =
      await this._plugin.builders.structure.representation.addRepresentation(
        all,
        {
          type: "cartoon",
        },
        { initialState: { isHidden: false } }
      );
    const allSurfaceVisual =
      await this._plugin.builders.structure.representation.addRepresentation(
        all,
        {
          type: "gaussian-surface",
        },
        { initialState: { isHidden: true } }
      );
    const allBasVisual =
      await this._plugin.builders.structure.representation.addRepresentation(
        all,
        {
          type: "ball-and-stick",
        },
        { initialState: { isHidden: true } }
      );
    const waterVisual =
      await this._plugin.builders.structure.representation.addRepresentation(
        water,
        {
          type: "ball-and-stick",
        },
        { initialState: { isHidden: true } }
      );

    // save node refs
    this._cellRefs = {
      assembly: structure.cell,
      all: {
        cartoon: allCartoonVisual.cell,
        surface: allSurfaceVisual.cell,
        ballAndStick: allBasVisual.cell,
      },
      water: waterVisual.cell,
    };
  }

  private _getAllExpression(): Expression {
    const expression = MS.struct.generator.atomGroups({
      "atom-test": MS.core.logic.and([
        MS.core.rel.neq([
          MS.struct.atomProperty.macromolecular.label_comp_id(),
          "HOH",
        ]),
      ]),
    });

    return expression;
  }

  private _getWaterExpression(): Expression {
    const expression = MS.struct.generator.atomGroups({
      "atom-test": MS.core.logic.and([
        MS.core.rel.eq([
          MS.struct.atomProperty.macromolecular.label_comp_id(),
          "HOH",
        ]),
      ]),
    });

    return expression;
  }

  private _handleCurrentView(currentView: View) {
    if (
      !this._cellRefs.all?.cartoon ||
      !this._cellRefs.all?.surface ||
      !this._cellRefs.all?.ballAndStick
    )
      return;

    setSubtreeVisibility(
      this._plugin.state.data,
      this._cellRefs.all?.cartoon.transform.ref,
      currentView !== "cartoon"
    );

    setSubtreeVisibility(
      this._plugin.state.data,
      this._cellRefs.all?.surface.transform.ref,
      currentView !== "surface"
    );

    setSubtreeVisibility(
      this._plugin.state.data,
      this._cellRefs.all?.ballAndStick.transform.ref,
      currentView !== "ball-and-stick"
    );
  }

  private _getNodeByTag(tag: string) {
    const node = this.plugin.state.data
      .selectQ((q) => q.byRef("").withTag(""))
      .filter((node) => !node)
      .find((node) => node.obj?.tags && node.obj?.tags.find((t) => t === tag));
    return node;
  }
}
