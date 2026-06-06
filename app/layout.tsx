import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luckychowdary.vercel.app"),
  title: {
    default: "Luckychowdary Uppalapati | Cybersecurity Student | SOC Operations",
    template: "%s | Cybersecurity Portfolio",
  },
  description:
    "Cybersecurity student focused on SOC operations, cloud security, and detection engineering. Experience building AWS-based security monitoring systems and AI-assisted incident triage platforms.",
  keywords: [
    "Cybersecurity",
    "SOC Operations",
    "Detection Engineering",
    "AWS Security",
    "Cloud Security",
    "SIEM",
    "Incident Response",
    "Luckychowdary",
  ],
  authors: [{ name: "Luckychowdary Uppalapati" }],
  openGraph: {
    title: "Luckychowdary Uppalapati | Cybersecurity Student",
    description: "SOC operations, detection engineering, AWS cloud security, and incident response expertise.",
    url: "https://luckychowdary.vercel.app",
    siteName: "Cybersecurity Portfolio",
    type: "website",
    images: [{ url: "/og/og.svg", width: 1200, height: 630, alt: "Cybersecurity Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luckychowdary Uppalapati | Cybersecurity Student",
    description: "SOC operations, detection engineering, and cloud security specialist.",
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
