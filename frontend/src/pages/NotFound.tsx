import { Link } from "react-router-dom";
import ElixirSection from "../components/ElixirSection";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

export default function NotFound() {
  return (
    <div className="container p-3">
      <div className="d-none mt-3 d-lg-block"></div>
      <div className="row">
        <div className="col">
          <h1 style={{ marginBottom: "25px" }}>
            <Logo />
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <strong>404</strong>: This isn't the page you're looking for.
        </div>
      </div>
      <div className="row">
        <div className="col text-right">
          <Link to="/" className="btn btn-primary">
            Back to main page
          </Link>
        </div>
      </div>
      <hr />
      <ElixirSection />
      <hr />
      <Footer />
    </div>
  );
}
