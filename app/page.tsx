import {
  Mountain,
  TreePine,
  Signpost,
} from "lucide-react";
import Link from "next/link";
export default function Home() {  
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#26382F]">
           {/* HERO SECTION */}
      <section
        
className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center px-6 py-16 md:min-h-[60vh] md:px-16 md:py-20"

        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
               {/* Centered hero content */}
        
<div className="relative z-10 mx-auto max-w-5xl text-center text-white">

  {/* Soft feathered shadow behind the text */}
  
<div
  aria-hidden="true"
  className="pointer-events-none absolute -z-10"
  style={{
    width: "145vw",
    height: "130%",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    background:
      "radial-gradient(ellipse at center, rgba(15,30,35,0.55) 0%, rgba(15,30,35,0.38) 30%, rgba(15,30,35,0.18) 55%, rgba(15,30,35,0) 75%)",
  }}
/>



          {/* Main headline */}
          
<h1 className="mx-auto max-w-4xl font-serif text-3xl leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">

            Rediscover who you are.
            <br />
            Reclaim your direction.
            <br />
            Rebuild your life.
          </h1>

          {/* Coaching description */}
          
<p className="mx-auto mt-8 max-w-3xl font-serif text-[1.3rem] font-normal leading-[1.55] tracking-[0.01em] text-[#F4F1EA] md:text-[1.5rem]">

            I help people feeling lost or stuck after major life changes
            rebuild their confidence, break free from limiting patterns,
            and create a life that reflects who they're becoming.
          </p>

          {/* Brand statement */}
          
<p className="mx-auto mt-8 font-serif text-xl font-bold italic text-white md:text-2xl">

            You don&apos;t rebuild backward. You rebuild untamed.
          </p>

          {/* Call to action */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/book"
              className="
                inline-flex items-center justify-center
                rounded-full
                border border-white/70
                bg-white/15
                px-9 py-4
                text-base font-semibold text-white
                shadow-lg shadow-black/15
                backdrop-blur-md
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:border-white
                hover:bg-white/25
                hover:shadow-xl hover:shadow-black/25
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                active:scale-[0.97]
              "
            >
              Book Your Free Call
            </Link>
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

      
<div className="mx-auto max-w-4xl text-center">

  {/* Opening statement */}
  <h2 className="font-serif text-[1.9rem] leading-[1.2] tracking-tight text-[#26382F] md:text-[2.2rem]">
    When life no longer looks the way you imagined…
  </h2>

  {/* Emotional connection */}
  <p className="mx-auto mt-6 max-w-3xl font-serif text-[1.4rem] leading-[1.45] text-[#26382F] md:text-[1.6rem]">
    It&apos;s easy to lose sight of who you are, what matters to you,
    and where you want to go.
  </p>

  {/* Turning point */}
  <p className="mx-auto mt-7 font-serif text-[1.5rem] font-semibold leading-[1.35] text-[#26382F] md:text-[1.75rem]">
    But feeling lost doesn&apos;t mean you have to stay stuck.
  </p>

  {/* Forward-looking message */}
  <p className="mx-auto mt-7 max-w-3xl font-serif text-[1.3rem] leading-[1.5] text-[#26382F] md:text-[1.3rem]">
    You have the opportunity to rediscover yourself, challenge the
    patterns holding you back, and create a future that reflects
    who you&apos;re becoming.
  </p>

</div>

    </div>
    
{/* SECTION: YOUR STRATEGIC PARTNER */}
<div className="mx-auto max-w-5xl border-b border-[#26382F]/30 px-4 py-14 text-center md:py-20">

  <p className="text-[0.82rem] font-bold uppercase tracking-[0.38em] text-[#445146]">
    YOUR STRATEGIC PARTNER
  </p>

  <h2 className="mt-6 font-serif text-[2rem] leading-[1.15] tracking-tight text-[#26382F] md:text-[2.8rem]">
    You Don't Have to Figure It All Out Alone.
  </h2>

  <div className="mx-auto mt-8 max-w-3xl space-y-6 text-[1.1rem] leading-[1.8] text-[#5D625A] md:text-[1.2rem]">

    <p>
      When you're trying to rediscover yourself and figure out
      what comes next, the last thing you need is someone
      telling you how to live your life.
    </p>

    <p>
      You need someone who listens, understands, challenges
      you when necessary, and helps you recognize possibilities
      you may not see for yourself.
    </p>

    <p className="font-serif text-[1.5rem] font-semibold text-[#26382F]">
      That's how I approach coaching.
    </p>

    <p>
      I don't believe in fixing people or handing out
      one-size-fits-all solutions. I believe in walking
      beside you, helping you uncover your strengths,
      challenge limiting beliefs, and make decisions
      that align with who you are and what you want.
    </p>

    <p className="font-serif text-[1.5rem] font-bold text-[#26382F] md:text-[1.7rem]">
      This is your life. Your direction. Your evolution.
    </p>

    <p>
      My role is to help you find your way forward.
    </p>

  </div>
</div>


{/* SECTION: MEET YOUR COACH */}
<div className="mx-auto grid max-w-6xl items-center gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-20">

  {/* LEFT COLUMN: PHOTO */}
  <div className="overflow-hidden rounded-[36px] shadow-lg shadow-[#26382F]/10">
    <img
      src="/chris.jpg"
      alt="Chris Mamone"
      className="h-[450px] w-full object-cover object-center md:h-[580px] lg:h-[650px]"
    />
  </div>

  {/* RIGHT COLUMN: INTRODUCTION */}
  <div className="flex max-w-[660px] flex-col justify-center">

    <p className="text-[0.82rem] font-bold uppercase tracking-[0.38em] text-[#445146]">
      MEET YOUR COACH
    </p>

    <h2 className="mt-5 font-serif text-[2.2rem] leading-[1.1] tracking-tight text-[#26382F] md:text-[2.8rem]">
      Real Life Experience.
      <br />
      Real Understanding.
    </h2>

    <div className="mt-7 space-y-6 text-[1.1rem] leading-[1.75] text-[#5D625A]">

      <p>
        I'm Chris Mamone, and I know what it feels like
        when the life you've known and the future you
        imagined suddenly disappear.
      </p>

      <p>
        I've experienced significant loss, unexpected
        upheaval, and the difficult process of
        rediscovering who I am when the life I'd
        built no longer fit.
      </p>

      <p>
        Those experiences taught me something important:
        rebuilding isn't about returning to who you
        used to be. It's about discovering who you're
        becoming and making intentional choices about
        what comes next.
      </p>

      <p>
        That understanding shapes how I work with
        my clients today.
      </p>

      <p>
        I bring lived experience, genuine compassion,
        and a commitment to helping you recognize your
        strengths, challenge what's holding you back,
        and move forward with greater confidence and clarity.
      </p>

      <p className="font-serif text-[1.35rem] font-bold leading-[1.5] text-[#26382F]">
        You don't have to become who you were before.
        You have the freedom to become who you choose to be.
      </p>

    </div>

    {/* CALL TO ACTION */}
    <div className="mt-9">
      <Link
        href="/coaching"
        className="
          inline-flex items-center justify-center
          rounded-full
          bg-[#26382F]
          px-8 py-4
          font-semibold text-white
          shadow-lg shadow-black/10
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-[#1A1A1A]
          hover:shadow-xl
          active:scale-[0.97]
        "
      >
        Explore The 90-Day Catalyst
      </Link>
    </div>

  </div>
</div>
</div>
</section>

      <section className="bg-[var(--brand-sage)] px-7 py-20 md:px-16 md:py-14">
        <div className="mx-auto max-w-7xl text-center">
          
          <h2 className="font-serif text-5xl leading-[1.15] text-[#26382F]">
            
            YOUR EVOLUTION
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
    Apply for the 90-Day Catalyst. Limited private coaching spaces available.
    <br />
    The 90-Day Catalyst is a private 1:1 coaching partnership for people rebuilding after serious life disruption.
  </p>
</div>
        </div>
      </section>      
<section className="bg-[#F4F1EA] px-7 py-16 md:px-16">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
  <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
    Untamed Rebuilders
  </p>

  <h2 className="font-serif text-4xl leading-[1.08] text-[#26382F] md:text-5xl">
    Real People. Real Evolution.
  </h2>
</div>

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
  </main>
);
}