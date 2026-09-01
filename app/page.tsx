import { ArrowRight,
  Headphones,
  Mountain,
  TreePine,
  Signpost,
  Sunrise,
}from "lucide-react";
import Link from "next/link";

export default function Home() {
  
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#26382F]">
     
      <section
  className="relative min-h-[60vh] bg-cover bg-[center_30%] pt-28 md:min-h-[56vh] md:pt-0"
  style={{ backgroundImage: "url('/hero.jpg')" }}
>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10271f]/75 via-[#10271f]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10271f]/45 via-transparent to-transparent" />

        <div className="relative z-10 flex min-h-[60vh] translate-y-4 items-center px-7 md:min-h-[56vh] md:px-16">
          <div className="max-w-4xl text-white">
            <p className="mb-7 ml-[2px] text-[0.82rem] font-bold uppercase tracking-[0.42em] text-white">
  A Message For The Relentless...
</p>

<h1 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-5xl">
  FOR THE UNTAMED WHO ARE
  <br />
  FORGED IN THE FIRE.
</h1>

<h2 className="mt-5 max-w-4xl font-serif text-3xl leading-[1.08] text-[#F4F1EA] md:text-3xl">
  Clear the aftermath of life disruption and build an unshakable foundation for your next evolution.
</h2>

<p className="mt-5 max-w-3xl text-[1.15rem] leading-[1.55] text-[#F2F4F1] font-normal">
  Stop playing small in a story you've already outgrown. This strategic partnership is designed
  to clear the wreckage of the past and architect a life of absolute freedom and alignment.
</p>

            <div className="mt-9">
  <Link
    href="/book"
    className="
      group
      inline-flex items-center justify-center gap-4
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
    <span>Claim Your Evolution Now</span>

    <ArrowRight
      aria-hidden="true"
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
          I’m not here to help you manage the 
          <br />
          disruption that keeps you playing small.
        </span>

        <span className="mt-4 block">
          It's time to remove the conditioning that holds
          <br />
          you back and build an unshakeable foundation.
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
I’m Chris Mamone, and I know exactly what it takes to mount a serious comeback when life implodes right in front of you. I’ve walked the raw journey of heavy life disruption—where chaos surrounds you and going back to normal isn’t an option.        </p>

        <p className="mt-6 text-[1.15rem] leading-[1.7] text-[#5D625A]">
          My coaching is built for the self-reliant outlier who has taken a massive hit. No matter the circumstance, the individuals I partner with refuse to let that crisis define them. We don’t pretend everything is okay or wait around for the right moment to come.
                </p>
                <p className="mt-6 text-[1.15rem] leading-[1.7] text-[#5D625A]">
          We actively clear the aftermath, reclaim your inner drive, and create an unshakeable foundation for your next evolution. Together, we process the past, accept what was, and break free from the conditioning that led you to where you are today.
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

      <section className="bg-[#F8F6F2] px-7 pt-10 pb-20 md:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto mb-12 h-px max-w-6xl bg-[#26382F]/10" />
          <h2 className="font-serif text-5xl leading-[1.15] text-[#26382F]">
            
            THE UNTAMED REBUILDER TRAIL MAP
          </h2>

          <h3 className="mt-5 text-center font-serif text-2xl text-[#26382F]">
  A 90 Day Expedition to Create Your Next Evolution
</h3>

<p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-[#5D625A]">
  We don’t endlessly vent about the past or seek comfort in chaos. We execute a clear, step-by-step trail map to clear the aftermath of life disruption and build an unshakeable foundation for your next evolution.
</p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE2D5]">
  <TreePine size={32} />
</div>
              <h3 className="font-serif text-2xl">The Brush Bash</h3>
              <p className="mt-3 leading-7 text-[#5D625A]">
                We run a raw, unfiltered audit on the aftermath of your life disruption. We hack through the thick overgrowth of old societal scripts,
                people-pleasing habits, and deep conditioning that kept you playing small
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE2D5]">
  <Signpost size={32} />
</div>
              <h3 className="font-serif text-2xl">The Switchbacks</h3>
              <p className="mt-3 leading-7 text-[#5D625A]">
                This is the heavy lifting of the ascent. When the trail feels endless and old doubts creep up to pull you back, we recalibrate your mindset, change your internal language, and clear current obstacles.
                We forge a strict operational code that protects your boundaries and commands your day.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE2D5]">
  <Mountain size={32} />
</div>
              <h3 className="font-serif text-2xl">The Summit</h3>
              <p className="mt-3 leading-7 text-[#5D625A]">
                You break above the treeline. We conquer the internal battles that used to keep you safe and stagnant, locking in a permanent sense of internal strength and earned confidence.
                From this peak, we map out a clear, aggressive 12-month blueprint for your next evolution.
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
        PROVEN GRIT
      </p>

     <h2 className="font-serif text-5xl leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
        Don't Call It A Comeback. 
        <br />
        We Own The Path Forward.
      </h2>

      <div className="mt-8 max-w-xl">
  <p className="text-xl leading-9 text-[#D8D0C5]">
  This framework didn’t come from a clinical vacuum or a safe textbook. I built it on front-line experience in the battle of heavy life disruptions, studying the exact patterns of how outliers bounce back when the path completely disappears.
</p>

  <Link
  href="/coaching"
  className="mt-8 inline-flex rounded-full border border-[#EFE0C3]/30 bg-[#EFE0C3]/92 px-8 py-4 font-semibold text-[#26382F] shadow-xl backdrop-blur"
>
  Apply For The 90-Day Blueprint →
</Link>
</div>
    </div>

    <div className="space-y-10">
      <div className="pl-7">
        <h3 className="font-serif text-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">150+ Outlier Evolutions</h3>
        <p className="mt-4 leading-8 text-[#F4F1EA]">
          As the host of The Empowered Grief Journey Podcast, I have recorded over 150 episodes interviewing, dissecting, and analyzing the raw turnarounds of individuals who faced total identity collapses, career crashes, and profound losses. I know what actually drives momentum, and what keeps you stagnant.
        </p>
      </div>

      <div className="pl-7">
        <h3 className="font-serif text-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          The Empowered Grief Journey
        </h3>
        <p className="mt-4 leading-8 text-[#F4F1EA]">
          I brought 23 distinct voices from around the world together to co-author a master anthology on navigating life’s heavy disruptions. This is a concentrated blueprint built from the collective intelligence of people who refused to conform to their wreckage.
        </p>
      </div>

      <div className="pl-7">
        <h3 className="font-serif text-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">The Strategic Partnership</h3>
        <p className="mt-4 leading-8 text-[#F4F1EA]">
          We don’t spin in circles trying to manage your disruption or look for safety in the chaos. This space is a dedicated war-room for your life. We use real data, proven patterns, and a strict operational code to move you from the brush bash to your summit with momentum.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#F4F1EA] px-7 py-24 md:px-16">
  <div className="mx-auto max-w-7xl">

    <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
      Outlier Momentum
    </p>

    <h2 className="max-w-3xl font-serif text-5xl leading-[1.08] text-[#26382F]">
REAL TURNAROUNDS. UNCOMPROMISED RESULTS.    </h2>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">

      {/* CARD 1 */}
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="mb-5 text-[#C7A95A]">
          ★★★★★
        </div>

        <p className="leading-8 text-[#5D625A]">
          "Chris helped me manage my emotions more effectively, and respond to situations with a more positive perspective. Every session gave me space to be honest about what I was experiencing."
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
          "Chris helped me navigate my breakup, work stress, and social anxiety with greater clarity and confidence.
          His ability to challenge negative thinking and help me reframe situations made a real difference in my life."
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
          "Chris's coaching helped me embrace my authentic self and become more confident as I stepped into new 
          roles in my life. He helped me slow down, recognize my progress, and trust the process."
        </p>

        <p className="mt-6 font-semibold text-[#26382F]">
          — Lidia
        </p>
      </div>

    </div>

  </div>
</section>
<section className="bg-[#F4F1EA] px-7 py-16 text-[#26382F] md:px-16">
  <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

    {/* LEFT COLUMN — PHOTO */}
    <div>
      <img
        src="/chris.jpg"
        alt="Chris Mamone"
        className="w-full rounded-[36px] object-cover shadow-xl lg:h-[700px]"
      />
    </div>

    {/* RIGHT COLUMN — CONTENT */}
    <div>
      <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
        THE NEXT ASCENT
      </p>

      <h2 className="max-w-3xl font-serif text-5xl leading-[1.08] text-[#26382F]">
        Stop Guessing. Start Rebuilding.
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5D625A]">
        You don't need options. You need an execution strategy. This partnership is designed for 
        outliers who are ready to break out of the stagnation loop and make a massive comeback. 
      </p>

      {/* PRIMARY OFFER */}
      <div className="mt-12 rounded-[30px] border border-[#DDE2D5] bg-white p-8 shadow-sm ring-2 ring-[#DDE2D5]">
        <p className="mb-4 text-[0.75rem] font-semibold uppercase tracking-[0.28em] text-[#445146]">
          THE 90-DAY REBUILDING FRAMEWORK
        </p>

        <h3 className="font-serif text-3xl text-[#26382F]">
          1:1 Strategic Partnership for Outliers
        </h3>

        <p className="mt-2 font-semibold text-[#445146]">
          Personalized support to create your next evolution.
        </p>

        <p className="mt-6 leading-8 text-[#5D625A]">
          A rigorous, 3-phase rebuilding container to clear the aftermath of
          life disruption, break past conditioning, and establish an
          unshakable foundation. No fluff. Just alignment and forward momentum.
        </p>

        <Link
          href="/book"
          className="mt-8 inline-flex rounded-full bg-[#26382F] px-7 py-4 font-semibold text-white shadow-md transition hover:opacity-90"
        >
          I'M READY TO REBUILD →
        </Link>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#26382F] px-7 py-18 text-[#F4F1EA] md:px-16">
  <div className="mx-auto max-w-4xl text-center">
    <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#EFE0C3]/80">
THE EXPEDITION BEGINS NOW    </p>

    <h2 className="font-serif text-5xl leading-[1.08] md:text-6xl">
      STOP GUESSING. 
      <br />
      START REBUILDING.
    </h2>

    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#D8D0C5]">
      The trail ahead requires a clear blueprint, not endless wheel-spinning. If you are a self-reliant outlier done with playing small in the aftermath of a major life disruption, it is time to map your next evolution.
    </p>

    <Link
  href="/book"
  className="mt-10 inline-flex rounded-full border border-[#EFE0C3]/30 bg-[#EFE0C3] px-9 py-4 font-semibold text-[#26382F]"
>
  I'm Ready to Rebuild
</Link>
  </div>
</section>
<footer className="bg-[#1f2f28] px-7 py-10 text-[#F4F1EA] md:px-16">
  <div className="mx-auto max-w-7xl text-center">

    <p className="text-sm font-semibold uppercase tracking-[0.38em] text-[#EFE0C3]/80">
      CHRIS MAMONE | UNTAMED REBUILDING COACH
    </p>

    <p className="mt-2 text-[#D8D0C5]">
      I help outliers clear the aftermath of life disruption and build an
      unshakable foundation for their next evolution.
    </p>

    <nav className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-[#D8D0C5]">
      <a href="/" className="transition hover:text-[#EFE0C3]">
        Home
      </a>
      <a href="/about" className="transition hover:text-[#EFE0C3]">
        About
      </a>
      <a href="/coaching" className="transition hover:text-[#EFE0C3]">
        Coaching
      </a>
      <a href="/contact" className="transition hover:text-[#EFE0C3]">
        Contact
      </a>
    </nav>

    <p className="mt-6 text-sm text-[#D8D0C5]">
      © 2026 My Becoming Path. All rights reserved.
    </p>

    <div className="mt-2 flex justify-center gap-4 text-sm text-[#D8D0C5]">
      <a href="#">Instagram</a>
      <a href="#">TikTok</a>
      <a href="#">Substack</a>
    </div>

  </div>
</footer>
  
</main>
);
}