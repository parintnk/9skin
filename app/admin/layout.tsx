import type { Metadata } from "next";
import "./admin.css";

export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
  title: "Admin",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="admin-root min-h-screen">{children}</div>;
}
