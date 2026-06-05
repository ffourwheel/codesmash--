import type { Metadata } from "next";
import { Inter, Poppins, Kanit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Configure your primary text font
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

// Configure your heading font
const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
  display: 'swap',
});

// Configure Thai font
const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-kanit', // สร้างตัวแปร CSS
});

export const metadata: Metadata = {
  title: "CODESMASH | Smash Your Limits",
  description: "Welcome to the new CODESMASH platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${kanit.variable}`}>
      <body className="font-kanit min-h-screen flex flex-col bg-white dark:bg-[#0f172a] text-gray-800 dark:text-gray-200">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
