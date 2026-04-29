import type { NextRequest } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.9skin999.com";
const BUILD_TIME = new Date();

type SitemapImage = {
  path: string;
  title: string;
  caption?: string;
};

const IMAGES: SitemapImage[] = [
  // Logo + hero
  { path: "/img/9skin logo.png", title: "9skin 玖膚 Logo", caption: "9skin 玖膚 - 專業養膚．肌膚資產管理" },
  { path: "/img/Page 1.JPG", title: "9skin 玖膚 主視覺", caption: "台北・松江南京 / 高雄・巨蛋站" },

  // 4 大肌膚困擾
  { path: "/img/Page 2-1.png", title: "痘痘反覆出現 - Persistent Acne", caption: "痘痘肌調理服務" },
  { path: "/img/Page 2-2.png", title: "保養品一直買皮膚卻沒變好", caption: "專業肌膚分析與調理" },
  { path: "/img/Page 2-3.png", title: "越認真保養越敏感 - More skincare more sensitive", caption: "敏感肌修護方案" },
  { path: "/img/Page 2-4.png", title: "非侵入式瘦小臉", caption: "瘦臉不痛 安全溫和的小臉護理" },

  // 韓式深層保養
  { path: "/img/Page 6.JPG", title: "韓式深層保養 Korean Deep Skin Care", caption: "120分鐘11道完整流程的韓式深層保養課程" },

  // 4 大承諾
  { path: "/img/Page 7-1.png", title: "專屬諮詢 - Personalized Consultation" },
  { path: "/img/Page 7-2.jpg", title: "舒適環境 - Comfortable Environment" },
  { path: "/img/Page 7-3.png", title: "專業手法 - Professional Techniques" },
  { path: "/img/Page 7-4.png", title: "客製流程 - Customized Process" },

  // 工作室空間
  { path: "/img/Page 8-1.JPG", title: "9skin 玖膚工作室" },
  { path: "/img/Page 8-2.jpg", title: "玖膚空間 About" },

  // Before & After
  { path: "/img/BAreview/Page 10-1.png", title: "韓式深層保養 Before & After", caption: "韓式深層保養顧客真實成效" },
  { path: "/img/BAreview/Page 10-2.png", title: "再生光 Before & After", caption: "再生光療程真實成效" },
  { path: "/img/BAreview/Page 10-3.png", title: "草藥煥膚 Before & After", caption: "草藥煥膚真實成效" },
  { path: "/img/BAreview/Page 10-4.png", title: "玖式微針 Before & After", caption: "玖式微針真實成效" },
  { path: "/img/BAreview/Page 10-5.png", title: "韓式深層保養 + 再生光 Before & After" },
  { path: "/img/BAreview/Page 10-6.png", title: "韓式深層保養 + 草藥煥膚 Before & After" },
  { path: "/img/BAreview/Page 10-7.png", title: "無痕水光 Before & After", caption: "無痕水光真實成效" },
  { path: "/img/BAreview/Page 10-8.png", title: "童顏外泌體 Before & After", caption: "童顏外泌體真實成效" },

  // 環境介紹
  { path: "/img/Page 12-1.jpg", title: "玖膚 - 歡迎茶飲區" },
  { path: "/img/Page 12-2.jpg", title: "玖膚 - 專業護膚床" },
  { path: "/img/Page 12-3.jpg", title: "玖膚 - 專業肌膚檢測儀器" },
  { path: "/img/Page 12-4.jpg", title: "玖膚 - 舒適候診空間" },
];

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function imageUrl(path: string): string {
  return `${SITE_URL}${path.split("/").map(encodeURIComponent).join("/")}`;
}

function renderImage(img: SitemapImage): string {
  const lines = [
    `    <image:image>`,
    `      <image:loc>${escapeXml(imageUrl(img.path))}</image:loc>`,
    `      <image:title>${escapeXml(img.title)}</image:title>`,
  ];
  if (img.caption) lines.push(`      <image:caption>${escapeXml(img.caption)}</image:caption>`);
  lines.push(`    </image:image>`);
  return lines.join("\n");
}

export function GET(_req: NextRequest) {
  const lastmod = BUILD_TIME.toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemaps-image/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
${IMAGES.map(renderImage).join("\n")}
  </url>
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
