import { SiLine, SiInstagram } from "react-icons/si";
import type { FooterContent } from "@/lib/content/types";

export default function Footer({ data }: { data: FooterContent }) {
  return (
    <footer style={{ backgroundColor: "var(--brand-footer)" }}>
      <div className="max-w-4xl mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-light" style={{ color: "#E8E2DA", letterSpacing: "0.18em" }}>{data.brand}</h2>
        <div className="mt-5 flex items-center justify-center gap-5">
          <a href={data.lineUrl} target="_blank" rel="noopener noreferrer" aria-label="LINE" className="transition-opacity hover:opacity-60" style={{ color: "var(--brand-footer-text)", opacity: 0.7 }}>
            <SiLine size={20} />
          </a>
          <a href={data.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-opacity hover:opacity-60" style={{ color: "var(--brand-footer-text)", opacity: 0.7 }}>
            <SiInstagram size={20} />
          </a>
        </div>
        <p className="mt-6 text-[11px] tracking-[0.2em]" style={{ color: "var(--brand-footer-text)", opacity: 0.4 }}>
          © {new Date().getFullYear()} {data.copyright}
        </p>
      </div>
    </footer>
  );
}
