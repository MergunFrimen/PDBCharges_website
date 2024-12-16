import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ExampleCard from "@/components/ExampleCard";
import Logo from "@/components/Logo";
import { Label } from "@/components/ui/label";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-10">
      <DescriptionSection />
      <SearchForm />
      <ExampleSection />
      <ContactSection />
    </div>
  );
}

function DescriptionSection() {
  return (
    <section className="">
      <Logo className="" />{" "}
      <span className="">
        is a web application providing partial atomic charges of protein
        structures from the{" "}
      </span>
      <a
        href="https://onlinelibrary.wiley.com/doi/full/10.1002/pro.3289"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        Protein Data Bank
      </a>
      <span>The charges are computed by the </span>
      <a
        href="https://pubs.acs.org/doi/10.1021/acs.jctc.7b00118"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        semiempirical quantum mechanical methods GFN1-xTB
      </a>
      <span>
        {" "}
        and reproduce the PBE0/TZVP/CM5 charges. Before computation of the
        charges, hydrogens are added to the structure by{" "}
      </span>
      <a
        href="https://almob.biomedcentral.com/articles/10.1186/s13015-022-00215-x"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        Hydride
      </a>
      <span> and </span>
      <a
        href="https://almob.biomedcentral.com/articles/10.1186/s13015-022-00215-x"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        MoleculeKit
      </a>
      <span>
        {" "}
        at pH 7.2. The positions of the added hydrogens are optimized using the
        GFN-FF force-field. The details about the methodology and usage are
        described in the manual. This website is free and open to all users and
        there is no login requirement. Source codes are freely available at
        GitHub.
      </span>
    </section>
  );
}

function SearchForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const pdbId = e.target.pdbId.value.trim().toLowerCase();
    navigate(`/results/${pdbId}`);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="">
        <Label htmlFor="pdbId" className="">
          PDB ID:
        </Label>
        <Input
          id="pdbId"
          name="pdbId"
          placeholder="e.g. 1alf, 2pws"
          className=""
          required
        />
      </div>
      <Button type="submit">Get charges</Button>
    </form>
  );
}

function ExampleSection() {
  return (
    <section className="">
      <h2 className="text-2xl font-bold mb-6">Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExampleCard
          title="Phospholipase inhibited by ibuprofen"
          description="Phospholipase A2 is an enzyme that occurs in plants, mammals, snakes, and bee venoms.
            It catalyses the hydrolysis of the ester bond in phospholipids in the cell membranes.
            Hydrolysis products are lysophosphatidic acid and free fatty acids, which can disrupt
            cellular membranes and induce inflammatory responses."
          pdbCode="2pws"
          imageUrl="TODO"
        />

        <ExampleCard
          title="Carbohydrate binding lectin"
          description="Lectin PA-IIL from the bacteria Pseudomonas aeruginosa plays a key role in its
            pathogenicity. This lectin has an unusually high affinity for carbohydrates due
            to its unique binding mode involving two calcium ions."
          pdbCode="1uzv"
          imageUrl="TODO"
        />

        <ExampleCard
          title="Potassium channel"
          description="TASK2 (TWIK-related acid-sensitive K+ channel 2) is a pH-gated ion channel belonging
            to the two-pore domain K+ (K2P) channel family. This channel maintains cellular
            homeostasis and regulates physiological responses to environmental changes."
          pdbCode="6wlv"
          imageUrl="TODO"
        />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="text-sm text-gray-600">
      <p>
        Are you interested in a research collaboration? Feel free to{" "}
        <a href="mailto:ondrej.schindler@mail.muni.cz" className="text-link">
          contact us
        </a>
        .
      </p>
    </section>
  );
}

function ElixirSection() {
  return (
    <div className="text-center mb-8">
      <img
        src="frontend/src/assets/elixirlogo.png"
        alt="ELIXIR logo"
        className="h-[70px] mx-auto mb-4"
      />
      <p className="text-sm font-semibold text-gray-700 max-w-3xl mx-auto">
        <span className="text-[#325880]">PDB</span>
        <span className="text-[#7dacd2]">Charges</span> tool is part of services
        provided by{" "}
        <a
          href="https://www.elixir-czech.cz/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-800"
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
          className="text-blue-500 hover:text-blue-800"
        >
          www.elixir-czech.cz/services
        </a>
        .
      </p>
    </div>
  );
}

function LicenceSection() {
  return (
    <div className="text-xs text-gray-600 mb-8">
      <p className="text-justify">
        Licence conditions in accordance with § 11 of Act No. 130/2002 Coll. The
        owner of the software is Masaryk University, a public university, ID:
        00216224. Masaryk University allows other companies and individuals to
        use this software free of charge and without territorial restrictions in
        usual way, that does not depreciate its value. This permission is
        granted for the duration of property rights.
      </p>
    </div>
  );
}
