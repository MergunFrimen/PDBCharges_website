import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import MolstarViewer from "../components/MolstarViewer";
import { useMolstar } from "../contexts/MolstarContext";
import { useBehavior } from "../hooks/useBehavior";
import { View } from "../models/MolstarViewerModel";

export default function Results() {
  const { code } = useParams();
  const { viewer } = useMolstar();
  const [currentView] = useBehavior(viewer.state.currentView);

  function handleViewChange(value: View) {
    console.log("view", value);
    viewer.state.currentView.next(value);
  }

  if (!code) return <></>;

  return (
    <div className="container mt-3 p-3">
      <div className="row">
        <div className="col">
          <h1 style={{ marginBottom: "25px" }}>
            <Logo />
          </h1>
        </div>
      </div>
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
                  className="form-check-input"
                  type="radio"
                  name="colors"
                  id="colors_structure"
                  value="Structure"
                />
                <label className="form-check-label" htmlFor="colors_structure">
                  Structure
                </label>
              </div>
              <div
                className="form-check form-check-inline col-auto"
                title="Use coloring based on the largest absolute charge value"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="colors"
                  id="colors_relative"
                  value="Relative"
                  checked
                />
                <label className="form-check-label" htmlFor="colors_relative">
                  Charges (relative)
                </label>
              </div>
              <div
                className="form-check form-check-inline col-auto"
                title="Use coloring based on the specified values below"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="colors"
                  id="colors_absolute"
                  value="Absolute"
                />
                <label className="form-check-label" htmlFor="colors_absolute">
                  Charges (absolute)
                </label>
              </div>
              <div className="form-group form-inline mb-0">
                <label
                  className="col-auto col-form-label pl-0 pr-3"
                  htmlFor="max_value"
                >
                  Max value:
                </label>
                <input
                  className="col-3 form-control"
                  type="number"
                  id="max_value"
                  name="max_value"
                  min="0"
                  max="5"
                  step="0.1"
                  value="0"
                  disabled
                />
                <a
                  className="btn btn-secondary text-sm text-white"
                  id="reset_max_charge"
                >
                  Reset
                </a>
              </div>
            </div>
          </fieldset>
        </div>
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
      <Footer />
    </div>
  );
}
