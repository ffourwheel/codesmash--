"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "CODESMASH", href: "/" },
  { label: "SERVICE", href: "/services" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "BLOG", href: "/blog" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar({ logoUrl }: { logoUrl?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-400 ease-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white"
      }`}
    >
      <nav className="max-w-[1300px] mx-auto px-[22px] flex items-center justify-between h-[14vh] min-h-[80px] max-h-[120px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {logoUrl ? (
            <Image src={logoUrl} alt="Logo" width={150} height={40} className="object-contain" />
          ) : (
            <div className="flex items-center">
              <span className="text-[22px] font-extrabold tracking-tight text-[#17161a]">
                CODE
              </span>
              <span className="text-[22px] font-extrabold tracking-tight text-[#d90a2c]">
                SMASH
              </span>
            </div>
          )}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-[50px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[1rem] font-medium leading-[1.3] whitespace-normal transition-colors duration-300 hover:text-[#d90a2c] ${
                  activeLink === link.href
                    ? "text-[#d90a2c] font-bold"
                    : "text-[#17161a]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-[50px]">
          <Link
            href="/contact"
            className="btn-primary text-sm px-6 py-3 font-bold"
          >
            ติดต่อเรา
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 text-[#17161a]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`xl:hidden fixed inset-0 bg-[#161617] transition-all duration-400 ${
          isOpen
            ? "opacity-100 visible h-screen"
            : "opacity-0 invisible h-0"
        }`}
        style={{ top: 0 }}
      >
        <div className="relative h-full w-full">
          {/* Mobile Header */}
          <div className="absolute top-0 left-0 w-full flex justify-between items-center px-[22px] h-[100px]">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {logoUrl ? (
                <Image src={logoUrl} alt="Logo" width={120} height={32} className="object-contain" />
              ) : (
                <>
                  <span className="text-[22px] font-extrabold text-white">
                    CODE
                  </span>
                  <span className="text-[22px] font-extrabold text-[#d90a2c]">
                    SMASH
                  </span>
                </>
              )}
            </Link>
            <button
              className="p-2 text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="pt-[120px] px-12">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block text-[1.5rem] py-[3px] text-white font-medium transition-colors duration-300 hover:text-[#d90a2c] ${
                      activeLink === link.href
                        ? "text-[#d90a2c] font-bold"
                        : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-accent inline-block text-center"
                onClick={() => setIsOpen(false)}
              >
                ติดต่อเรา
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
