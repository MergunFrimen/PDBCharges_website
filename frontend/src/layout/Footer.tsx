export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        {/* ELIXIR Section */}
        <div className="text-center mb-8">
          <img
            src="/api/placeholder/200/70"
            alt="ELIXIR logo"
            className="h-[70px] mx-auto mb-4"
          />
          <p className="text-sm font-semibold text-gray-700 max-w-3xl mx-auto">
            <span className="text-[#325880]">PDB</span>
            <span className="text-[#7dacd2]">Charges</span> tool is part of
            services provided by{" "}
            <a
              href="https://www.elixir-czech.cz/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              ELIXIR
            </a>{" "}
            – European research infrastructure for biological information.
            <br />
            For other services provided by ELIXIR's Czech Republic Node visit{" "}
            <a
              href="https://www.elixir-czech.cz/services"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              www.elixir-czech.cz/services
            </a>
            .
          </p>
        </div>

        {/* License Section */}
        <div className="text-xs text-gray-600 mb-8">
          <p className="text-justify">
            Licence conditions in accordance with § 11 of Act No. 130/2002 Coll.
            The owner of the software is Masaryk University, a public
            university, ID: 00216224. Masaryk University allows other companies
            and individuals to use this software free of charge and without
            territorial restrictions in usual way, that does not depreciate its
            value. This permission is granted for the duration of property
            rights.
          </p>
        </div>

        {/* Copyright Section */}
        <div className="text-right text-sm text-gray-500">
          <p>
            © 2025 Ondřej Schindler{" "}
            <a
              href="https://webchem.ncbr.muni.cz/Platform/Home/TermsOfUse"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Terms of Use & GDPR
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
