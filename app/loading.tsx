export default function Loading() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--brand-cream)", color: "var(--brand-dark)" }}
    >
      <div className="flex flex-col items-center gap-6 loading-fade">
        <div className="flex items-baseline gap-2">
          <span
            className="text-4xl sm:text-5xl tracking-widest font-light"
            style={{ fontFamily: "Georgia, serif", letterSpacing: "0.05em" }}
          >
            9skin
          </span>
          <span
            className="text-sm sm:text-base font-light"
            style={{ color: "var(--brand-gold)", letterSpacing: "0.18em" }}
          >
            玖膚
          </span>
        </div>

        <div
          className="relative h-px w-20 overflow-hidden"
          style={{ backgroundColor: "rgba(122,114,100,0.18)" }}
        >
          <span
            className="absolute inset-y-0 w-8 loading-bar"
            style={{ backgroundColor: "var(--brand-gold)" }}
          />
        </div>

        <p
          className="text-[10px] tracking-[0.4em] uppercase font-light"
          style={{ color: "var(--brand-gold)", opacity: 0.7 }}
        >
          Loading
        </p>
      </div>

      <style>{`
        @keyframes loading-bar-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes loading-fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .loading-bar {
          animation: loading-bar-slide 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .loading-fade {
          animation: loading-fade-in 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}
