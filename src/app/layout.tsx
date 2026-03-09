import type { Metadata } from "next";
import { Petrona, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const petrona = Petrona({
  subsets: ["latin"],
  variable: "--font-petrona",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GiveHugz — Weighted Companions for Calm",
  description:
    "Weighted stuffed animals designed for anxiety relief, better sleep, and emotional comfort. Each Hugz is a 2-pound companion that holds you back.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "GiveHugz — Weighted Companions for Calm",
    description:
      "Weighted stuffed animals designed for anxiety relief, better sleep, and emotional comfort.",
    url: "https://givehugz-v4.treehaus.site",
    siteName: "GiveHugz",
    type: "website",
    images: [{ url: "/og-image.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${petrona.variable} ${poppins.variable}`}>
      <body className="font-poppins bg-cream text-dark antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
