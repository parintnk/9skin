export default function Bubble({ text, dark = false, align = "left" }: { text: string; dark?: boolean; align?: "left" | "right" | "center" }) {
  const bgHex = dark ? "#404338" : "#E0DAD0";
  const color = dark ? "var(--brand-footer-text)" : "var(--brand-dark)";

  const tail =
    align === "left" ? (
      <div style={{ display: "flex", justifyContent: "flex-start", paddingLeft: 14 }}>
        <div className="sm:hidden" style={{ width: 0, height: 0, borderRight: "8px solid transparent", borderTop: `9px solid ${bgHex}` }} />
        <div className="hidden sm:block" style={{ width: 0, height: 0, borderRight: "12px solid transparent", borderTop: `13px solid ${bgHex}` }} />
      </div>
    ) : align === "right" ? (
      <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: 14 }}>
        <div className="sm:hidden" style={{ width: 0, height: 0, borderLeft: "8px solid transparent", borderTop: `9px solid ${bgHex}` }} />
        <div className="hidden sm:block" style={{ width: 0, height: 0, borderLeft: "12px solid transparent", borderTop: `13px solid ${bgHex}` }} />
      </div>
    ) : (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: 0, height: 0, borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderTop: `11px solid ${bgHex}` }} />
      </div>
    );

  return (
    <div className="flex flex-col max-w-[92vw] sm:max-w-none">
      <div
        className="rounded-xl sm:rounded-2xl px-3 sm:px-8 py-2 sm:py-5"
        style={{
          backgroundColor: bgHex,
          color,
          boxShadow: dark
            ? "0 6px 28px rgba(30,24,18,0.22), 0 1px 4px rgba(30,24,18,0.1)"
            : "0 2px 16px rgba(30,24,18,0.08)",
        }}
      >
        <p className="text-[13px] sm:text-base lg:text-[17px] font-light" style={{ letterSpacing: "0.04em" }}>
          {text}
        </p>
      </div>
      {tail}
    </div>
  );
}
