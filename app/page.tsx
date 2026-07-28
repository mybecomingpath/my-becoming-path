"use client";
import { useState } from "react";
import { ArrowRight, Headphones, Mountain, Leaf, Sunrise, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

const menuItems = [
  "Home",
  "About Me",
  "Coaching",
  "Contact",
  "Follow On Social Media",
];
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#26382F]">
     
      <section
  className="relative min-h-[60vh] bg-cover bg-[center_30%] pt-28 md:pt-0"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10271f]/75 via-[#10271f]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10271f]/45 via-transparent to-transparent" />

        <div className="relative z-10 flex min-h-[60vh] translate-y-4 items-center px-7 md:min-h-[56vh] md:px-16">
          <div className="max-w-4xl text-white">
            <p className="mb-7 ml-[2px] text-[0.82rem] font-bold uppercase tracking-[0.42em] text-white">
  A Message For The Outliers...
</p>

<h1 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl">
  FOR THE UNTAMED
  <br />
  WHO REFUSE TO CONFORM.
</h1>

<h2 className="mt-5 max-w-4xl font-serif text-3xl leading-[1.08] text-[#F4F1EA] md:text-4xl">
  Clear the aftermath of life disruption and build an unshakable foundation for your next evolution.
</h2>

<p className="mt-5 max-w-3xl text-[1.15rem] leading-[1.55] text-[#F2F4F1] font-normal">
  Leave the passive, play-it-small script behind. No more fluff. Just a strategic partnership to help you build a life of absolute fulfillment, freedom, and alignment.
</p>

            <div className="mt-9 flex w-fit flex-col gap-4">
  <Link
    href="/book"
    className="
    group
      inline-flex w-fit whitespace-nowrap
      items-center justify-center gap-4
      rounded-full
      border border-white/70
      bg-white/10
      px-8 py-4
      text-[1.05rem] font-semibold text-white
      shadow-lg shadow-black/15
      backdrop-blur-md
      transition-all duration-300 ease-out
      hover:-translate-y-1
      hover:border-white
      hover:bg-white/20
      hover:shadow-xl hover:shadow-black/25
      active:translate-y-0
      active:scale-[0.97]
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-white
      focus-visible:ring-offset-2
      focus-visible:ring-offset-transparent
    "
  >
    <span>I&apos;m Ready to Rebuild</span>
    <ArrowRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
</div>
          </div>
        </div>
      </section>
<section className="bg-[#F4F1EA] px-7 py-20 md:px-16">
  <div className="mx-auto max-w-7xl">

    {/* ROW 1: FULL WIDTH */}
    <div className="border-y border-[#26382F]/40 py-10 text-center">
      <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
        THE UNTAMED REBUILDER
      </p>

      <h2 className="mx-auto max-w-5xl font-serif text-[1.9rem] leading-[1.08] tracking-tight text-[#26382F] md:text-[2.1rem] lg:text-[2.25rem]">
        <span className="block">
          I’m not here to help you manage the disruption
          <br />
          that keeps you playing small.
        </span>

        <span className="mt-4 block">
          It's time to strip away the conditioning that
          <br />
          holds you back and build an unshakeable foundation.
        </span>
      </h2>
    </div>

    {/* ROW 2: TWO COLUMNS */}
    <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">

      {/* COLUMN A: PHOTO */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/chris.jpg"
          alt="Chris Mamone"
          className="h-[520px] w-full max-w-[430px] rounded-[36px] object-cover shadow-lg shadow-[#26382F]/10"
        />
      </div>

      {/* COLUMN B: BODY TEXT */}
      <div className="max-w-[620px]">
        <p className="text-[1.15rem] leading-[1.7] text-[#5D625A]">
          I’m Chris Mamone, and after hosting a podcast with 150+ episodes and writing an anthology about the raw journey of heavy life disruptions, I know exactly what it takes to mount a serious comeback when life implodes right in front of you. My coaching helps you process the past, accept what was, and break free of the conditioning that lead you to a passive play-it-small life.
        </p>

        <p className="mt-6 text-[1.15rem] leading-[1.7] text-[#5D625A]">
          My work is built for self-reliant outliers who took a massive hit.
          Whether it's a career crash or a total identity shift, the individuals
          I partner with refuse to let that crisis define them. We don't pretend
          everything is okay, and we don't wait around for the right moment to come along. We actively clear the aftermath, reclaim your raw drive,
          and create an unshakable foundation for a life on your terms.
                </p>

        <Link
          href="/about"
          className="
            mt-10 inline-flex items-center gap-3
            rounded-full bg-[#26382F]
            px-8 py-4
            font-semibold text-white
            shadow-lg shadow-black/10
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-[#1A1A1A]
            hover:shadow-xl
            active:translate-y-0
            active:scale-[0.97]
          "
        >
          See The 90-Day Framework
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </div>
</section>

      <section className="bg-[#F4F1EA] px-7 pt-20 pb-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-5xl leading-[1.15] text-[#26382F]">
            What we work through together
          </h2>

          <h3 className="mt-5 font-serif text-2xl text-[#26382F]">
  Coaching isn't about fixing you.
</h3>

<p className="mt-4 max-w-2xl text-lg leading-8 text-[#5D625A]">
  It's about creating space to process what you're carrying, reconnect with yourself,
  and move forward in a way that feels aligned with who you are now.
</p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE2D5]">
                <Mountain size={32} />
              </div>
              <h3 className="font-serif text-2xl">From Survival to Stability</h3>
              <p className="mt-3 leading-7 text-[#5D625A]">
                When you've been carrying too much for too long, it's hard to hear yourself think. Together we create space to breathe, process, and regain your footing.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE2D5]">
                <Leaf size={32} />
              </div>
              <h3 className="font-serif text-2xl">From Confusion to Clarity</h3>
              <p className="mt-3 leading-7 text-[#5D625A]">
                Life changes can leave you questioning who you are and where you're headed. We reconnect you with your values, strengths, and next steps.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE2D5]">
                <Sunrise size={32} />
              </div>
              <h3 className="font-serif text-2xl">From Stuck to Momentum</h3>
              <p className="mt-3 leading-7 text-[#5D625A]">
                Small intentional actions create momentum. We focus on building a path that feels aligned, sustainable, and authentically yours.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#26382F] text-[#F4F1EA]">
  <div
  className="absolute left-0 top-0 hidden h-full w-[46%] bg-cover bg-center bg-no-repeat lg:block"
    style={{ backgroundImage: "url('/experience-bg.jpg')" }}
  />

  <div className="absolute left-0 top-0 h-full w-[46%] bg-black/60" />

  <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-7 py-24 md:px-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
    <div>
      <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#EFE0C3]/80">
        THE EXPERIENCE
      </p>

     <h2 className="font-serif text-5xl leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
        What it's like working together
      </h2>

      <div className="mt-8 max-w-xl">
  <p className="text-xl leading-9 text-[#D8D0C5]">
  A grounded, human approach to rebuilding your life after everything changed.
  If you're navigating a major transition, identity shift, or season of rebuilding,
  we can start with a conversation.
</p>

  <Link
  href="/coaching"
  className="mt-8 inline-flex rounded-full border border-[#EFE0C3]/30 bg-[#EFE0C3]/92 px-8 py-4 font-semibold text-[#26382F] shadow-xl backdrop-blur"
>
  Explore Working Together →
</Link>
</div>
    </div>

    <div className="space-y-10">
      <div className="pl-7">
        <h3 className="font-serif text-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">Grounded Conversations</h3>
        <p className="mt-4 leading-8 text-[#F4F1EA]">
          A supportive space to unpack what you're carrying and make sense of
          what you're experiencing. No pressure. No pretending you're okay.
          Simply being met with curiosity, compassion, and honesty.
        </p>
      </div>

      <div className="pl-7">
        <h3 className="font-serif text-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          Reflection Meets Real-Life Action
        </h3>
        <p className="mt-4 leading-8 text-[#F4F1EA]">
          Insight matters — but so does what happens after the conversation ends.
          We connect reflection with practical next steps, helping you move from
          awareness into intentional action, grounded growth, and meaningful
          forward movement in your real life.
        </p>
      </div>

      <div className="pl-7">
        <h3 className="font-serif text-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">Support Along the Way</h3>
        <p className="mt-4 leading-8 text-[#F4F1EA]">
          Growth isn't linear, and rebuilding doesn't happen overnight. You don't
          have to figure everything out alone. We create sustainable momentum,
          grounded accountability, and space for you to move at a pace that feels
          authentic to you.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#F4F1EA] px-7 py-24 md:px-16">
  <div className="mx-auto max-w-7xl">

    <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
      Client Reflections
    </p>

    <h2 className="max-w-3xl font-serif text-5xl leading-[1.08] text-[#26382F]">
Along the path back to yourself.    </h2>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5D625A]">
      Every person featured here came to coaching during a season of transition, challenge, or growth. While their stories are different, they share a common desire: to reconnect with themselves, find clarity, and move forward with greater confidence.
    </p>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">

      {/* CARD 1 */}
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="mb-5 text-[#C7A95A]">
          ★★★★★
        </div>

        <p className="leading-8 text-[#5D625A]">
          "Chris helped me be kinder to myself, manage my emotions more effectively, and respond to situations with a more positive perspective. Every session gave me a safe space to be fully honest about what I was experiencing."
        </p>

        <p className="mt-6 font-semibold text-[#26382F]">
          — Rejoice
        </p>
      </div>

      {/* CARD 2 */}
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="mb-5 text-[#C7A95A]">
          ★★★★★
        </div>

        <p className="leading-8 text-[#5D625A]">
          "Chris helped me navigate my breakup, work stress, and social anxiety with greater clarity and confidence. His ability to challenge negative thinking and help me reframe situations made a real difference in my life."
        </p>

        <p className="mt-6 font-semibold text-[#26382F]">
          — Ashley
        </p>
      </div>

      {/* CARD 3 */}
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="mb-5 text-[#C7A95A]">
          ★★★★★
        </div>

        <p className="leading-8 text-[#5D625A]">
          "Chris's coaching helped me embrace my authentic self and become more confident as I stepped into new roles in my life. He helped me slow down, recognize my progress, and trust the process."
        </p>

        <p className="mt-6 font-semibold text-[#26382F]">
          — Lidia
        </p>
      </div>

    </div>

  </div>
</section>
<section className="bg-[#F4F1EA] px-7 py-16 text-[#26382F] md:px-16">
  <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
    {/* Photo Column */}
    <div>
      <img
  src="/chris.jpg"
  alt="Chris Mamone"
  className="sticky top-28 h-[940px] w-full rounded-[36px] object-cover shadow-xl"
/>
    </div>

    {/* Text Column */}
    <div>
      <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
        WAYS TO WORK TOGETHER
      </p>

      <h2 className="max-w-3xl font-serif text-5xl leading-[1.08] text-[#26382F]">
        Support for wherever you are on your path.
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5D625A]">
        Whether you're navigating a major life transition, rebuilding after loss,
        redefining your identity, or seeking greater clarity and confidence,
        there are several ways to connect with My Becoming Path.
      </p>

      <div className="mt-12 space-y-6">
        {/* Primary Offer */}
        <div className="rounded-3xl border border-[#26382F]/10 bg-white p-8 shadow-sm ring-2 ring-[#DDE2D5]">
          <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.28em] text-[#445146]">
            PRIMARY SUPPORT
          </p>

          <h3 className="font-serif text-3xl text-[#26382F]">
            One-on-One Coaching
          </h3>

          <p className="mt-2 font-semibold text-[#445146]">
            Personalized support for life's transitions.
          </p>

          <p className="mt-4 leading-8 text-[#5D625A]">
            Private coaching designed to help you reconnect with yourself,
            navigate change with greater confidence, and create meaningful
            forward movement aligned with who you're becoming.
          </p>

          <Link
  href="/book"
  className="mt-6 inline-flex rounded-full bg-[#26382F] px-7 py-4 font-semibold text-[#F4F1EA] shadow-lg transition-all duration-300 hover:scale-[1.02]"
>
  Book a Clarity Call →
</Link>
        </div>

        {/* Community Placeholder */}
        <div className="rounded-3xl border border-[#26382F]/10 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="font-serif text-3xl text-[#26382F]">
                My Becoming Path Community
              </h3>

              <p className="mt-2 font-semibold text-[#445146]">
                Connection, accountability, and shared growth.
              </p>

              <p className="mt-4 leading-8 text-[#5D625A]">
                A supportive community for people rebuilding after life's major
                transitions. Connect with others walking their own becoming path
                and find encouragement along the way.
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-[#DDE2D5] px-4 py-2 text-sm font-semibold text-[#26382F]">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Podcast Placeholder */}
        <div className="rounded-3xl border border-[#26382F]/10 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="font-serif text-3xl text-[#26382F]">
                My Becoming Path Podcast
              </h3>

              <p className="mt-2 font-semibold text-[#445146]">
                Conversations about healing, growth, and becoming.
              </p>

              <p className="mt-4 leading-8 text-[#5D625A]">
                Stories, reflections, and practical insights for navigating
                change, finding clarity, and creating a life that feels
                authentic to you.
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-[#EFE0C3] px-4 py-2 text-sm font-semibold text-[#26382F]">
              New Season Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#26382F] px-7 py-18 text-[#F4F1EA] md:px-16">
  <div className="mx-auto max-w-4xl text-center">
    <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#EFE0C3]/80">
Your becoming path starts here    </p>

    <h2 className="font-serif text-5xl leading-[1.08] md:text-6xl">
      Let's Walk This Path Together.
    </h2>

    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#D8D0C5]">
      If you're navigating a season of transition or rebuilding, we can
      start with a simple conversation. You don't need to have everything figured out before taking the next step.
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