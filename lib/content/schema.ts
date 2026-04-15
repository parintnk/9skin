import { z } from "zod";

// Per-field viewport hints surface in the admin UI as small pills.
type Viewport = "desktop" | "mobile" | "both";
const meta = (label: string, viewport: Viewport = "both", multiline = false) =>
  ({ label, viewport, multiline });

export type FieldMeta = { label: string; viewport: Viewport; multiline?: boolean };

const zImage = z.string().min(0);

export const s1Schema = z.object({
  logo: zImage,
  heroImage: zImage,
  heading: z.string(),
  paragraphsDesktop: z.array(z.string()),
  paragraphsMobile: z.array(z.string()),
  locationTaipei: z.string(),
  locationKaohsiung: z.string(),
  locationTaipeiDesktop: z.string(),
  locationKaohsiungDesktop: z.string(),
});

export const s1Meta: Record<keyof z.infer<typeof s1Schema>, FieldMeta> = {
  logo: meta("Logo (รูป)"),
  heroImage: meta("Hero Image (รูปหลัก)"),
  heading: meta("Heading หัวเรื่อง"),
  paragraphsDesktop: meta("Body Paragraphs — Desktop", "desktop", true),
  paragraphsMobile: meta("Body Paragraphs — Mobile", "mobile", true),
  locationTaipei: meta("Location Taipei (mobile)", "mobile"),
  locationKaohsiung: meta("Location Kaohsiung (mobile)", "mobile"),
  locationTaipeiDesktop: meta("Location Taipei (desktop)", "desktop"),
  locationKaohsiungDesktop: meta("Location Kaohsiung (desktop)", "desktop"),
};

export const s2Schema = z.object({
  heading: z.string(),
  subheading: z.string(),
  concerns: z.array(z.object({
    img: zImage,
    title: z.string(),
    subtitle: z.string(),
    desc: z.string(),
  })),
  bottomQuote: z.string(),
});

export const s3Schema = z.object({
  heading: z.string(),
  eyebrow: z.string(),
  bubblesDesktop: z.array(z.object({ text: z.string(), dark: z.boolean() })),
  bubblesMobile: z.array(z.object({ text: z.string(), dark: z.boolean() })),
  para1: z.string(),
  para2: z.string(),
});

export const s4Schema = z.object({
  heading: z.string(),
  intro: z.array(z.string()),
  desktopImage: zImage,
  mobileBg: zImage,
  steps: z.array(z.object({
    num: z.string(),
    title: z.string(),
    lines: z.array(z.string()),
  })),
});

export const s5Schema = z.object({
  heading: z.string(),
  subheading: z.string(),
  columns: z.array(z.object({
    label: z.string(),
    dark: z.boolean(),
    featured: z.boolean(),
    rows: z.array(z.object({
      label: z.string(),
      lines: z.array(z.string()),
    })),
  })),
});

export const s6Schema = z.object({
  eyebrow: z.string(),
  heading: z.string(),
  subtitleZh: z.string(),
  subtitleTag: z.string(),
  description: z.string(),
  itemsHeading: z.string(),
  image: zImage,
  items: z.array(z.object({
    num: z.string(),
    title: z.string(),
    desc: z.string(),
  })),
  footer: z.array(z.string()),
});

export const s7Schema = z.object({
  eyebrow: z.string(),
  heading: z.string(),
  subheading: z.string(),
  cards: z.array(z.object({
    img: zImage,
    alt: z.string(),
    label: z.string(),
    icon: z.enum(["clipboard", "leaf", "sparkles", "flask"]),
    text: z.string(),
  })),
});

export const s8Schema = z.object({
  eyebrow: z.string(),
  logo: zImage,
  heading: z.string(),
  subheading: z.string(),
  paragraphs: z.array(z.string()),
  founderStoryEyebrow: z.string(),
  founderStoryHeading: z.string(),
  founderStoryParagraphs: z.array(z.string()),
  salonImage: zImage,
  studioImage: zImage,
});

const s9Step = z.object({
  label: z.string(),
  title: z.string(),
  arrow: z.string().optional(),
  desc: z.string(),
});

export const s9Schema = z.object({
  eyebrow: z.string(),
  cardHeading: z.string(),
  cardSubheading: z.string(),
  pillars: z.array(z.object({ title: z.string(), lines: z.array(z.string()) })),
  cardFooter: z.string(),
  circleTitle1: z.string(),
  circleTitle2: z.string(),
  circleSubtitle: z.string(),
  step12: s9Step,
  step34: s9Step,
  step56: s9Step,
  step78: s9Step,
  step910: s9Step,
});

export const s10Schema = z.object({
  eyebrow: z.string(),
  heading: z.string(),
  subheading: z.string(),
  items: z.array(z.object({ img: zImage, title: z.string() })),
  disclaimer: z.string(),
});

export const s10bSchema = z.object({
  eyebrow: z.string(),
  heading: z.string(),
  text: z.string(),
  buttonText: z.string(),
  buttonUrl: z.string(),
});

export const s11Schema = z.object({
  eyebrow: z.string(),
  heading: z.string(),
  subheading: z.string(),
  featuredHeading: z.string(),
  featuredPara1: z.string(),
  featuredPara2: z.string(),
  featuredFooter: z.string(),
  featuredImages: z.array(z.string()),
  row1: z.array(z.object({ src: zImage, alt: z.string() })),
  row2: z.array(z.object({ src: zImage, alt: z.string() })),
});

export const s13Schema = z.object({
  eyebrow: z.string(),
  heading: z.string(),
  description: z.string(),
  images: z.array(z.object({ src: zImage, alt: z.string() })),
});

export const footerSchema = z.object({
  brand: z.string(),
  lineUrl: z.string(),
  instagramUrl: z.string(),
  copyright: z.string(),
});

export const navSchema = z.object({
  sections: z.array(z.object({ id: z.string(), label: z.string() })),
});

export const schemas = {
  s1_hero: s1Schema,
  s2_concerns: s2Schema,
  s3_problems: s3Schema,
  s4_three_keys: s4Schema,
  s5_why_choose: s5Schema,
  s6_skin_care: s6Schema,
  s7_transformation: s7Schema,
  s8_mission: s8Schema,
  s9_system: s9Schema,
  s10_results: s10Schema,
  s10b_cta: s10bSchema,
  s11_kol: s11Schema,
  s13_environment: s13Schema,
  footer: footerSchema,
  nav: navSchema,
} as const;
