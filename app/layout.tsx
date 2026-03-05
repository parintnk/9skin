import type { Metadata } from "next";
import { Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "9skin 玖膚｜即將開幕",
  description: "養膚，是一件更深、更長遠的事。9skin 玖膚即將開幕，敬請期待。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${notoSerifTC.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
