// All section content types. Images are stored as strings (either /img/... public paths
// or Supabase Storage object paths resolved via lib/img.ts).

export type S1Hero = {
  logo: string;
  heroImage: string;
  heading: string;
  paragraphsDesktop: string[];
  paragraphsMobile: string[];
  locationTaipei: string; // mobile short
  locationKaohsiung: string; // mobile short
  locationTaipeiDesktop: string;
  locationKaohsiungDesktop: string;
};

export type S2Concern = { img: string; title: string; subtitle: string; desc: string };
export type S2Concerns = {
  heading: string;
  subheading: string;
  concerns: S2Concern[]; // 4
  bottomQuote: string;
};

export type S3Problems = {
  heading: string;
  eyebrow: string;
  bubblesDesktop: { text: string; dark: boolean }[];
  bubblesMobile: { text: string; dark: boolean }[];
  para1: string;
  para2: string;
};

export type S4Step = { num: string; title: string; lines: string[] };
export type S4ThreeKeys = {
  heading: string;
  intro: string[];
  desktopImage: string;
  mobileBg: string;
  steps: S4Step[];
};

export type S5Row = { label: string; lines: string[] };
export type S5Column = { label: string; dark: boolean; featured: boolean; rows: S5Row[] };
export type S5WhyChoose = {
  heading: string;
  subheading: string;
  columns: S5Column[]; // 3
};

export type S6Item = { num: string; title: string; desc: string };
export type S6SkinCare = {
  eyebrow: string;
  heading: string;
  subtitleZh: string;
  subtitleTag: string;
  description: string;
  itemsHeading: string;
  image: string;
  items: S6Item[];
  footer: string[];
};

export type S7Card = { img: string; alt: string; label: string; icon: string; text: string };
// icon: one of "clipboard" | "leaf" | "sparkles" | "flask"
export type S7Transformation = {
  eyebrow: string;
  heading: string;
  subheading: string;
  cards: S7Card[]; // 4
};

export type S8Mission = {
  eyebrow: string;
  logo: string;
  heading: string;
  subheading: string;
  paragraphs: string[];
  founderStoryEyebrow: string;
  founderStoryHeading: string;
  founderStoryParagraphs: string[];
  salonImage: string;
  studioImage: string;
};

export type S9Pillar = { title: string; lines: string[] };
export type S9Step = { label: string; title: string; arrow?: string; desc: string };
export type S9System = {
  eyebrow: string;
  cardHeading: string;
  cardSubheading: string;
  pillars: S9Pillar[]; // 3
  cardFooter: string;
  circleTitle1: string;
  circleTitle2: string;
  circleSubtitle: string;
  circleImage?: string;
  step12: S9Step;
  step34: S9Step;
  step56: S9Step;
  step78: S9Step;
  step910: S9Step;
};

export type S10BA = { img: string; title: string };
export type S10Results = {
  eyebrow: string;
  heading: string;
  subheading: string;
  items: S10BA[]; // 8
  disclaimer: string;
};

export type S10bCTA = {
  eyebrow: string;
  heading: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
};

export type S11KOL = {
  eyebrow: string;
  heading: string;
  subheading: string;
  featuredHeading: string;
  featuredPara1: string;
  featuredPara2: string;
  featuredFooter: string;
  featuredImages: string[]; // 2 images used in the featured block (src only)
  row1: { src: string; alt: string }[];
  row2: { src: string; alt: string }[];
};

export type S13Environment = {
  eyebrow: string;
  heading: string;
  description: string;
  images: { src: string; alt: string }[]; // 4
};

export type FooterContent = {
  brand: string;
  lineUrl: string;
  instagramUrl: string;
  copyright: string;
};

export type NavSection = { id: string; label: string };

export type AllContent = {
  s1_hero: S1Hero;
  s2_concerns: S2Concerns;
  s3_problems: S3Problems;
  s4_three_keys: S4ThreeKeys;
  s5_why_choose: S5WhyChoose;
  s6_skin_care: S6SkinCare;
  s7_transformation: S7Transformation;
  s8_mission: S8Mission;
  s9_system: S9System;
  s10_results: S10Results;
  s10b_cta: S10bCTA;
  s11_kol: S11KOL;
  s13_environment: S13Environment;
  footer: FooterContent;
  nav: { sections: NavSection[] };
};

export type SectionKey = keyof AllContent;

export const SECTION_KEYS: SectionKey[] = [
  "s1_hero",
  "s2_concerns",
  "s3_problems",
  "s4_three_keys",
  "s5_why_choose",
  "s6_skin_care",
  "s7_transformation",
  "s8_mission",
  "s9_system",
  "s10_results",
  "s10b_cta",
  "s11_kol",
  "s13_environment",
  "footer",
  "nav",
];

export const SECTION_LABELS: Record<SectionKey, string> = {
  s1_hero: "S1 · 關於玖膚 / Hero",
  s2_concerns: "S2 · 常見肌膚困擾",
  s3_problems: "S3 · 變美的路上",
  s4_three_keys: "S4 · 三個關鍵",
  s5_why_choose: "S5 · 為什麼選擇玖膚",
  s6_skin_care: "S6 · 韓式深層保養",
  s7_transformation: "S7 · 玖膚水煮蛋肌",
  s8_mission: "S8 · 我們的使命",
  s9_system: "S9 · 皮膚管理系統",
  s10_results: "S10 · 成效見證",
  s10b_cta: "S10b · 立即預約 CTA",
  s11_kol: "S11 · KOL好評",
  s13_environment: "S13 · 環境介紹",
  footer: "Footer · 頁尾",
  nav: "Nav · 側邊導覽",
};

// Sections that admin cannot edit (S12 LINE reviews uses hardcoded images).
export const UNEDITABLE_SECTIONS: string[] = ["s12_line_reviews", "nav"];
