import React from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ExampleCard = ({ title, description, pdbCode, imageUrl }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-bold mb-4">{title}</h3>
        <div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="h-48 w-auto object-contain"
          />
        </div>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <Button
          className="w-full"
          onClick={() => navigate(`/results/${pdbCode}`)}
        >
          {title}
        </Button>
      </CardContent>
    </Card>
  );
};

export default function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const pdbId = e.target.pdbId.value.trim().toLowerCase();
    navigate(`/results/${pdbId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Description */}
      <div className="prose max-w-none mb-8">
        <p className="text-lg">
          <span className="font-bold">
            <span className="text-[#325880]">PDB</span>
            <span className="text-[#7dacd2]">Charges</span>
          </span>{" "}
          is a web application providing partial atomic charges of protein
          structures from the{" "}
          <a
            href="https://onlinelibrary.wiley.com/doi/full/10.1002/pro.3289"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center"
          >
            Protein Data Bank <ExternalLink className="ml-1 h-3 w-3" />
          </a>
          . The charges are computed by the{" "}
          <a
            href="https://pubs.acs.org/doi/10.1021/acs.jctc.7b00118"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center"
          >
            semiempirical quantum mechanical methods GFN1-xTB{" "}
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>{" "}
          and reproduce the PBE0/TZVP/CM5 charges.
        </p>
      </div>

      <hr className="my-8" />

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="w-full max-w-sm mb-4">
          <label htmlFor="pdbId" className="block font-bold mb-2">
            PDB ID:
          </label>
          <Input
            id="pdbId"
            name="pdbId"
            placeholder="e.g. 1alf, 2pws"
            className="mb-4"
            required
          />
        </div>
        <Button type="submit">Get charges</Button>
      </form>

      <hr className="my-8" />

      {/* Examples Section */}
      <h2 className="text-2xl font-bold mb-6">Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExampleCard
          title="Phospholipase inhibited by ibuprofen"
          description="Phospholipase A2 is an enzyme that occurs in plants, mammals, snakes, and bee venoms.
            It catalyses the hydrolysis of the ester bond in phospholipids in the cell membranes.
            Hydrolysis products are lysophosphatidic acid and free fatty acids, which can disrupt
            cellular membranes and induce inflammatory responses."
          pdbCode="2pws"
          imageUrl="/api/placeholder/400/400"
        />

        <ExampleCard
          title="Carbohydrate binding lectin"
          description="Lectin PA-IIL from the bacteria Pseudomonas aeruginosa plays a key role in its
            pathogenicity. This lectin has an unusually high affinity for carbohydrates due
            to its unique binding mode involving two calcium ions."
          pdbCode="1uzv"
          imageUrl="/api/placeholder/400/400"
        />

        <ExampleCard
          title="Potassium channel"
          description="TASK2 (TWIK-related acid-sensitive K+ channel 2) is a pH-gated ion channel belonging
            to the two-pore domain K+ (K2P) channel family. This channel maintains cellular
            homeostasis and regulates physiological responses to environmental changes."
          pdbCode="6wlv"
          imageUrl="/api/placeholder/400/400"
        />
      </div>

      <hr className="my-8" />

      {/* Contact Section */}
      <div className="text-sm text-gray-600">
        <p>
          Are you interested in a research collaboration? Feel free to{" "}
          <a
            href="mailto:ondrej.schindler@mail.muni.cz"
            className="text-blue-600 hover:text-blue-800"
          >
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
