import type { Metadata } from "next";
import { Kanit, Quicksand } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise });
  const settings = await payload.findGlobal({ slug: "site-settings" });

  const title = settings.siteName || "CODESMASH";
  const description = settings.description || "CODESMASH - บริษัทพัฒนาซอฟต์แวร์และเทคโนโลยีชั้นนำ ที่พร้อมขับเคลื่อนธุรกิจของคุณด้วยเทคโนโลยีที่ทันสมัย";

  return {
    title: `${title} - ${settings.tagline || "SMASH YOUR LIMITS !!"}`,
    description,
    keywords: [
      "CODESMASH",
      "software development",
      "web development",
      "mobile app",
      "digital agency",
      "Thailand",
    ],
    openGraph: {
      title: `${title} - ${settings.tagline || "SMASH YOUR LIMITS !!"}`,
      description,
      type: "website",
      locale: "th_TH",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const payload = await getPayload({ config: configPromise });
  const settings = await payload.findGlobal({ slug: "site-settings" });

  let logoUrl = "";
  if (settings.logo && typeof settings.logo !== "string" && "url" in settings.logo) {
    logoUrl = settings.logo.url || "";
  }

  return (
    <html lang="th" className={`${kanit.variable} ${quicksand.variable}`}>
      <body className="font-[family-name:var(--font-kanit)] antialiased">
        <Navbar logoUrl={logoUrl} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
