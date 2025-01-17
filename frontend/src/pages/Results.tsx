import { Link, useParams } from "react-router-dom";
import MolstarViewer from "../components/MolstarViewer";
import { useMolstar } from "../contexts/MolstarContext";
import { useBehavior } from "../hooks/useBehavior";
import { View } from "../models/MolstarViewerModel";

export default function Results() {
  const { code } = useParams();

  if (!code) return <></>;

  return (
    <>
      <div className="row">
        <div className="col-12 mt-0">
          <strong> PDB code:</strong>{" "}
          <a
            href={`https://www.rcsb.org/structure/${code}`}
            target="_blank"
            rel="noreferrer"
          >
            {code}
          </a>
        </div>
      </div>
      <hr />
      <div className="row">
        <ViewControls />
        <ColoringControls />
      </div>
      <hr />
      <div className="row px-3">
        <div className="col px-0">
          <div id="root">
            <MolstarViewer pdbId={code} />
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-7">
          <a
            href="{{ url_for('download_files', code=code) }}"
            className="btn btn-success"
            id="download"
          >
            Download charges and protonated structure
          </a>
        </div>
        <div className="col text-right">
          <Link to="/" className="btn btn-primary">
            Back to main page
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
}

function ViewControls() {
  const { viewer } = useMolstar();

  const [currentView] = useBehavior(viewer.state.currentView);

  function handleViewChange(value: View) {
    console.log("view", value);
    viewer.state.currentView.next(value);
  }

  return (
    <div className="col-md-6">
      <fieldset className="row form-group mb-1">
        <legend className="font-weight-bold col-form-label col pb-0 pt-0">
          View
        </legend>
        <div className="col">
          <div
            className="form-check form-check-inline col"
            title="Cartoon representation"
          >
            <input
              className="form-check-input"
              type="radio"
              name="view"
              id="view_cartoon"
              value="Cartoon"
              onChange={() => handleViewChange("cartoon")}
              checked={currentView === "cartoon"}
            />
            <label className="form-check-label" htmlFor="view_cartoon">
              Cartoon
            </label>
          </div>
          <div
            className="form-check form-check-inline col"
            title="Surface representation"
          >
            <input
              className="form-check-input"
              type="radio"
              name="view"
              id="view_surface"
              value="Surface"
              onChange={() => handleViewChange("surface")}
              checked={currentView === "surface"}
            />
            <label className="form-check-label" htmlFor="view_surface">
              Surface
            </label>
          </div>
          <div
            className="form-check form-check-inline col"
            title="Ball & Stick representation"
          >
            <input
              className="form-check-input"
              type="radio"
              name="view"
              id="view_bas"
              value="Ball & Stick"
              onChange={() => handleViewChange("ball-and-stick")}
              checked={currentView === "ball-and-stick"}
            />
            <label className="form-check-label" htmlFor="view_bas">
              Ball & Stick
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

function ColoringControls() {
  return (
    <div className="col-md-6">
      <fieldset className="row form-group mb-0">
        <legend className="font-weight-bold col-form-label col pb-0 pt-0">
          Coloring
        </legend>
        <div className="col">
          <div
            className="form-check form-check-inline col"
            title="Use coloring based on the structure"
          >
            <input
              id="colors_structure"
              name="colors"
              value="Structure"
              type="radio"
              className="form-check-input"
            />
            <label htmlFor="colors_structure" className="form-check-label">
              Structure
            </label>
          </div>
          <div
            className="form-check form-check-inline col-auto"
            title="Use coloring based on the largest absolute charge value"
          >
            <input
              id="colors_relative"
              className="form-check-input"
              type="radio"
              name="colors"
              value="Relative"
              checked
            />
            <label htmlFor="colors_relative" className="form-check-label">
              Charges (relative)
            </label>
          </div>
          <div
            className="form-check form-check-inline col-auto"
            title="Use coloring based on the specified values below"
          >
            <input
              id="colors_absolute"
              className="form-check-input"
              type="radio"
              name="colors"
              value="Absolute"
            />
            <label htmlFor="colors_absolute" className="form-check-label">
              Charges (absolute)
            </label>
          </div>
          <div className="form-group form-inline mb-0">
            <label
              htmlFor="max_value"
              className="col-auto col-form-label pl-0 pr-3"
            >
              Max value:
            </label>
            <input
              id="max_value"
              className="col-3 form-control"
              type="number"
              name="max_value"
              min="0"
              max="5"
              step="0.1"
              value="0"
              disabled
            />
            <button className="btn btn-secondary text-sm text-white">
              Reset
            </button>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
