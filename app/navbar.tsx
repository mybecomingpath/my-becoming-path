"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Coaching", href: "/coaching" },
  { name: "Contact", href: "/contact" },
  { name: "Resources", href: "/resources" },
];

  return (
    <nav className="fixed left-4 right-4 top-5 z-[9999]">
      <div className="rounded-full border border-white/15 bg-[#26382F]/75 px-6 py-4 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold tracking-[0.3em] text-[#F4F1EA]">
            MY BECOMING PATH
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full bg-white/10 p-3 text-[#F4F1EA] transition hover:bg-white/20"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
  className={`absolute top-16 right-0 z-[9999] w-[280px] overflow-hidden rounded-3xl border border-white/10 bg-[#26382F]/75 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
    menuOpen
      ? "translate-x-0 opacity-100"
      : "translate-x-8 opacity-0 pointer-events-none"
  }`}
>
        <div className="flex flex-col gap-5">
          {menuItems.map((item) => (
  <Link
    key={item.name}
    href={item.href}
    className="text-lg font-medium text-white transition-all duration-300 hover:translate-x-2 hover:text-[#EFE0C3]"
    onClick={() => setMenuOpen(false)}
  >
    {item.name}
  </Link>
))}
        </div>
      </div>
    </nav>
  );
}