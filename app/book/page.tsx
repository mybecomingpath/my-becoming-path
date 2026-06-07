export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#26382F] pt-20">
      <section className="px-7 py-24 md:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
            BOOK A CLARITY CALL
          </p>

          <h1 className="font-serif text-5xl leading-[1.08] md:text-6xl">
            Let’s start with a conversation.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#5D625A]">
            Choose a time below that works for you, and we’ll explore where you
            are, what you’re navigating, and whether coaching feels like the
            right fit.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[36px] border border-[#E4DCCF] bg-[#EFE8DD] p-6 shadow-xl">
          <iframe
            src="https://calendly.com/empoweredgriefjourney/claritycall"
            width="100%"
            height="850"
            frameBorder="0"
            title="Book a Free Clarity Call"
          />
        </div>
      </section>

      <section className="bg-[#26382F] px-7 py-20 text-center text-[#F4F1EA] md:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#EFE0C3]/80">
            WHAT TO EXPECT
          </p>

          <h2 className="font-serif text-5xl leading-[1.08]">
            A simple, grounded conversation.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#D8D0C5]">
            This call is a chance to connect, talk through what’s bringing you
            here, and see if working together feels aligned. No pressure. No
            pretending. Just an honest conversation about where you are and what
            support could look like.
          </p>
        </div>
      </section>
      <footer className="bg-[#1f2f28] px-7 py-12 text-[#F4F1EA] md:px-16">
  <div className="mx-auto max-w-7xl text-center">
    <div>
  <p className="text-sm font-semibold uppercase tracking-[0.38em] text-[#EFE0C3]/80">
    MY BECOMING PATH
  </p>

  <p className="mt-1 text-[#D8D0C5]">
    Helping people rebuild after life changed everything.
  </p>
</div>

    <nav className="mt-3 flex flex-wrap justify-center gap-6 text-sm text-[#D8D0C5]">
      <a href="#" className="transition hover:text-[#EFE0C3]">Home</a>
      <a href="#" className="transition hover:text-[#EFE0C3]">About</a>
      <a href="#" className="transition hover:text-[#EFE0C3]">Coaching</a>
      <a href="#" className="transition hover:text-[#EFE0C3]">Contact</a>
    </nav>
  </div>

  <div className="mx-auto mt-5 max-w-7xl border-t border-[#F4F1EA]/10 pt-8 text-center">
    <p>© 2026 My Becoming Path. All rights reserved.</p>

    <div className="flex justify-center gap-3 text-sm text-[#D8D0C5]">
  <a href="#">Instagram</a>
  <a href="#">TikTok</a>
  <a href="#">Substack</a>
</div>
  </div>
</footer>
    </main>
  );
}