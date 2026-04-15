import type { Metadata, Viewport } from "next";
import { Noto_Serif_TC } from "next/font/google";
import GoogleTranslateProvider from "./components/GoogleTranslateProvider";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://9skin999.com";
const SITE_NAME = "9skin 玖膚";
const SITE_TITLE = "9skin 玖膚｜專業養膚．肌膚資產管理";
const SITE_DESC = "9skin 玖膚 — 養膚是一件深遠的事。我們陪你規劃專屬保養計畫，從痘痘、敏感、毛孔到輪廓緊緻，全方位深層調理。台北松江南京、高雄巨蛋雙店服務。";
const OG_IMAGE = `${SITE_URL}/img/Page%201.JPG`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s｜${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: ["9skin", "玖膚", "養膚", "保養", "做臉", "美容", "肌膚管理", "痘痘", "敏感肌", "毛孔", "緊緻", "台北做臉", "高雄做臉", "松江南京", "巨蛋"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/img/9skin%20logo.png",
  },
  category: "beauty",
};

export const viewport: Viewport = {
  themeColor: "#D8D2C4",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: SITE_NAME,
  url: SITE_URL,
  image: OG_IMAGE,
  description: SITE_DESC,
  priceRange: "$$",
  sameAs: ["https://line.me/R/ti/p/@9skin"],
  location: [
    {
      "@type": "Place",
      name: "9skin 玖膚 台北松江南京店",
      address: { "@type": "PostalAddress", addressLocality: "台北市", addressRegion: "TW", addressCountry: "TW" },
      hasMap: "https://maps.google.com/?q=松江南京站",
    },
    {
      "@type": "Place",
      name: "9skin 玖膚 高雄巨蛋店",
      address: { "@type": "PostalAddress", addressLocality: "高雄市", addressRegion: "TW", addressCountry: "TW" },
      hasMap: "https://maps.google.com/?q=高雄巨蛋站",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${notoSerifTC.variable} antialiased`}>
        <GoogleTranslateProvider />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
