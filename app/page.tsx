"use client";

import { useState, useEffect } from "react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

const LAUNCH_DATE = new Date("2026-03-25T10:00:00");

export default function ComingSoon() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--brand-cream)", color: "var(--brand-dark)" }}>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">

        {/* Logo */}
        <div className="mb-16">
          <div className="flex items-baseline gap-2 justify-center">
            <span
              className="text-5xl tracking-widest font-light"
              style={{ fontFamily: "Georgia, serif", color: "var(--brand-dark)", letterSpacing: "0.05em" }}
            >
              9skin
            </span>
            <span
              className="text-base font-light"
              style={{ color: "var(--brand-gold)", letterSpacing: "0.15em" }}
            >
              玖膚
            </span>
          </div>
          <div className="mt-3 mx-auto h-px w-20" style={{ backgroundColor: "var(--brand-gold)", opacity: 0.5 }} />
        </div>

        {/* Coming Soon heading */}
        <div className="mb-8">
          <p
            className="text-sm tracking-[0.4em] uppercase mb-4 font-light"
            style={{ color: "var(--brand-gold)" }}
          >
            Coming Soon
          </p>
          <h1
            className="text-4xl md:text-5xl font-light tracking-widest mb-6"
            style={{ letterSpacing: "0.2em" }}
          >
            即將開幕
          </h1>
          <div className="mx-auto h-px w-16" style={{ backgroundColor: "var(--brand-dark)", opacity: 0.2 }} />
        </div>

        {/* Brand tagline */}
        <div className="max-w-md mb-16 space-y-2">
          <p className="text-base font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.75 }}>
            養膚，是一件更深、更長遠的事
          </p>
          <p className="text-sm font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.6 }}>
            我們像管理資產一樣，陪你管理『顏值』
          </p>
        </div>

        {/* Countdown */}
        <div className="flex gap-8 md:gap-12 mb-16">
          {[
            { value: days, label: "天" },
            { value: hours, label: "時" },
            { value: minutes, label: "分" },
            { value: seconds, label: "秒" },
          ].map(({ value, label }, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-sm"
                style={{
                  backgroundColor: "var(--brand-light)",
                  border: "1px solid rgba(56,50,42,0.15)",
                }}
              >
                <span
                  className="text-2xl md:text-3xl font-light tabular-nums"
                  style={{ color: "var(--brand-dark)" }}
                >
                  {String(value).padStart(2, "0")}
                </span>
              </div>
              <span
                className="text-xs tracking-widest font-light"
                style={{ color: "var(--brand-gold)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

      </main>

      {/* Footer — locations */}
      <footer
        className="py-6 px-6"
        style={{ backgroundColor: "var(--brand-footer)" }}
      >
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-16">
          <div className="flex items-center gap-2">
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
              <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 7 4.5a2.5 2.5 0 0 1 0 5z" fill="var(--brand-footer-text)"/>
            </svg>
            <span className="text-sm font-light tracking-wide" style={{ color: "var(--brand-footer-text)" }}>
              台北店：位於松江南京站步行3分鐘
            </span>
          </div>
          <div
            className="hidden sm:block w-px h-4"
            style={{ backgroundColor: "rgba(197,186,176,0.3)" }}
          />
          <div className="flex items-center gap-2">
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
              <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 7 4.5a2.5 2.5 0 0 1 0 5z" fill="var(--brand-footer-text)"/>
            </svg>
            <span className="text-sm font-light tracking-wide" style={{ color: "var(--brand-footer-text)" }}>
              高雄店：位於巨蛋站步行6分鐘
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
