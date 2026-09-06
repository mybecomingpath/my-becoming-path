import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#40585B] px-7 py-10 text-[#F4F1EA] md:px-16">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.38em] text-[#EFE0C3]/80">
          Chris Mamone | Untamed Rebuilder Coach
        </p>

        <p className="mt-2 text-[#D8D0C5]">
          Clear the aftermath of life disruption and build
an unshakable foundation for your next evolution.
        </p>

        <nav
          aria-label="Footer navigation"
          className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-[#D8D0C5]"
        >
          <Link href="/" className="transition hover:text-[#EFE0C3]">
            Home
          </Link>

          <Link href="/about" className="transition hover:text-[#EFE0C3]">
            About
          </Link>

          <Link href="/coaching" className="transition hover:text-[#EFE0C3]">
            Coaching
          </Link>

          <Link href="/contact" className="transition hover:text-[#EFE0C3]">
            Contact
          </Link>
        </nav>

        <p className="mt-6 text-sm text-[#D8D0C5]">
          © 2026 The Untamed Rebuilder. All rights reserved.
        </p>

        <div className="mt-2 flex justify-center gap-4 text-sm text-[#D8D0C5]">
          <a href="#" className="transition hover:text-[#EFE0C3]">
            Facebook
          </a>
          <a href="#" className="transition hover:text-[#EFE0C3]">
            Instagram
          </a>

          <a href="#" className="transition hover:text-[#EFE0C3]">
            TikTok
          </a>

          <a href="#" className="transition hover:text-[#EFE0C3]">
            Substack
          </a>
        </div>
      </div>
    </footer>
  );
}