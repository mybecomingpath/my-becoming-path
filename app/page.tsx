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
  className="relative min-h-[60vh] bg-cover bg-[center_30%] pt-28 md:min-h-[55vh] md:pt-0"
  style={{ backgroundImage: "url('/hero.jpg')" }}
>
        <div className="absolute inset-0 bg-black/5" />

        <div className="relative z-10 flex min-h-[60vh] translate-y-4 items-center px-6 md:min-h-[55vh] md:px-16">
          <div className="relative max-w-4xl text-white">
  <div
    aria-hidden="true"
    className="absolute -inset-x-8 -inset-y-7 -z-10 rounded-[40px] bg-[#0B211A]/55 blur-2xl md:-inset-x-10 md:-inset-y-9"
  />
            <p className="mb-7 ml-[2px] text-[0.82rem] font-bold uppercase tracking-[0.42em] text-white">
  A Message For The Relentless...
</p>

<h1 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-5xl">
  FOR THE UNTAMED WHO 
  <br />
  ARE FORGED IN THE FIRE.
</h1>

<h2 className="mt-5 max-w-4xl font-serif text-3xl leading-[1.08] text-[#F4F1EA] md:text-3xl">
  Clear the aftermath of life disruption and build
  <br />
  an unshakable foundation for your next evolution.
</h2>

<p className="mt-5 max-w-4xl text-[1.15rem] font-normal leading-[1.55] text-[#F2F4F1]">
  <span className="md:block">
    Stop playing small in a story you&apos;ve already outgrown.
  </span>

  <span className="md:block">
    This strategic partnership is designed to clear the wreckage of the past 
  </span>

  <span className="md:block">
     and architect a life of absolute freedom and alignment.
  </span>
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

    
  </Link>
</div>
          </div>
        </div>
      </section>
<section className="bg-[#F4F1EA] px-7 py-10 md:px-16">
  <div className="mx-auto max-w-7xl">

    {/* ROW 1: FULL WIDTH */}
    <div className="border-y border-[#26382F]/40 py-8 text-center">
      <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
        THE UNTAMED REBUILDER
      </p>

      <h2 className="mx-auto max-w-5xl font-serif text-[1.9rem] leading-[1.08] tracking-tight text-[#26382F] md:text-[1.75rem]">
  <span className="block">
    I’m not here to help you tolerate the disruptions keeping you small.
  </span>

  <span className="mt-5 block">
    Together, we will clear the aftermath of the fire, break the conditioning
    holding you back, and build an unshakable foundation for your next
    evolution.
  </span>
</h2>
    </div>

    {/* ROW 2: COACH INTRODUCTION */}
<div className="mx-auto grid max-w-6xl gap-10 py-10 lg:grid-cols-[0.9fr_1.0fr] lg:items-stretch lg:gap-14">
  {/* COLUMN A: PHOTO */}
  <div className="h-[500px] lg:h-auto">
    <img
      src="/chris.jpg"
      alt="Chris Mamone"
      className="h-full w-full rounded-[36px] object-cover object-center shadow-lg shadow-[#26382F]/10"
    />
  </div>

  {/* COLUMN B: INTRODUCTION */}
  <div className="flex max-w-[660px] flex-col justify-center">
    <p className="text-[0.82rem] font-bold uppercase tracking-[0.38em] text-[#445146]">
      Your Strategic Partner
    </p>

    <h2 className="mt-4 font-serif text-[2.3rem] leading-[1.05] tracking-tight text-[#26382F] md:text-[2.8rem]">
      Real life experience.
    </h2>

    <div className="mt-7 space-y-6 text-[1.1rem] leading-[1.75] text-[#5D625A]">
      <p>
        I’m Chris Mamone, and I know exactly what serious life disruption feels like. The moment 
        where the life you live and the future you planned for suddenly disappear, and going back to "normal" 
        is no longer an option. {}
        </p>

      <p> <strong className="font-semibold text-[#26382F]">
        This framework didn't come from courses and textbooks. It was created after years of experience
        having my own life burnt to the ground more than once.
        </strong></p>

      <p>
        I’ve walked through the fire of sudden loss, unexpected upheaval, and the complete collapse of identity.
        Rebuilding demanded far more than simple resilience. It required me to face the wreckage of my own journey, 
        break the conditioning that held me captive to my past, and become the sole architect of what came next.
      </p>

      <p>
        That lived experience shapes every partnership. I walk beside you with uncompromising truth, execution, and deep
        respect for what this moment demands of you. I meet you exactly where you are, with zero judgment, 
        focused entirely on who you are becoming. You bring the raw truth of your current reality. I bring the strategy, 
        framework, and structure to clear the aftermath and build an unshakeable foundation.        
           
      </p>
    </div>

    <Link
      href="/about"
      className="
        group
        mt-9
        inline-flex w-fit items-center gap-3
        rounded-full
        bg-[#26382F]
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
      <span>Explore The Evolution Blueprint </span>
      
    </Link>
  </div>
</div>
  </div>
</section>

      <section className="bg-[#E7EBE4] px-7 py-20 md:px-16 md:py-16">
        <div className="mx-auto max-w-7xl text-center">
          
          <h2 className="font-serif text-5xl leading-[1.15] text-[#26382F]">
            
            THE RECKONING EVOLUTION
          </h2>

          <h3 className="mt-5 text-center font-serif text-2xl text-[#26382F]">
          The 90-Day Catalyst to Reclaim Your Edge
</h3>

<p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-[#5D625A]">
  Going back to "normal" is a trap. We don’t manage your life disruption—we transform it.
  This is where old habits and the illusions of the past come to an end. Together, we clear the 
  obstacles keeping you small and stagnant to forge a foundation of unshakeable inner strength. 
  The old path is dead. No more tolerating a life you've outgrown. No more looking back at what was. 
  It is time to look forward, claim your edge, and forge your future evolution.
</p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE2D5]">
  <TreePine size={32} />
</div>
              <h3 className="font-serif text-2xl">Clear The Aftermath</h3>
              <p className="mt-3 leading-7 text-[#5D625A]">
                We run a raw, unfiltered audit on the aftermath of life disruption. The old habits and deep conditioning 
                keeping you stagnant and small come to an end—transformed here into raw power for your future foundation.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE2D5]">
  <Signpost size={32} />
</div>
              <h3 className="font-serif text-2xl">Forge The Foundation</h3>
              <p className="mt-3 leading-7 text-[#5D625A]">
                When old conditioning creeps up to drag you backward, we recalibrate your mindset, rewrite your internal language, and immediately clear the obstacles, forging ahead to protect your boundaries and drive you forward with relentless momentum.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE2D5]">
  <Mountain size={32} />
</div>
              <h3 className="font-serif text-2xl">Claim Your Evolution</h3>
              <p className="mt-3 leading-7 text-[#5D625A]">
The wreckage is gone and your unshakeable foundation is locked in. No more looking back—the horizon is directly in front of us. This is your new beginning: a calculated execution to chase your highest goals, lock in your purpose, and actively build life on your terms. This is your evolution.              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center text-center">
  <Link
    href="/contact"
    className="
      group
      inline-flex items-center justify-center gap-3
      rounded-full
      bg-[#26382F]
      px-9 py-4
      text-[1.05rem] font-semibold text-white
      shadow-lg shadow-black/10
      transition-all duration-300 ease-out
      hover:-translate-y-1
      hover:bg-[#1A1A1A]
      hover:shadow-xl hover:shadow-black/20
      active:translate-y-0
      active:scale-[0.97]
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-[#26382F]
      focus-visible:ring-offset-2
      focus-visible:ring-offset-[#E7EBE4]
    "
  >
    <span>Claim My Evolution Now</span>

    
  </Link>

  <p className="mt-4 text-[0.9rem] font-medium tracking-[0.01em] text-[#5D625A]">
    Apply for the 90-Day Catalyst Framework. Limited proximity slots available.
  </p>
</div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#26382F] text-[#F4F1EA]">
  <div
  className="absolute left-0 top-0 hidden h-full w-[46%] bg-cover bg-center bg-no-repeat lg:block"
    style={{ backgroundImage: "url('/experience-bg.jpg')" }}
  />

  <div className="absolute left-0 top-0 h-full w-[46%] bg-black/60" />

  
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