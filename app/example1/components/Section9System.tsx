"use client";

export default function Section9System() {
  return (
    <section className="py-8 sm:py-20 lg:py-24 px-8 sm:px-12 lg:px-14" style={{ backgroundColor: "var(--brand-lighter)" }}>

      {/* Eyebrow with lines */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
        <p className="text-xs lg:text-[13px] font-light tracking-[0.22em] uppercase shrink-0" style={{ color: "var(--brand-muted)" }}>
          Skin Care Management System
        </p>
        <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
      </div>

      {/* Olive card */}
      <div data-reveal className="rounded-sm px-8 sm:px-10 lg:px-14 py-10 lg:py-12 mb-16 lg:mb-20" style={{ backgroundColor: "#404338" }}>
        <h2 className="text-[1.25rem] sm:text-[2.2rem] lg:text-[2.8rem] font-bold text-center text-white mb-5" style={{ letterSpacing: "0.04em" }}>
          不只是保養・而是肌膚管理系統
        </h2>
        <p className="text-[12px] lg:text-[17px] font-light text-center leading-loose mb-10 lg:mb-12 max-w-3xl mx-auto" style={{ color: "rgba(230,225,205,0.88)", letterSpacing: "0.03em" }}>
          我們相信，好的肌膚管理，不是一昧塗抹，而是建立肌膚的管理系統，是一個可以走一輩子的保養計畫。我們的每一堂課，都是一份顏值計畫書
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {[
            {
              title: "從膚況分析開始，不憑感覺保養",
              lines: ["透過【數據分析】與經驗判讀", "找出你真正的膚況問題", "專業儀器檢測配合美容師的經驗判讀", "給你最精準的肌膚診斷"],
            },
            {
              title: "客製搭配課程內容",
              lines: ["非制式化流程", "而是每次都為你調整出精準有效的課程", "根據當下膚況靈活調整步驟", "細到我們會分區域管理", "確保每次都獲得最適合的照護"],
            },
            {
              title: "養膚邏輯清晰",
              lines: ["不走極端課程路線", "不追求立即效果而犧牲肌膚健康", "我們重視的是長期穩定的美麗", "而非短暫的表面改善"],
            },
          ].map((col, i) => (
            <div key={i} data-reveal data-reveal-delay={i + 1}>
              <div className="pb-2.5 mb-4" style={{ borderBottom: "1px solid rgba(230,225,205,0.28)" }}>
                <p className="text-[12px] lg:text-[17px] font-normal text-white" style={{ letterSpacing: "0.04em" }}>
                  {col.title}
                </p>
              </div>
              <div className="space-y-2">
                {col.lines.map((line, j) => (
                  <p key={j} className="text-[11px] lg:text-sm font-light leading-relaxed" style={{ color: "rgba(230,225,205,0.78)", letterSpacing: "0.02em" }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-6" style={{ borderTop: "1px solid rgba(230,225,205,0.16)" }}>
          <p className="text-[11px] lg:text-[17px] font-light leading-loose" style={{ color: "rgba(230,225,205,0.92)", letterSpacing: "0.03em" }}>
            顏值，不只是皮膚好，而是你狀態穩定的證明。在9skin，我們不追求一次性的表面改變，而是用系統化的皮膚管理，陪你長期經營顏值資產，讓穩定狀態成為你最好的外在名片
          </p>
        </div>
      </div>

      {/* ── Circle diagram ── */}

      {/* Mobile: compact circular diagram (mirrors desktop) */}
      <div className="lg:hidden">
        {/* STEP 1-2: top center */}
        <div className="flex justify-center mb-5" data-reveal>
          <div className="text-center max-w-[260px] px-2">
            <p
              className="inline-block text-[8px] tracking-[0.24em] font-light mb-1 px-1.5 py-0.5 rounded-full"
              style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}
            >
              STEP 1–2
            </p>
            <p className="text-[12px] font-normal mb-1" style={{ letterSpacing: "0.03em" }}>
              美容師專業肌膚檢測
            </p>
            <p
              className="text-[9.5px] font-light leading-[1.6]"
              style={{ color: "var(--brand-dark)", opacity: 0.82 }}
            >
              深度分析膚況，了解肌膚耐受度與潛在問題，搭配溫和洗卸，徹底清潔表面贓汙，保護肌膚屏障，不造成刺激
            </p>
            <div
              className="w-2 h-2 rounded-full mx-auto mt-3"
              style={{ backgroundColor: "#404338" }}
            />
          </div>
        </div>

        {/* Middle row: STEP 5-6 | circle | STEP 3-4 */}
        <div className="flex items-center gap-2 justify-center">
          <div className="flex-1 text-right" data-reveal data-reveal-delay={1}>
            <p
              className="inline-block text-[8px] tracking-[0.24em] font-light mb-1 px-1.5 py-0.5 rounded-full"
              style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}
            >
              STEP 5–6
            </p>
            <p className="text-[11px] font-normal mb-0.5" style={{ letterSpacing: "0.03em" }}>
              專業手工針清
            </p>
            <p
              className="text-[10px] font-light mb-1 whitespace-nowrap"
              style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}
            >
              → 韓國醫美級護膚
            </p>
            <p
              className="text-[9.5px] font-light leading-[1.6]"
              style={{ color: "var(--brand-dark)", opacity: 0.82 }}
            >
              溫柔無痛清除粉刺與塞塞毛孔，搭配高濃度營養護理，立即補充肌膚所需，提升水潤與光澤感
            </p>
          </div>

          {/* Circle */}
          <div
            className="shrink-0 relative"
            style={{ width: 120, height: 120 }}
            data-reveal
          >
            <div
              className="w-full h-full rounded-full flex items-center justify-center"
              style={{ border: "1.5px solid rgba(80,80,56,0.4)" }}
            >
              <div className="text-center px-2">
                <p className="text-[11px] font-bold leading-snug" style={{ letterSpacing: "0.04em" }}>
                  韓式完整11步驟
                </p>
                <p className="text-[11px] font-bold leading-snug mt-0.5" style={{ letterSpacing: "0.04em" }}>
                  120分鐘極致呵護
                </p>
              </div>
            </div>
            {/* Dots at step connection points */}
            <div
              className="absolute w-2 h-2 rounded-full"
              style={{ top: -4, left: "calc(50% - 4px)", backgroundColor: "#404338" }}
            />
            <div
              className="absolute w-2 h-2 rounded-full"
              style={{ top: "calc(50% - 4px)", right: -4, backgroundColor: "#404338" }}
            />
            <div
              className="absolute w-2 h-2 rounded-full"
              style={{ top: "calc(50% - 4px)", left: -4, backgroundColor: "#404338" }}
            />
            <div
              className="absolute w-2 h-2 rounded-full"
              style={{ top: "calc(91% - 4px)", left: "calc(79% - 4px)", backgroundColor: "#404338" }}
            />
            <div
              className="absolute w-2 h-2 rounded-full"
              style={{ top: "calc(91% - 4px)", left: "calc(23% - 4px)", backgroundColor: "#404338" }}
            />
          </div>

          <div className="flex-1" data-reveal data-reveal-delay={2}>
            <p
              className="inline-block text-[8px] tracking-[0.24em] font-light mb-1 px-1.5 py-0.5 rounded-full"
              style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}
            >
              STEP 3–4
            </p>
            <p className="text-[11px] font-normal mb-0.5" style={{ letterSpacing: "0.03em" }}>
              毛孔軟化
            </p>
            <p
              className="text-[10px] font-light mb-1 whitespace-nowrap"
              style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}
            >
              → 水飛梭深層清潔
            </p>
            <p
              className="text-[9.5px] font-light leading-[1.6]"
              style={{ color: "var(--brand-dark)", opacity: 0.82 }}
            >
              軟化角質與毛孔，搭配水飛梭去除深層贓污與老廢角質，改善毛孔塞塞，使肌膚呼吸更順暢
            </p>
          </div>
        </div>

        {/* Bottom row: STEP 7-8 | spacer | STEP 9-10 */}
        <div className="flex gap-2 mt-4 justify-center">
          <div className="flex-1 text-right" data-reveal data-reveal-delay={3}>
            <div
              className="w-2 h-2 rounded-full ml-auto mb-3"
              style={{ backgroundColor: "#404338" }}
            />
            <p
              className="inline-block text-[8px] tracking-[0.24em] font-light mb-1 px-1.5 py-0.5 rounded-full"
              style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}
            >
              STEP 7–8
            </p>
            <p className="text-[11px] font-normal mb-0.5" style={{ letterSpacing: "0.03em" }}>
              冰導舒緩
            </p>
            <p
              className="text-[10px] font-light mb-1 whitespace-nowrap"
              style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}
            >
              → 兩道修護面膜
            </p>
            <p
              className="text-[9.5px] font-light leading-[1.6]"
              style={{ color: "var(--brand-dark)", opacity: 0.82 }}
            >
              使用冰導舒緩精華，鎮靜、降低泛紅；接著兩道修護面膜深度保濕、修復肌膚屏障，使肌膚穩定、柔嫩有彈性
            </p>
          </div>
          <div className="shrink-0" style={{ width: 40 }} />
          <div className="flex-1" data-reveal data-reveal-delay={4}>
            <div
              className="w-2 h-2 rounded-full mb-3"
              style={{ backgroundColor: "#404338" }}
            />
            <p
              className="inline-block text-[8px] tracking-[0.24em] font-light mb-1 px-1.5 py-0.5 rounded-full"
              style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}
            >
              STEP 9–10
            </p>
            <p className="text-[11px] font-normal mb-0.5" style={{ letterSpacing: "0.03em" }}>
              PDT 照光 → 完成
            </p>
            <p
              className="text-[10px] font-light mb-1 whitespace-nowrap"
              style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}
            >
              → 韓國醫美級護膚
            </p>
            <p
              className="text-[9.5px] font-light leading-[1.6]"
              style={{ color: "var(--brand-dark)", opacity: 0.82 }}
            >
              專業光療促進修護，搭配最後一輪醫美級護膚精華加強肌膚吸收與修護。療程結束後，肌膚即刻展現健康光澤，平滑透亮、穩定有彈性
            </p>
          </div>
        </div>
      </div>


      {/* Desktop: circle layout */}
      <div className="hidden lg:block">

        {/* STEP 1-2: top center */}
        <div className="flex justify-center mb-6">
          <div className="text-center max-w-[260px]">
            <p className="inline-block text-[11px] tracking-[0.28em] font-light mb-1.5 px-2.5 py-0.5 rounded-full" style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}>STEP 1–2</p>
            <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>美容師專業肌膚檢測</p>
            <p className="text-[13px] lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>深度分析膚況，了解肌膚耐受度與潛在問題，搭配溫和洗卸，徹底清潔表面贓汙，保護肌膚屏障，不造成刺激</p>
            <div className="w-2.5 h-2.5 rounded-full mx-auto mt-5" style={{ backgroundColor: "#404338" }} />
          </div>
        </div>

        {/* Middle: STEP 5-6 | circle | STEP 3-4 */}
        <div className="flex items-center gap-10 max-w-5xl mx-auto">
          <div className="flex-1 text-right">
            <p className="inline-block text-[11px] tracking-[0.28em] font-light mb-1.5 px-2.5 py-0.5 rounded-full" style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}>STEP 5–6</p>
            <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>專業手工針清</p>
            <p className="text-[15px] font-light mb-2" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>→ 韓國醫美級護膚</p>
            <p className="text-[13px] lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>溫柔無痛清除粉刺與塞塞毛孔，搭配高濃度營養護理，立即補充肌膚所需，提升水潤與光澤感</p>
          </div>

          {/* Circle */}
          <div className="shrink-0 relative" style={{ width: 300, height: 300 }}>
            <div className="w-full h-full rounded-full flex items-center justify-center" style={{ border: "1.5px solid rgba(80,80,56,0.4)" }}>
              <div className="text-center px-10">
                <p className="text-lg font-bold leading-snug" style={{ letterSpacing: "0.04em" }}>韓式完整11步驟</p>
                <p className="text-lg font-bold leading-snug" style={{ letterSpacing: "0.04em" }}>120分鐘極致呵護</p>
                <p className="text-[11px] font-light mt-3 tracking-widest" style={{ color: "var(--brand-muted)" }}>120 minutes of ultimate care</p>
              </div>
            </div>
            {/* Dots at step connection points */}
            <div className="absolute w-3 h-3 rounded-full" style={{ top: -6, left: "calc(50% - 6px)", backgroundColor: "#404338" }} />
            <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(50% - 6px)", right: -6, backgroundColor: "#404338" }} />
            <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(50% - 6px)", left: -6, backgroundColor: "#404338" }} />
            <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(91% - 6px)", left: "calc(79% - 6px)", backgroundColor: "#404338" }} />
            <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(91% - 6px)", left: "calc(23% - 6px)", backgroundColor: "#404338" }} />
          </div>

          <div className="flex-1">
            <p className="inline-block text-[11px] tracking-[0.28em] font-light mb-1.5 px-2.5 py-0.5 rounded-full" style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}>STEP 3–4</p>
            <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>毛孔軟化</p>
            <p className="text-[15px] font-light mb-2" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>→ 水飛梭深層清潔</p>
            <p className="text-[13px] lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>軟化角質與毛孔，搭配水飛梭去除深層贓污與老廢角質，改善毛孔塞塞，使肌膚呼吸更順暢</p>
          </div>
        </div>

        {/* Bottom: STEP 7-8 | spacer | STEP 9-10 */}
        <div className="flex gap-10 max-w-5xl mx-auto mt-6">
          <div className="flex-1 text-right">
            <div className="w-2.5 h-2.5 rounded-full ml-auto mb-5" style={{ backgroundColor: "#404338" }} />
            <p className="inline-block text-[11px] tracking-[0.28em] font-light mb-1.5 px-2.5 py-0.5 rounded-full" style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}>STEP 7–8</p>
            <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>冰導舒緩</p>
            <p className="text-[15px] font-light mb-2" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>→ 兩道修護面膜</p>
            <p className="text-[13px] lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>使用冰導舒緩精華，鎮靜、降低泛紅；接著兩道修護面膜深度保濕、修復肌膚屏障，使肌膚穩定、柔嫩有彈性</p>
          </div>
          <div className="shrink-0" style={{ width: 300 }} />
          <div className="flex-1">
            <div className="w-2.5 h-2.5 rounded-full mb-5" style={{ backgroundColor: "#404338" }} />
            <p className="inline-block text-[11px] tracking-[0.28em] font-light mb-1.5 px-2.5 py-0.5 rounded-full" style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}>STEP 9–10</p>
            <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>PDT照光 → 完成</p>
            <p className="text-[15px] font-light mb-2" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>→ 韓國醫美級護膚</p>
            <p className="text-[13px] lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>專業光療促進修護，搭配最後一輪醫美級護膚精華加強肌膚吸收與修護。療程結束後，肌膚即刻展現健康光澤，平滑透亮、穩定有彈性</p>
          </div>
        </div>

      </div>

    </section>
  );
}
