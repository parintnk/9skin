export default function ScrollProgress({ scrollPct }: { scrollPct: number }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50" style={{ height: 3, backgroundColor: "transparent" }}>
      <div
        style={{
          height: "100%",
          width: `${scrollPct}%`,
          background: "linear-gradient(90deg, #C5A882 0%, #A0896E 50%, #7A6652 100%)",
          boxShadow: "0 0 10px rgba(160,137,110,0.6), 0 0 4px rgba(160,137,110,0.4)",
          borderRadius: "0 2px 2px 0",
          transition: "width 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
    </div>
  );
}
