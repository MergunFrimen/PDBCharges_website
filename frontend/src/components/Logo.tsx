import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn("font-bold", className)}
    >
      <Link to="/" className="">
        <span className="text-[#325880]">PDB</span>
        <span className="text-[#7dacd2]">Charges</span>
      </Link>
    </span>
  );
}
