import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#26382F] text-[#26382F]">
      <section className="bg-[#EFE0C3] px-6 pt-40 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 overflow-hidden rounded-3xl">
            <img
              src="/contact.jpg"
              alt="Peaceful nature scene"
              className="h-[280px] w-full object-cover"
            />
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#26382F]/70">
            Contact
          </p>

          <h1 className="mb-6 font-serif text-5xl md:text-6xl">
            Let&apos;s start with a conversation.
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-[#26382F]/80">
            Whether you&apos;re interested in coaching, have a question about My
            Becoming Path, or simply want to reach out, you can use the form
            below to get in touch.
          </p>

          <form
  action="https://formspree.io/f/xpqepgdb"
  method="POST"
  className="space-y-6 rounded-3xl border border-[#26382F]/10 bg-[#26382F]/90 p-6 md:p-8"
>
    <input
    type="hidden"
    name="_redirect"
    value="https://mybecomingpath.com/contact-success"
  />

            <div>
              <label className="mb-2 block text-sm text-white/80">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl bg-white px-4 py-3 text-[#26382F] outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/80">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl bg-white px-4 py-3 text-[#26382F] outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/80">
                Message
              </label>
              <textarea
                rows={6}
                name="message"
                className="w-full rounded-xl bg-white px-4 py-3 text-[#26382F] outline-none"
                placeholder="Tell me a little about what you're looking for..."
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-[#EFE0C3] px-8 py-4 font-semibold text-[#26382F] transition hover:bg-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#26382F] px-7 py-24 text-center text-[#F4F1EA] md:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.38em] text-[#EFE0C3]/80">
            Your becoming path starts here
          </p>

          <h2 className="font-serif text-5xl leading-[1.08] md:text-6xl">
            Let&apos;s Walk This Path Together.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#D8D0C5]">
            If you&apos;re navigating a season of transition or rebuilding, we
            can start with a simple conversation. You don&apos;t need to have
            everything figured out before taking the next step.
          </p>

          <Link
            href="/book"
            className="mt-10 inline-flex rounded-full border border-[#EFE0C3]/30 bg-[#EFE0C3] px-9 py-4 font-semibold text-[#26382F]"
          >
            Book a Free Clarity Call →
          </Link>
        </div>
      </section>

      <footer className="bg-[#1f2f28] px-7 py-12 text-[#F4F1EA] md:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.38em] text-[#EFE0C3]/80">
              My Becoming Path
            </p>

            <p className="mt-1 text-[#D8D0C5]">
              Helping people rebuild after life changed everything.
            </p>
          </div>

          <nav className="mt-3 flex flex-wrap justify-center gap-6 text-sm text-[#D8D0C5]">
            <Link href="/" className="transition hover:text-[#EFE0C3]">
              Home
            </Link>
            <Link href="/about" className="transition hover:text-[#EFE0C3]">
              About
            </Link>
            <Link href="/coaching" className="transition hover:text-[#EFE0C3]">
              Coaching
            </Link>
            <Link href="/podcast" className="transition hover:text-[#EFE0C3]">
              Podcast
            </Link>
            <Link href="/blog" className="transition hover:text-[#EFE0C3]">
              Blog
            </Link>
            <Link href="/contact" className="transition hover:text-[#EFE0C3]">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mx-auto mt-5 max-w-7xl border-t border-[#F4F1EA]/10 pt-8 text-center">
          <p>© 2026 My Becoming Path. All rights reserved.</p>

          <div className="flex justify-center gap-3 text-sm text-[#D8D0C5]">
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
    </main>
  );
}