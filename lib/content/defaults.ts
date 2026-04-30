import type { AllContent } from "./types";

// Default content, extracted from current hard-coded values across all Section*.tsx files.
// Used both as (a) landing-page fallback when DB is empty and (b) seed for the DB.

export const defaults: AllContent = {
  s1_hero: {
    logo: "/img/9skin logo.png",
    heroImage: "/img/Page 1.JPG",
    heading: "「關於玖膚」",
    paragraphsDesktop: [
      "養膚,是一件深遠的事,我們陪你管理「顏值」",
      "規劃專屬保養計畫,成為你的顏值資產顧問",
      "在這裡,你可以慢下來,被傾聽、被理解",
      "溫潤空間與細緻服務,讓肌膚與心一起放鬆",
    ],
    paragraphsMobile: [
      "養膚,是一件深遠的事,我們陪你管理「顏值」",
      "規劃專屬保養計畫,成為你的顏值資產顧問",
      "在這裡,你可以慢下來,被傾聽、被理解",
      "溫潤空間與細緻服務,讓肌膚與心一起放鬆",
    ],
    locationTaipei: "台北・松江南京",
    locationKaohsiung: "高雄・巨蛋站",
    locationTaipeiDesktop: "台北店：位於松江南京站步行3分鐘",
    locationKaohsiungDesktop: "高雄店：位於巨蛋站步行6分鐘",
  },

  s2_concerns: {
    heading: "常見的肌膚困擾，你中了幾項？",
    subheading: "How many of these common skin concerns do you struggle with?",
    concerns: [
      { img: "/img/Page 2-1.png", title: "痘痘反覆出現", subtitle: "Persistent acne", desc: "一次又一次治痘,皮膚卻永遠在反覆出狀況。痘痘從來不是單一原因。出油、 發炎、細菌、角質代謝肌膚屏障只要一個環節失衡,就很難真正穩定。與其一直「處理痘痘」不如把皮膚的整體狀態調回健康" },
      { img: "/img/Page 2-2.png", title: "保養品一直買,皮膚卻沒變好", subtitle: "保養品購物，肌膚不變", desc: "明明用的是專櫃、醫美等級保養肌膚卻怎麼都不透亮?不是你保養不夠, 是皮膚狀態不對角質太厚,吸收進不去;角質太薄,水留不住眞正該做的,是先了解肌膚再把皮膚慢慢養回健康、會發光的狀態" },
      { img: "/img/Page 2-3.png", title: "越認真保養,皮膚卻越敏感", subtitle: "More skincare, more sensitive", desc: "做臉、煥膚、雷射都嘗試過皮膚卻越來越紅、越來越薄? 當肌膚已經不穩定,再一味追求刺激與重建,反而只會讓皮膚更疲憊。真正有效的保養是從肌膚生理出發,選對現在「適合你」的照護方式" },
      { img: "/img/Page 2-4.png", title: "想瘦小臉,卻不想再忍痛", subtitle: "瘦臉不痛", desc: "想要緊緻小臉卻對電波、音波的疼痛感卻步? 瘦臉不一定要忍痛。透過非侵入式的儀器護理,科技加持,安全溫和又看得見效果。從表層到深層喚醒肌膚支撐力,讓肌膚感受更緊緻、改善鬆弛感,最終感受輪廓更立體" },
    ],
    bottomQuote: "這些問題看似獨立,實際上都指向同一個核心:肌膚缺乏正確的深層調理與系統化管理",
  },

  s3_problems: {
    heading: "變美的路上,你也正在經歷這些嗎?",
    eyebrow: "Skin problems",
    bubblesDesktop: [
      { text: "保養品越買越多,毛孔卻沒有變細,反而更明顯", dark: false },
      { text: "一到換季就泛紅、刺癢、脫皮,怎麼保養都不安心", dark: false },
      { text: "痘痘藥、A酸都試過,皮膚卻始終反覆、不穩定", dark: true },
      { text: "明明用的是高價保養,肌膚卻還是黯淡、沒精神", dark: true },
      { text: "不適合自己的課程與產品,讓皮膚越照顧越敏感", dark: false },
    ],
    bubblesMobile: [
      { text: "保養品越買越多,毛孔卻沒有變細,反而更明顯", dark: false },
      { text: "痘痘藥、A酸都試過,皮膚卻始終反覆、不穩定", dark: true },
      { text: "一到換季就泛紅、刺癢、脫皮,怎麼保養都不安心", dark: false },
      { text: "明明用的是高價保養,肌膚卻還是黯淡、沒精神", dark: true },
      { text: "不適合自己的課程與產品,讓皮膚越照顧越敏感", dark: false },
    ],
    para1: "問題的核心不在於你不夠努力,而是缺少對肌膚的正確理解與專業指引如果你也在想「我只是想要一個穩定、透亮、不再折騰的肌膚,到底該從哪裡開始?」",
    para2: "真正的改變,從了解肌膚狀態、回到皮膚本身的節奏開始!",
  },

  s4_three_keys: {
    heading: "想要彈潤透亮的水煮蛋肌?",
    intro: [
      "我們先為你完整評估肌膚狀況,了解當下真正需要的是什麼",
      "想把皮膚慢慢養好,先從這三個關鍵開始:",
    ],
    desktopImage: "/img/Page 4.png",
    mobileBg: "/img/s4-mobile-bg.png",
    steps: [
      { num: "01", title: "評估你的肌膚屬性", lines: ["透過專業檢測與分析找出真正的膚況問題,而非憑感覺保養", "我們會同時評估肌膚耐受度、當下的不穩定狀態與已存在的問題點", "了解肌膚能承受的程度與修護需求", "再為每一位顧客量身規劃最適合的客製化照護方案"] },
      { num: "02", title: "以肌膚調理・養護為前提", lines: ["不追求立即見效的激進手段而是建立肌膚的健康基礎", "從根本強化肌膚屏障,讓皮膚自然恢復平衡狀態"] },
      { num: "03", title: "守護肌膚,讓好狀態常在", lines: ["肌膚已達理想狀態", "我們專注守護,維持最佳膚況,讓亮澤與彈性長久可見"] },
    ],
  },

  s5_why_choose: {
    heading: "為什麼選擇玖膚？",
    subheading: "Why choose us?",
    columns: [
      {
        label: "醫美療程", dark: false, featured: false,
        rows: [
          { label: "費用", lines: ["價格 $5000以上"] },
          { label: "時間", lines: ["1～2月一次，平均1hr/次"] },
          { label: "特色", lines: ["以雷射為主作為治療", "但是針對需要維護保養的敏感肌", "或是需要專業手工針清的粉刺痘痘肌", "雷射並非最佳首選"] },
          { label: "成效", lines: ["快速立即見效", "但長期施作肌膚容易敏感及需承擔操作風險"] },
        ],
      },
      {
        label: "玖膚皮膚管理", dark: true, featured: true,
        rows: [
          { label: "費用", lines: ["價格 $2~3000"] },
          { label: "時間", lines: ["1～2月一次，平均60~120分/次"] },
          { label: "特色", lines: ["從專業肌膚檢測開始，深入了解肌膚底層狀況", "找出真正影響膚況的關鍵", "依據每個人的膚質、肌膚耐受度與不同區域的問題差異", "搭配專業皮膚管理儀器、專業手法與頂級院線保養品", "為肌膚各區量身規劃對應的管理方式", "真正做到客製化的皮膚分區管理", "讓每一次做臉都不是浪費，而是看得到改變"] },
          { label: "成效", lines: ["透過系統性的皮膚管理不只是短暫好看而是膚質真正被改善", "達到穩定、透亮、有彈性的水煮蛋肌"] },
        ],
      },
      {
        label: "傳統美容", dark: false, featured: false,
        rows: [
          { label: "費用", lines: ["價格 $2000左右"] },
          { label: "時間", lines: ["1～2月一次，平均60~120分/次"] },
          { label: "特色", lines: ["以粉刺清潔與基礎保濕為核心", "流程相對固定", "較少結合科技化輔助調整", "因此在皮膚質地層面的改善較為有限"] },
          { label: "成效", lines: ["以基礎清潔保濕", "以及舒適放鬆為主"] },
        ],
      },
    ],
  },

  s6_skin_care: {
    eyebrow: "Korean deep skin care",
    heading: "SKIN CARE",
    subtitleZh: "韓式深層保養",
    subtitleTag: "不只表面，更深入肌底",
    description: "我們的客製化皮膚管理課程，適合痘痘肌、敏感肌、酒糟肌以及乾燥肌等各種膚況，透過11個完整步驟，約120分鐘的專屬課程，由美容師一對一進行肌膚檢測與專業諮詢，幫你全面了解自己的肌膚狀態",
    itemsHeading: "課程內容包括",
    image: "/img/Page 6.JPG",
    items: [
      { num: "01", title: "水飛梭", desc: "深層清潔毛孔，去除老廢角質與髒汙" },
      { num: "02", title: "手工針清", desc: "無痛感手法細膩，針對粉刺與痘痘清除，溫和不傷肌膚" },
      { num: "03", title: "水楊酸煥膚", desc: "促進肌膚更新，調理粉刺，細緻膚質" },
      { num: "04", title: "保濕導入", desc: "舒緩肌膚，加強保濕" },
      { num: "05", title: "調理式面膜", desc: "針對不同肌膚狀態進行深層修護" },
      { num: "06", title: "功能性軟膜", desc: "高包覆調理，協助補水、提升吸收，讓肌膚穩定" },
      { num: "07", title: "PDT照光修護", desc: "減緩泛紅與不穩定感，促進修護" },
    ],
    footer: [
      "全程使用頂級院線保養品，確保肌膚得到最完整、最精準的照護",
      "每次課程都不只是表面保養而是從根本調理肌膚，幫助肌膚恢復健康、穩定與透亮，真正看得見的效果",
    ],
  },

  s7_transformation: {
    eyebrow: "Skin Transformation Method",
    heading: "玖膚水煮蛋肌養成術",
    subheading: "Our 4 Commitments",
    cards: [
      { img: "/img/Page 7-1.png", alt: "諮詢照顧", label: "專屬諮詢", icon: "clipboard", text: "專屬美容師一對一諮詢照顧，為你設計客製化護膚流程" },
      { img: "/img/Page 7-2.jpg", alt: "舒適空間", label: "舒適環境", icon: "leaf", text: "溫馨舒適且乾淨的空間，用心服務讓肌膚與心情一起放鬆" },
      { img: "/img/Page 7-3.png", alt: "專業手法", label: "專業手法", icon: "sparkles", text: "搭配進口院線保養品與專業儀器輔助，透過美容師細膩的手法，讓每一次保養都發揮應有的效果" },
      { img: "/img/Page 7-4.png", alt: "客製流程", label: "客製流程", icon: "flask", text: "採用顧問式概念，依不同膚質與護理階段，量身設計分區客製化流程，真正做到每個細節都符合肌膚需求" },
    ],
  },

  s8_mission: {
    eyebrow: "Let you meet the best version of yourself",
    logo: "/img/9skin logo.png",
    heading: "讓你遇見最好的自己",
    subheading: "我們的使命",
    paragraphs: [
      "9skin成立於2021年，在台北與高雄皆有分店，以改善2000個以上從問題肌膚到健康肌，再邁向變成細緻的光澤肌。",
      "我們提供8種護膚課程，其中以『韓式深層保養』最受歡迎，許多客人第一次體驗後就成為長期回購的忠實顧客。",
      "創立玖膚，只為了一個使命：幫助每個人提升顏值、增加價值，讓你遇見最好的自己。",
    ],
    founderStoryEyebrow: "The founder's story",
    founderStoryHeading: "創辦人的故事",
    founderStoryParagraphs: [
      "小時候的我，是同學眼中的「小黑妹」，因外在曾在學校被取笑。那段經歷讓我深刻感受到自信的重要，也激發我投入保養研究。",
      "經過努力與學習，我找到了屬於自己的美，也下定決心：把這項專業技術傳承下去，幫助更多人看見自己最美的一面。",
      "正是曾經的低谷，造就了現在的玖膚。因為這段經歷，我知道如何改變自己，也希望每一位走進玖膚的人，都能看見肌膚的改變、重拾自信，活出最美好的自己。",
    ],
    salonImage: "/img/Page 8-2.jpg",
    studioImage: "/img/Page 8-1.JPG",
  },

  s9_system: {
    eyebrow: "Skin Care Management System",
    cardHeading: "不只是保養・而是肌膚管理系統",
    cardSubheading: "我們相信，好的肌膚管理，不是一昧塗抹，而是建立肌膚的管理系統，是一個可以走一輩子的保養計畫。我們的每一堂課，都是一份顏值計畫書",
    pillars: [
      { title: "從膚況分析開始，不憑感覺保養", lines: ["透過【數據分析】與經驗判讀", "找出你真正的膚況問題", "專業儀器檢測配合美容師的經驗判讀", "給你最精準的肌膚診斷"] },
      { title: "客製搭配課程內容", lines: ["非制式化流程", "而是每次都為你調整出精準有效的課程", "根據當下膚況靈活調整步驟", "細到我們會分區域管理", "確保每次都獲得最適合的照護"] },
      { title: "養膚邏輯清晰", lines: ["不走極端課程路線", "不追求立即效果而犧牲肌膚健康", "我們重視的是長期穩定的美麗", "而非短暫的表面改善"] },
    ],
    cardFooter: "顏值，不只是皮膚好，而是你狀態穩定的證明。在9skin，我們不追求一次性的表面改變，而是用系統化的皮膚管理，陪你長期經營顏值資產，讓穩定狀態成為你最好的外在名片",
    circleTitle1: "韓式完整11步驟",
    circleTitle2: "120分鐘極致呵護",
    circleSubtitle: "120 minutes of ultimate care",
    circleImage: "",
    step1: { label: "STEP 1–2", title: "美容師專業肌膚檢測", desc: "深度分析膚況，了解肌膚耐受度與潛在問題，搭配溫和洗卸，徹底清潔表面贓汙，保護肌膚屏障，不造成刺激" },
    step2: { label: "STEP 3–4", title: "毛孔軟化", arrow: "→ 水飛梭深層清潔", desc: "軟化角質與毛孔，搭配水飛梭去除深層贓污與老廢角質，改善毛孔塞塞，使肌膚呼吸更順暢" },
    step3: { label: "STEP 5–6", title: "專業手工針清", arrow: "→ 韓國醫美級護膚", desc: "溫柔無痛清除粉刺與塞塞毛孔，搭配高濃度營養護理，立即補充肌膚所需，提升水潤與光澤感" },
    step4: { label: "STEP 7–8", title: "冰導舒緩", arrow: "→ 兩道修護面膜", desc: "使用冰導舒緩精華，鎮靜、降低泛紅；接著兩道修護面膜深度保濕、修復肌膚屏障，使肌膚穩定、柔嫩有彈性" },
    step5: { label: "STEP 9–10", title: "PDT照光 → 完成", arrow: "→ 韓國醫美級護膚", desc: "專業光療促進修護，搭配最後一輪醫美級護膚精華加強肌膚吸收與修護。療程結束後，肌膚即刻展現健康光澤，平滑透亮、穩定有彈性" },
  },

  s10_results: {
    eyebrow: "Before & After",
    heading: "顧客真實成效見證",
    subheading: "每一張照片，都是一段蛻變的故事",
    items: [
      { img: "/img/BAreview/Page 10-1.png", title: "韓式深層保養" },
      { img: "/img/BAreview/Page 10-2.png", title: "再生光" },
      { img: "/img/BAreview/Page 10-3.png", title: "草藥煥膚" },
      { img: "/img/BAreview/Page 10-4.png", title: "玖式微針" },
      { img: "/img/BAreview/Page 10-5.png", title: "韓式深層保養＋再生光" },
      { img: "/img/BAreview/Page 10-6.png", title: "韓式深層保養＋草藥煥膚" },
      { img: "/img/BAreview/Page 10-7.png", title: "無痕水光" },
      { img: "/img/BAreview/Page 10-8.png", title: "童顏外泌體" },
    ],
    disclaimer: "以上均為顧客真實案例，效果因個人膚況而異",
  },

  s10b_cta: {
    eyebrow: "開始你的肌膚之旅",
    heading: "立即預約，讓肌膚遇見改變",
    text: "專屬美容師為你量身規劃，打造屬於你的水煮蛋肌",
    buttonText: "LINE 立即預約 · Book Now",
    buttonUrl: "https://line.me/R/ti/p/@9skin",
  },

  s11_kol: {
    eyebrow: "KOL Reviews",
    heading: "眞實口碑・看得見的改變",
    subheading: "Real Testimonials, Visible Transformations.",
    featuredHeading: "KOL與顧客一致好評",
    featuredPara1: "許多美容部落客與KOL體驗後都給予高度評價，不只是因為立即的效果，更重視的是玖膚對肌膚健康的長期關注",
    featuredPara2: "超過5000位顧客的信任，來自於我們對每一位客人的用心照護。每一則好評都是我們持續進步的動力",
    featuredFooter: "Highly positive feedback from KOLs and customers",
    featuredImages: [
      "/img/Page 11 KOL Reviews/Page 11-4-1.png",
      "/img/Page 11 KOL Reviews/Page 11-4-2.png",
    ],
    row1: [
      { src: "/img/Page 11 KOL Reviews/Page \u200d11-1-1.png", alt: "KOL review 1" },
      { src: "/img/Page 11 KOL Reviews/Page 11-1-2.png", alt: "KOL review 2" },
      { src: "/img/Page 11 KOL Reviews/Page 11-1-3.png", alt: "KOL review 3" },
      { src: "/img/Page 11 KOL Reviews/Page 11-1-4.png", alt: "KOL review 4" },
      { src: "/img/Page 11 KOL Reviews/Page 11-2-1.png", alt: "KOL review 5" },
      { src: "/img/Page 11 KOL Reviews/Page 11-2-2.png", alt: "KOL review 6" },
      { src: "/img/Page 11 KOL Reviews/Page 11-2-3.png", alt: "KOL review 7" },
    ],
    row2: [
      { src: "/img/Page 11 KOL Reviews/Page 11-2-4.png", alt: "KOL review 8" },
      { src: "/img/Page 11 KOL Reviews/Page 11-3-1.png", alt: "KOL review 9" },
      { src: "/img/Page 11 KOL Reviews/Page 11-3-2.png", alt: "KOL review 10" },
      { src: "/img/Page 11 KOL Reviews/Page 11-3-3.png", alt: "KOL review 11" },
      { src: "/img/Page 11 KOL Reviews/Page 11-3-4.png", alt: "KOL review 12" },
      { src: "/img/Page 11 KOL Reviews/Page 11-4-1.png", alt: "KOL review 13" },
      { src: "/img/Page 11 KOL Reviews/Page 11-4-2.png", alt: "KOL review 14" },
    ],
  },

  s13_environment: {
    eyebrow: "Environmental Introduction",
    heading: "環境介紹",
    description: "以安定、乾淨、柔和的空間語彙，讓顧客從入店開始就能慢下來，專心感受每一次護理。",
    images: [
      { src: "/img/Page 12-2.jpg", alt: "護膚床" },
      { src: "/img/Page 12-1.jpg", alt: "歡迎茶飲" },
      { src: "/img/Page 12-3.jpg", alt: "肌膚檢測儀器" },
      { src: "/img/Page 12-4.jpg", alt: "舒適候診空間" },
    ],
  },

  footer: {
    brand: "玖膚工作室",
    lineUrl: "https://line.me/R/ti/p/@9skin",
    instagramUrl: "https://www.instagram.com/9skin_999/",
    copyright: "9skin Studio · 台北 · 高雄",
  },

  nav: {
    sections: [
      { id: "s1", label: "關于我們" },
      { id: "s6", label: "韓式深層保養" },
      { id: "s5", label: "為什麼選擇玖膚" },
      { id: "s7", label: "玖膚水煮蛋肌" },
      { id: "s8", label: "我們的使命" },
      { id: "s10", label: "顧客成效見證" },
      { id: "s11", label: "KOL好評" },
      { id: "s12", label: "LINE顧客好評" },
    ],
  },
};
