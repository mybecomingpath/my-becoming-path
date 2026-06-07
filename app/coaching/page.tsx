import { ArrowRight, Compass, Heart, Leaf, Mountain, Sunrise } from "lucide-react";
import Link from "next/link";

export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#26382F] pt-30">

  {/* HEADER IMAGE */}
  <section
    className="relative h-[35vh] bg-cover bg-center"
    style={{ backgroundImage: "url('/coaching-hero.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/35" />
    <div className="absolute inset-0 bg-[#26382F]/20" />
  </section>

  {/* HERO */}
  <section className="px-7 py-20 md:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
            My Becoming Path
          </p>

          <h1 className="font-serif text-5xl leading-[1.08] md:text-7xl">
            Coaching for life’s transitions.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#5D625A]">
            Whether you’re navigating loss, identity shifts, relationship changes,
            career uncertainty, or simply feeling disconnected from yourself,
            coaching provides a supportive space to pause, reflect, and move
            forward with greater clarity and confidence.
          </p>

          <a
            href="/book"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#26382F] px-8 py-4 font-semibold text-[#F4F1EA] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#1f2f28]"
          >
            Book a Free Clarity Call <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* IS COACHING RIGHT FOR YOU */}
      <section className="px-7 pb-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-5xl leading-[1.08]">
  You might be here because...
</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Life changed unexpectedly", "A relationship ended, a loss occurred, or a major transition left you questioning what’s next."],
              ["You feel stuck", "You know something needs to change, but you’re not sure where to begin."],
              ["You’re rebuilding", "You’re creating a new chapter but struggling to trust yourself or your direction."],
              ["You want support", "You don’t need someone to fix you — you want a thoughtful partner to help you navigate the path ahead."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="text-center font-serif text-2xl">
  {title}
</h3>
                <p className="mt-4 leading-7 text-[#5D625A]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE WORK THROUGH */}
      <section className="bg-white px-7 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
            WHAT WE WORK THROUGH
          </p>

          <h2 className="max-w-3xl font-serif text-5xl leading-[1.08]">
            Coaching isn’t about fixing you.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5D625A]">
            It’s about creating space to process what you’re carrying, reconnect
            with yourself, and move forward in a way that feels aligned with who
            you are now.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              [Mountain, "Life Transitions", "Navigate change with clarity, steadiness, and support."],
              [Leaf, "Identity Shifts", "Explore who you are becoming when the old version no longer fits."],
              [Sunrise, "Emotional Renewal", "Move from survival mode toward grounding, integration, and connection."],
              [Heart, "Self-Trust & Confidence", "Reconnect with your voice, values, and inner authority."],
              [Compass, "Purpose & Direction", "Find meaning, focus, and next steps for the chapter ahead."],
              [Mountain, "Personal Growth", "Move from awareness into aligned, sustainable action."],
            ].map(([Icon, title, text]: any) => (
              <div key={title} className="rounded-3xl bg-[#F4F1EA] p-7 shadow-sm">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE2D5]">
                  <Icon size={30} />
                </div>
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-3 leading-7 text-[#5D625A]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#26382F] px-7 py-24 text-[#F4F1EA] md:px-16">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#EFE0C3]/80">
              THE PROCESS
            </p>

            <h2 className="font-serif text-5xl leading-[1.08]">
              How coaching works.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#D8D0C5]">
              A simple, grounded process designed to help you begin where you are
              and move forward with support.
            </p>

            <a
  href="/book"
  className="mt-8 inline-flex rounded-full bg-[#EFE0C3] px-8 py-4 font-semibold text-[#26382F] shadow-xl transition hover:scale-105"
>
  Book a Free Clarity Call →
</a>

          </div>

          <div className="space-y-8">
            {[
              ["01", "Book a Free Clarity Call", "We’ll discuss where you are, what’s bringing you here, and whether coaching feels like a good fit."],
              ["02", "Clarify Your Path", "Together we’ll identify goals, challenges, and areas of focus for your season of growth."],
              ["03", "Move Forward With Support", "Through ongoing coaching, reflection, and accountability, you’ll build momentum toward meaningful change."],
            ].map(([number, title, text]) => (
              <div key={number} className="border-l border-[#EFE0C3]/30 pl-7">
                <p className="text-sm font-semibold tracking-[0.3em] text-[#EFE0C3]/80">
                  {number}
                </p>
                <h3 className="mt-3 font-serif text-3xl">{title}</h3>
                <p className="mt-4 leading-8 text-[#D8D0C5]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT REFLECTIONS */}
      <section className="px-7 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
            CLIENT REFLECTIONS
          </p>

          <h2 className="font-serif text-5xl leading-[1.08]">
            Along the path back to yourself.
          </h2>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {[
              ["Rejoice", "Chris helped me be kinder to myself, manage my emotions more effectively, and respond to situations with a more positive perspective. Every session gave me a safe space to be fully honest about what I was experiencing."],
              ["Ashley", "Chris helped me navigate my breakup, work stress, and social anxiety with greater clarity and confidence. His ability to challenge negative thinking and help me reframe situations made a real difference in my life."],
              ["Lidia", "Chris’s coaching helped me embrace my authentic self and become more confident as I stepped into new roles in my life. He helped me slow down, recognize my progress, and trust the process."],
            ].map(([name, quote]) => (
              <div key={name} className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-[#C7A95A]">★★★★★</p>
                <p className="mt-6 leading-8 text-[#5D625A]">"{quote}"</p>
                <p className="mt-6 font-semibold">— {name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#26382F] px-7 py-24 text-center text-[#F4F1EA] md:px-16">
        <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#EFE0C3]/80">
          YOUR BECOMING PATH STARTS HERE
        </p>

        <h2 className="font-serif text-5xl leading-[1.08] md:text-6xl">
          Let’s Walk This Path Together.
        </h2>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#D8D0C5]">
          If you’re navigating a season of transition or rebuilding, we can start
          with a simple conversation. You don’t need to have everything figured
          out before taking the next step.
        </p>

        <a
          href="/book"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#EFE0C3] px-9 py-4 font-semibold text-[#26382F] shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-[#F5E8D2]"
        >
          Book a Free Clarity Call <ArrowRight size={18} />
        </a>
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