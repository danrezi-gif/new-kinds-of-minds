import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "New Kinds of Minds: a global atlas of neurodiversity",
    template: "%s · New Kinds of Minds",
  },
  description:
    "A participatory atlas of the emerging neurodiversity movement: organizations, communities, artistic practices, research groups, and alternative institutions, mapped with their sources.",
  metadataBase: new URL("https://new-kinds-of-minds-hub.vercel.app/"),
  openGraph: {
    title: "New Kinds of Minds: a global atlas of neurodiversity",
    description: "A participatory cartography of how societies are learning to recognize different kinds of minds.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ed",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fraunces.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
