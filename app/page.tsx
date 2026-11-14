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
        

className="relative flex min-h-[75svh] items-center justify-center overflow-hidden bg-cover bg-center px-6 pt-36 pb-16 md:min-h-[75svh] md:px-16 md:pt-40 md:pb-20 lg:min-h-[60vh] lg:pt-20 lg:pb-20"


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
<div className="mx-auto max-w-5xl border-b border-[#26382F]/30 px-4 py-14 text-center md:py-16">

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

{/* Strategic Partner Call to Action */}
<div className="mt-9 flex justify-center">
  <Link
    href="/book"
    className="
      inline-flex items-center justify-center
      rounded-full
      bg-[#26382F]
      px-9 py-4
      text-base font-semibold text-white
      shadow-lg shadow-black/10
      transition-all duration-300
      hover:-translate-y-1
      hover:bg-[#1A1A1A]
      hover:shadow-xl
      active:scale-[0.97]
    "
  >
    Book Your Free Call
  </Link>
</div>

  </div>
</div>


{/* SECTION: MEET YOUR COACH */}

<div className="mx-auto grid max-w-5xl items-center gap-10 pt-16 pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:pt-20 lg:pb-8">


  {/* LEFT COLUMN: PHOTO */}
  
<div className="flex flex-col items-center">

  <div className="w-full overflow-hidden rounded-[36px] shadow-lg shadow-[#26382F]/10">
    <img
      src="/chris.jpg"
      alt="Chris Mamone"
      className="h-[450px] w-full object-cover object-center md:h-[520px] lg:h-[580px]"
    />
  </div>

  <div className="mt-5 text-center">
    <p className="font-serif text-[1.65rem] font-semibold text-[#26382F]">
      Chris Mamone
    </p>
    <p className="mt-1 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-[#445146]">
      Founder | The Untamed Rebuilder
    </p>
  </div>

</div>


  {/* RIGHT COLUMN: INTRODUCTION */}
  <div className="flex w-full max-w-[500px] flex-col justify-center lg:justify-self-center">

    <p className="text-[0.82rem] font-bold uppercase tracking-[0.38em] text-[#445146]">
      MEET YOUR COACH
    </p>

    <h2 className="mt-5 font-serif text-[2.2rem] leading-[1.1] tracking-tight text-[#26382F] md:text-[2.2rem]">
      Real Life Experience.
      <br />
      Real Understanding.
    </h2>

    
<div className="mt-7 space-y-4 text-[1.05rem] leading-[1.7] text-[#5D625A]">

  <p>
    I've experienced firsthand what happens when the life
    you knew and the future you imagined suddenly disappear.
    Significant loss, unexpected upheaval, and rebuilding
    my life have taught me that moving forward isn't about
    returning to who you used to be.
  </p>

  <p className="font-serif text-[1.3rem] font-semibold text-[#26382F]">
    It's about rediscovering who you are and choosing
    who you want to become.
  </p>

  <p>
    Those experiences shape my coaching today. I bring
    genuine compassion, lived experience, and a commitment
    to helping you uncover your strengths, challenge what's
    holding you back, and move forward with greater
    confidence and clarity.
  </p>

  <p className="font-serif text-[1.25rem] font-bold leading-[1.5] text-[#26382F]">
        You have the freedom to choose who to become. Your evolution is yours to create.
  </p>

</div>


    {/* CALL TO ACTION */}
    <div className="mt-7">
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

     
{/* 90-DAY CATALYST SECTION */}
<section className="bg-[var(--brand-sage)] px-7 py-16 md:px-16 md:py-20">

  <div className="mx-auto max-w-7xl">

    {/* SECTION INTRODUCTION */}
    <div className="mx-auto max-w-4xl text-center">

      <p className="text-[0.82rem] font-bold uppercase tracking-[0.32em] text-[#445146]">
        THE PATH TO YOUR EVOLUTION
      </p>

      <h2 className="mt-5 font-serif text-[2.2rem] leading-[1.15] tracking-tight text-[#26382F] md:text-[3rem]">
        Introducing the 90-Day Catalyst
      </h2>

      <p className="mx-auto mt-7 max-w-3xl font-serif text-[1.45rem] font-semibold leading-[1.4] text-[#26382F] md:text-[1.7rem]">
        You don&apos;t have to keep waiting for life to change.
      </p>

      <p className="mx-auto mt-6 max-w-3xl text-[1.05rem] leading-[1.8] text-[#5D625A] md:text-[1.15rem]">
        Transformation doesn&apos;t happen by accident, and it
        doesn&apos;t happen overnight. It begins with a decision
        to stop letting your past determine what&apos;s possible
        for your future.
      </p>

      <p className="mx-auto mt-5 max-w-3xl text-[1.05rem] leading-[1.8] text-[#5D625A] md:text-[1.15rem]">
        The 90-Day Catalyst is a private, personalized coaching
        experience designed to help you move beyond feeling lost
        or stuck, rediscover who you are, and build the confidence
        and direction to create what comes next.
      </p>

      <p className="mx-auto mt-5 max-w-3xl font-serif text-[1.25rem] italic leading-[1.6] text-[#26382F]">
        We&apos;ll turn reflection into clarity, clarity into action,
        and action into meaningful change.
      </p>

    </div>

    
{/* THREE COACHING PHASES */}
<div className="mt-14 grid gap-7 lg:grid-cols-3">

  {[
    {
      phase: "01",
      title: "Clear the Aftermath",
      subtitle: "Release what's keeping you stuck.",
      description:
        "Before you can build something new, you need space to understand what has changed. Together, we'll untangle overwhelming thoughts, explore the emotional impact of your transition, and identify the patterns keeping you connected to the past.",
      focus:
        "Greater clarity, emotional awareness, and room to move forward.",
    },
    {
      phase: "02",
      title: "Reclaim Your Foundation",
      subtitle: "Reconnect with your identity and values.",
      description:
        "When life changes, it's easy to lose sight of who you are beneath expectations and old beliefs. We'll rediscover your strengths, clarify your values, and redefine what a meaningful and fulfilling life looks like on your terms.",
      focus:
        "A stronger sense of self, personal boundaries, and renewed confidence.",
    },
    {
      phase: "03",
      title: "Become Unshakable",
      subtitle: "Move forward with confidence and direction.",
      description:
        "With greater clarity about who you are and what you want, we'll translate your vision into action. Together, we'll create a personalized roadmap, establish supportive habits, and identify achievable steps toward the life you're choosing to build.",
      focus:
        "A practical plan, forward momentum, and confidence in your next steps.",
    },
  ].map((card, index) => (
    <div
      key={card.phase}
      className="
        flex h-full flex-col
        rounded-3xl bg-white p-7 shadow-sm
        md:p-8
      "
    >

      {/* ICON */}
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#DFE5DB] text-[#26382F]">
        {index === 0 && <TreePine size={32} />}
        {index === 1 && <Signpost size={32} />}
        {index === 2 && <Mountain size={32} />}
      </div>

      {/* PHASE NUMBER */}
      <p className="text-center text-[0.72rem] font-bold uppercase tracking-[0.25em] text-[#66756B]">
        PHASE {card.phase}
      </p>

      {/* PHASE TITLE */}
      <h3 className="mt-3 flex items-center justify-center text-center font-serif text-[1.7rem] leading-[1.15] text-[#26382F] lg:h-[52px]">
        {card.title}
      </h3>

      {/* BOLD SUBHEADING */}
      <p className="mt-2 flex items-center justify-center text-center font-semibold leading-[1.5] text-[#26382F] lg:h-[40px]">
        {card.subtitle}
      </p>

      {/* DESCRIPTION */}
      <p className="mt-5 text-center leading-[1.75] text-[#5D625A]">
        {card.description}
      </p>

      {/* YOUR FOCUS */}
      <div className="mt-auto pt-7">
        <div className="flex flex-col justify-center border-t border-[#26382F]/15 pt-5 lg:min-h-[80px]">
          <p className="text-center text-[0.95rem] leading-[1.6] text-[#26382F]">
            <strong>Your focus:</strong> {card.focus}
          </p>
        </div>
      </div>

    </div>
  ))}

</div>


    {/* INSIDE THE EXPERIENCE */}
    <div className="mx-auto mt-20 max-w-5xl">

      <div className="text-center">
        <p className="text-[0.82rem] font-bold uppercase tracking-[0.32em] text-[#445146]">
          INSIDE THE EXPERIENCE
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl font-serif text-[2rem] leading-[1.2] text-[#26382F] md:text-[2.6rem]">
          A Partnership in Your Evolution.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-[1.05rem] leading-[1.8] text-[#5D625A]">
          The 90-Day Catalyst isn&apos;t a passive online course
          or a collection of generic worksheets. It&apos;s a
          private coaching partnership centered on you,
          your challenges, and the future you want to create.
        </p>
      </div>

      {/* EXPERIENCE BENEFITS */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">

        <div className="rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h3 className="font-serif text-[1.5rem] text-[#26382F]">
            90 Days of Personalized 1:1 Coaching
          </h3>
          <p className="mt-4 leading-[1.75] text-[#5D625A]">
            Focused Zoom sessions, typically held bi-weekly,
            where we explore challenges, uncover opportunities,
            and develop practical steps toward your goals.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h3 className="font-serif text-[1.5rem] text-[#26382F]">
            Support Between Sessions
          </h3>
          <p className="mt-4 leading-[1.75] text-[#5D625A]">
            Share reflections, ask questions,
            and receive support as you navigate what comes
            up between calls through voice, text, and email.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h3 className="font-serif text-[1.5rem] text-[#26382F]">
            Personalized Tools and Action Plans
          </h3>
          <p className="mt-4 leading-[1.75] text-[#5D625A]">
            Thoughtful session follow-ups, reflection exercises,
            and practical strategies tailored to your circumstances
            to help integrate what you&apos;re learning into everyday life.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h3 className="font-serif text-[1.5rem] text-[#26382F]">
            A Partnership Built Around You
          </h3>
          <p className="mt-4 leading-[1.75] text-[#5D625A]">
            No one-size-fits-all solutions. No predetermined
            definition of success. We work together to create
            meaningful progress in a way that honors your
            values, circumstances, and goals.
          </p>
        </div>

      </div>
    </div>


    {/* FINAL CALL TO ACTION */}
    <div className="mx-auto mt-16 max-w-4xl rounded-[32px] border border-[#26382F]/10 bg-[#F4F1EA] px-6 py-12 text-center md:px-12 md:py-14">

      <p className="text-[0.75rem] font-bold uppercase tracking-[0.28em] text-[#445146]">
        YOUR NEXT CHAPTER STARTS WITH A CHOICE
      </p>

      <h2 className="mx-auto mt-5 max-w-3xl font-serif text-[2rem] leading-[1.2] text-[#26382F] md:text-[2.5rem]">
        You don&apos;t have to have everything
        <br/>
        figured out to begin.
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-[1.8] text-[#5D625A]">
        You just have to be willing to explore what&apos;s possible.
        Let&apos;s talk about where you are, where you want to go,
        and whether the 90-Day Catalyst is the right next step for you.
      </p>

      <div className="mt-9 flex justify-center">
        <Link
          href="/book"
          className="
            inline-flex items-center justify-center
            rounded-full
            bg-[#26382F]
            px-9 py-4
            text-center text-[1.05rem] font-semibold text-white
            shadow-lg shadow-black/10
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:bg-[#1A1A1A]
            hover:shadow-xl
            active:scale-[0.97]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#26382F]
            focus-visible:ring-offset-2
          "
        >
          Book Your Free Discovery Call
        </Link>
      </div>

      
<p className="mx-auto mt-5 max-w-2xl font-serif text-[1.1rem] italic leading-[1.6] text-[#445146]">
  Let&apos;s start where you are, explore where you
  want to go, and discover what&apos;s possible together.
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

{/* FINAL HOMEPAGE CALL TO ACTION */}

<section className="mx-7 mt-14 overflow-hidden rounded-[32px] bg-[#526B65] px-7 py-12 md:mx-40 md:mt-16 md:px-16 md:py-12">

  <div className="mx-auto max-w-4xl text-center">

    <p className="text-[0.8rem] font-bold uppercase tracking-[0.32em] text-[#D7E0D6]">
      YOUR NEXT CHAPTER BEGINS HERE
    </p>

    <h2 className="mt-6 font-serif text-[2.3rem] leading-[1.15] tracking-tight text-white md:text-[3.2rem]">
      Ready to Rediscover What&apos;s Next?
    </h2>

    <p className="mx-auto mt-8 max-w-3xl font-serif text-[1.4rem] leading-[1.5] text-[#F4F1EA] md:text-[1.6rem]">
      You don&apos;t need to have the next ten years figured
      out before taking your first step. You just need
      to be willing to take the next one.
    </p>

    <p className="mx-auto mt-7 max-w-3xl text-[1.05rem] leading-[1.85] text-[#E4E8E2] md:text-[1.15rem]">
      If you&apos;re feeling stuck, searching for direction,
      or ready to stop letting a major life change define
      your future, let&apos;s have a real conversation about
      where you are and where you want to go.
    </p>

    {/* BOOKING BUTTON */}
    <div className="mt-10 flex justify-center">
      <Link
        href="/book"
        className="
          inline-flex items-center justify-center
          rounded-full
          bg-[#F4F1EA]
          px-9 py-4
          text-center text-[1.05rem] font-semibold text-[#26382F]
          shadow-lg shadow-black/15
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:bg-white
          hover:shadow-xl
          active:scale-[0.97]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#26382F]
        "
      >
        Book Your Free Discovery Call
      </Link>
    </div>

    {/* WHAT TO EXPECT */}
    
<div className="mx-auto mt-8 max-w-2xl border-t border-white/20 pt-7">


      <h3 className="font-serif text-[1.8rem] text-white md:text-[2rem]">
        What to Expect
      </h3>

      <p className="mt-5 text-[1.05rem] leading-[1.75] text-[#E4E8E2]">
        This is a free, 30-minute conversation focused on you.
        We&apos;ll explore what&apos;s keeping you stuck,
        what you&apos;d like to change, and what moving forward
        could look like.
      </p>

      <p className="mt-5 text-[1.05rem] leading-[1.85] text-[#E4E8E2]">
        We&apos;ll also discuss whether the 90-Day Catalyst
        is the right fit for your goals.
      </p>

      <p className="mt-8 font-serif text-[1.25rem] italic leading-[1.6] text-[#F4F1EA]">
        No pressure. No obligation. Just an opportunity
        to explore what&apos;s possible.
      </p>

    </div>

  </div>
  
</section>


{/* FREE GUIDE EMAIL SIGNUP SECTION */}
<section className="bg-[#F4F1EA] px-6 pt-14 pb-6 md:px-16 md:pt-20 md:pb-8">

  
<div className="mx-auto max-w-4xl rounded-[32px] bg-[#E5EBE4] px-6 py-8 md:px-10 md:py-10">


    {/* SECTION INTRODUCTION */}
    <div className="mx-auto max-w-3xl text-center">

      <p className="text-[0.8rem] font-bold uppercase tracking-[0.32em] text-[#445146]">
        A FREE GUIDE FOR YOUR NEXT CHAPTER
      </p>

      <h2 className="mt-6 font-serif text-[2.3rem] leading-[1.15] tracking-tight text-[#26382F] md:text-[3rem]">
        Feeling Lost?
        <br />
        Find Your Way Forward.
      </h2>

      <h3 className="mx-auto mt-6 max-w-2xl font-serif text-[1.4rem] leading-[1.4] text-[#26382F] md:text-[1.65rem]">
        5 Steps to Rediscover Yourself and Find Your Direction
      </h3>

      <p className="mx-auto mt-7 max-w-2xl text-[1.05rem] leading-[1.8] text-[#5D625A]">
        When life no longer looks the way you imagined,
        figuring out what comes next can feel overwhelming.
      </p>

      <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] leading-[1.8] text-[#5D625A]">
        This free guide will help you slow down, reconnect
        with what matters, recognize the patterns keeping
        you stuck, and begin moving forward with greater
        confidence and clarity.
      </p>

    </div>


    {/* GUIDE BENEFITS & EMAIL SIGNUP CARD */}
    <div className="mx-auto mt-12 max-w-2xl rounded-[28px] bg-white px-6 py-10 shadow-sm md:px-12 md:py-12">

      <h3 className="text-center font-serif text-[1.9rem] text-[#26382F]">
        Inside Your Free Guide
      </h3>

      {/* FIVE BENEFITS */}
      
<ul className="mx-auto mt-8 w-fit max-w-full space-y-5 text-left">


        <li className="flex items-start gap-4">
          <span className="mt-1 font-bold text-[#526B65]">
            ✓
          </span>
          <span className="leading-[1.65] text-[#5D625A]">
            Identify what&apos;s keeping you stuck.
          </span>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-1 font-bold text-[#526B65]">
            ✓
          </span>
          <span className="leading-[1.65] text-[#5D625A]">
            Reconnect with your values and strengths.
          </span>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-1 font-bold text-[#526B65]">
            ✓
          </span>
          <span className="leading-[1.65] text-[#5D625A]">
            Challenge limiting beliefs and repetitive patterns.
          </span>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-1 font-bold text-[#526B65]">
            ✓
          </span>
          <span className="leading-[1.65] text-[#5D625A]">
            Clarify what you want moving forward.
          </span>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-1 font-bold text-[#526B65]">
            ✓
          </span>
          <span className="leading-[1.65] text-[#5D625A]">
            Take one meaningful step toward change.
          </span>
        </li>

      </ul>


      {/* EMAIL SIGNUP FORM */}
      
<div className="mx-auto mt-10 max-w-xl border-t border-[#26382F]/15 pt-9">

  <div className="mx-auto max-w-sm">


        <form
          action="/api/subscribe"
          method="POST"
          className="space-y-4"
        >
          <label
            htmlFor="guide-email"
            className="block text-center text-sm font-semibold text-[#26382F]"
          >
            Your Email Address
          </label>

          <input
            id="guide-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Enter your email address..."
            className="w-full rounded-xl border border-[#26382F]/20 bg-[#F4F1EA] px-5 py-4 text-[#26382F] outline-none transition focus:border-[#26382F] focus:ring-2 focus:ring-[#26382F]/20"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-[#26382F] px-7 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#405F6B] hover:shadow-lg"
          >
            Send Me the Free Guide
          </button>

        </form>

        <p className="mt-5 text-center text-[0.85rem] leading-[1.6] text-[#5D625A]">
          Thoughtful insights for your next chapter.
          Unsubscribe anytime.
        </p>

      </div>
     </div>
    </div>

  </div>

</section>



</section>
  </main>
);
}