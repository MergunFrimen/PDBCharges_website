import Logo from "./Logo";
import elixirLogo from "../assets/elixirlogo.png";

export default function ElixirSection() {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <img src={elixirLogo} alt="ELIXIR logo" style={{ height: "70px" }} />
          <br />
        </div>
        <div className="col text-center mt-3">
          <small>
            <strong>
              <Logo />
              <span> tool is a part of services provided by </span>
              <a
                href="https://www.elixir-czech.cz/"
                target="_blank"
                rel="noreferrer"
              >
                ELIXIR
              </a>
              <span>
                {" "}
                – European research infrastructure for biological information.
              </span>
              <br />
              <span>
                For other services provided by ELIXIR's Czech Republic Node
                visit{" "}
              </span>
              <a
                href="https://www.elixir-czech.cz/services"
                target="_blank"
                rel="noreferrer"
              >
                www.elixir-czech.cz/services
              </a>
              .
            </strong>
          </small>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col text-justify">
          <small>
            Licence conditions in accordance with § 11 of Act No. 130/2002 Coll.
            The owner of the software is Masaryk University, a public
            university, ID: 00216224. Masaryk University allows other companies
            and individuals to use this software free of charge and without
            territorial restrictions in usual way, that does not depreciate its
            value. This permission is granted for the duration of property
            rights. This software is not subject to special information
            treatment according to Act No. 412/2005 Coll., as amended. In case
            that a person who will use the software under this licence offer
            violates the licence terms, the permission to use the software
            terminates.
          </small>
        </div>
      </div>
    </>
  );
}
