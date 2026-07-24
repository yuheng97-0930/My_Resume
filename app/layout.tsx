import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lim Yu Heng — Software & Mobile Developer",
  description:
    "Portfolio of Lim Yu Heng, a Diploma in Information Technology student building mobile applications, connected systems and thoughtful software.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/yh-logo.png",
    shortcut: "/yh-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
