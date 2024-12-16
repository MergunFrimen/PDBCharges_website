import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="">
      <Separator />
      <div className="flex flex-row items-center gap-x-2 text-xs">
        <span className="text-gray-500">© 2025 Ondřej Schindler</span>
        <a
          href="https://webchem.ncbr.muni.cz/Platform/Home/TermsOfUse"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Terms of Use & GDPR
        </a>
      </div>
    </footer>
  );
}
