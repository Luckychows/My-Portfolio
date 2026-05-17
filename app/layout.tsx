import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luckychowdary.vercel.app"),
  title: {
    default: "Luckychowdary Uppalapati | Cybersecurity Portfolio",
    template: "%s | Luckychowdary Uppalapati",
  },
  description:
    "Cybersecurity student portfolio focused on SOC operations, cloud security automation, detection engineering, AWS security, and modern security tooling.",
  keywords: [
    "Luckychowdary Uppalapati",
    "Cybersecurity Portfolio",
    "SOC Analyst",
    "AWS Security",
    "Detection Engineering",
    "Cloud Security",
  ],
  authors: [{ name: "Luckychowdary Uppalapati" }],
  openGraph: {
    title: "Luckychowdary Uppalapati | Cybersecurity Portfolio",
    description: "SOC operations, AWS security automation, detection engineering, and cloud security projects.",
    url: "https://luckychowdary.vercel.app",
    siteName: "Luckychowdary Portfolio",
    type: "website",
    images: [{ url: "/og/og.svg", width: 1200, height: 630, alt: "Luckychowdary Uppalapati cybersecurity portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luckychowdary Uppalapati | Cybersecurity Portfolio",
    description: "Modern cybersecurity portfolio for SOC and cloud security roles.",
    images: ["/og/og.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
