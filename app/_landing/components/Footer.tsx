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
        {data.hours && data.hours.length > 0 && (
          <div className="mt-7">
            {data.hoursHeading && (
              <p className="text-[11px] tracking-[0.28em] uppercase mb-3" style={{ color: "var(--brand-footer-text)", opacity: 0.55 }}>
                {data.hoursHeading}
              </p>
            )}
            <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-8 gap-y-1.5">
              {data.hours.map((h, i) => (
                <li key={i} className="text-[12.5px] tracking-[0.06em] leading-relaxed" style={{ color: "var(--brand-footer-text)", opacity: 0.78 }}>
                  {h.label && (
                    <span className="font-medium mr-2" style={{ opacity: 0.95 }}>{h.label}</span>
                  )}
                  <span className="font-light">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="mt-6 text-[11px] tracking-[0.2em]" style={{ color: "var(--brand-footer-text)", opacity: 0.4 }}>
          © {new Date().getFullYear()} {data.copyright}
        </p>
      </div>
    </footer>
  );
}
