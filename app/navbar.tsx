"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
const lastScrollY = useRef(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Always show the navigation near the top of the page.
    if (currentScrollY < 80) {
      setNavVisible(true);
    } else if (currentScrollY > lastScrollY.current) {
      // Scrolling down.
      setNavVisible(false);
      setMenuOpen(false);
    } else {
      // Scrolling up.
      setNavVisible(true);
    }

    lastScrollY.current = currentScrollY;
  };

  lastScrollY.current = window.scrollY;
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Coaching", href: "/coaching" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
  <>
    {/* Invisible hover zone */}
    <div
      className="fixed inset-x-0 top-0 h-6 z-[9998]"
      onMouseEnter={() => setNavVisible(true)}
    />

    <nav
      className={`fixed left-4 right-4 top-5 z-[9999] transition-all duration-300 ease-in-out ${
        navVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0 pointer-events-none"
      }`}
      onMouseEnter={() => {
        setNavVisible(true);
        setMenuOpen(true);
      }}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <div className="rounded-full border border-white/15 bg-[#628378] shadow-lg">
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-white"
            onClick={() => setMenuOpen(false)}
          >
            Untamed Rebuilder
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`absolute right-0 top-[4.5rem] z-[9999] w-[280px] overflow-hidden rounded-3xl bg-[#5f7169] shadow-xl transition-all duration-200 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-7">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-white transition hover:translate-x-1 hover:text-[#efe0bf]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
        </nav>
  </>
);
}