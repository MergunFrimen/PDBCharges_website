import ElixirSection from "../components/ElixirSection";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import cardPlaceholder from "../assets/p_glycoprotein.png";
import ExampleCard from "../components/ExampleCard";

export default function Home() {
  return (
    <div className="container p-3">
      <div className="d-none mt-3 d-lg-block"></div>
      <form>
        <div className="row">
          <div className="col">
            <h1 style={{ marginBottom: "25px" }}>
              <Logo />
            </h1>
            <strong>
              <Logo />
            </strong>{" "}
            is a web application providing partial atomic charges of protein
            structures from the{" "}
            <a
              href="https://onlinelibrary.wiley.com/doi/full/10.1002/pro.3289"
              target="_blank"
              rel="noreferrer"
            >
              Protein Data Bank
            </a>
            . The charges are computed by the{" "}
            <a
              href="https://pubs.acs.org/doi/10.1021/acs.jctc.7b00118"
              target="_blank"
              rel="noreferrer"
            >
              semiempirical quantum mechanical methods GFN1-xTB
            </a>{" "}
            and reproduce the PBE0/TZVP/CM5 charges. Before computation of the
            charges, hydrogens are added to the structure by{" "}
            <a
              href="https://almob.biomedcentral.com/articles/10.1186/s13015-022-00215-x"
              target="_blank"
              rel="noreferrer"
            >
              Hydride
            </a>{" "}
            and{" "}
            <a
              href="https://pubs.acs.org/doi/abs/10.1021/acs.jctc.6b00049"
              target="_blank"
              rel="noreferrer"
            >
              MoleculeKit
            </a>{" "}
            at pH 7.2. The positions of the added hydrogens are optimized using
            the{" "}
            <a
              href="https://onlinelibrary.wiley.com/doi/full/10.1002/anie.202004239"
              target="_blank"
              rel="noreferrer"
            >
              GFN-FF force-field
            </a>
            . The details about the methodology and usage are described in the{" "}
            <a
              href="https://github.com/sb-ncbr/PDBCharges_website/wiki"
              target="_blank"
              rel="noreferrer"
            >
              manual
            </a>
            . This website is free and open to all users and there is no login
            requirement. Source codes are freely available at{" "}
            <a
              href="https://github.com/sb-ncbr/PDBCharges_website"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </div>
        </div>
        <hr />
        <br />
        <div className="form-group col-sm-6 col-lg-3 pl-0">
          <label style={{ color: "black" }} htmlFor="title">
            <strong>PDB ID:</strong>
          </label>
          <input
            type="text"
            name="code"
            required
            className="form-control"
            placeholder="e.g. 1alf, 2pws"
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary"
            name="action"
            value="get charges"
          >
            Get charges
          </button>
        </div>
      </form>
      <hr />
      <div className="row">
        <div className="col">
          <h3>Examples</h3>
        </div>
      </div>
      <div className="row">
        <ExampleCard
          title="Phospholipase inhibited by ibuprofen"
          code="2pws"
          image="../assets/p_glycoprotein.png"
        >
          <small>
            Phospholipase A2 is an enzyme that occurs in plants, mammals,
            snakes, and bee venoms. It catalyses the hydrolysis of the ester
            bond in phospholipids in the cell membranes. Hydrolysis products are
            lysophosphatidic acid and free fatty acids, which can disrupt
            cellular membranes and induce inflammatory responses (
            <a
              href="https://link.springer.com/article/10.1007/s10557-008-6132-9"
              target="_blank"
              rel="noreferrer"
            >
              Burke2010
            </a>
            ). The carboxyl group of ibuprofen interact, creating an
            electrostatic bond to lysin (LYS 69) in phospholipase A2 and
            inhibiting its function. Based on this knowledge, we can develop
            therapeutics that can reduce the inflammatory reactions associated
            with snakebites (
            <a
              href="https://www.sciencedirect.com/science/article/pii/S0301462210002206?via%3Dihub"
              target="_blank"
              rel="noreferrer"
            >
              Gaspar2010
            </a>
            ).
          </small>
        </ExampleCard>

        <ExampleCard
          title="Carbohydrate binding lectin"
          code="1uzv"
          image="../assets/p_glycoprotein.png"
        >
          <small>
            Lectin PA-IIL from the bacteria Pseudomonas aeruginosa plays a key
            role in its pathogenicity (i.e., it can cause cystic fibrosis, which
            has high mortality) (
            <a
              href="https://doi.org/10.1016/j.micinf.2003.10.016"
              target="_blank"
              rel="noreferrer"
            >
              Imberty2004
            </a>
            ). This lectin has an unusually high affinity for carbohydrates due
            to its unique binding mode involving two calcium ions (
            <a
              href="https://doi.org/10.1038/nsb865"
              target="_blank"
              rel="noreferrer"
            >
              Mitchell2002
            </a>
            ). The calcium ions form ionic bonds with aspartic acid residues
            (chain A: ASP 96, ASP 99, ASP 101 and ASP 104) in the protein and
            with three hydroxyl groups of the fucose molecule (chain A: FUC
            999). This interaction results in a stable complex through extensive
            charge delocalisation. Unlike most protein-carbohydrate
            interactions, PA-IIL relies on ionic and coordination bonds with
            minimal hydrophobic bonds, presenting the structural role of calcium
            ions in stabilising the binding site (
            <a
              href="https://doi.org/10.1002/prot.20330"
              target="_blank"
              rel="noreferrer"
            >
              Mitchell2005
            </a>
            ).
          </small>
        </ExampleCard>

        <ExampleCard
          title="Potassium channel"
          code="6wlv"
          image="../assets/p_glycoprotein.png"
        >
          <small>
            TASK2 (TWIK-related acid-sensitive K+ channel 2) is a pH-gated ion
            channel belonging to the two-pore domain K+ (K<sub>2P</sub>) channel
            family (
            <a
              href="https://doi.org/10.1074/jbc.273.47.30863"
              target="_blank"
              rel="noreferrer"
            >
              Reyes1998
            </a>
            ). This channel maintains cellular homeostasis and regulates
            physiological responses to environmental changes. The transmembrane
            regions of TASK2 are characterised by their nonpolar nature and lack
            of charge, distinguishing them from the intracellular and
            extracellular domains of the protein (
            <a
              href="https://doi.org/10.1038/s41586-020-2770-2"
              target="_blank"
              rel="noreferrer"
            >
              Li2020
            </a>
            ).
          </small>
        </ExampleCard>
      </div>
      <hr />
      <div className="row">
        <div className="col text-left">
          <small>
            Are you interested in a research collaboration? Feel free to
            <a href="mailto:ondrej.schindler@mail.muni.cz"> contact us</a>.
          </small>
        </div>
      </div>
      <hr />
      <ElixirSection />
      <hr />
      <Footer />
    </div>
  );
}
