import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold">
          <span className="text-[#325880]">PDB</span>
          <span className="text-[#7dacd2]">Charges</span>
        </Link>
      </div>
    </header>
  );
}
