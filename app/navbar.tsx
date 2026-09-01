"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Coaching", href: "/coaching" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  const previousScrollPosition = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPosition = window.scrollY;
      const previousPosition = previousScrollPosition.current;

      // Always show the navbar near the top of the page.
      if (currentScrollPosition < 80) {
        setNavVisible(true);
      }
      // Keep the navbar visible while the menu is open.
      else if (menuOpen) {
        setNavVisible(true);
      }
      // Hide when scrolling down and show when scrolling up.
      else if (currentScrollPosition > previousPosition) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }

      previousScrollPosition.current = currentScrollPosition;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-3 pt-3 transition-transform duration-300 ease-out motion-reduce:transition-none md:px-6 md:pt-5 ${
        navVisible || menuOpen
          ? "translate-y-0"
          : "-translate-y-[130%]"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="relative mx-auto max-w-[1400px]"
      >
        <div className="flex h-[72px] items-center justify-between rounded-[28px] border border-white/15 bg-[#26382f]/55 backdrop-blur-xl px-5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] md:h-[80px] md:px-7">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-white transition-opacity hover:opacity-75 md:text-[0.8rem] md:tracking-[0.34em]"
          >
            The Untamed Rebuilder
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            {menuOpen ? (
              <X aria-hidden="true" size={25} strokeWidth={1.8} />
            ) : (
              <Menu aria-hidden="true" size={25} strokeWidth={1.8} />
            )}
          </button>
        </div>

        <div
          id="main-menu"
          className={`absolute right-0 top-[82px] w-[min(280px,calc(100vw-24px))] origin-top-right rounded-[26px] border border-white/15 bg-[#26382f]/55 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-200 md:top-[92px] ${
            menuOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-2 scale-95 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl px-5 py-3.5 text-[1rem] font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}