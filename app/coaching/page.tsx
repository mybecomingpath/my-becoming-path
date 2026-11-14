
import Link from "next/link";
import {
  TreePine,
  Signpost,
  Mountain,
  Check,
  Compass,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function CoachingPage() {
  const phases = [
    {
      number: "01",
      title: "Clear the Aftermath",
      subtitle: "Release what's keeping you stuck.",
      description:
        "Before you can build something new, you need space to understand what has changed. Together, we'll untangle overwhelming thoughts, explore the emotional impact of your transition, and identify patterns keeping you connected to the past.",
      focus:
        "Greater clarity, emotional awareness, and room to move forward.",
    },
    {
      number: "02",
      title: "Reclaim Your Foundation",
      subtitle: "Reconnect with your identity and values.",
      description:
        "We'll rediscover your strengths, clarify your values, explore limiting beliefs, and reconnect with what matters most to you. You'll begin defining what a meaningful and fulfilling life looks like on your own terms.",
      focus:
        "A stronger sense of self, personal boundaries, and renewed confidence.",
    },
    {
      number: "03",
      title: "Become Unshakable",
      subtitle: "Move forward with confidence and direction.",
      description:
        "We'll translate your growing clarity into action. Together, we'll develop a personalized roadmap, establish supportive habits, and identify achievable steps toward the life you're choosing to create.",
      focus:
        "Practical direction, forward momentum, and confidence in your next steps.",
    },
  ];

  const benefits = [
    {
      title: "Weekly Private Coaching",
      description:
        "One 60-minute Zoom session each week, typically 12–13 sessions over 90 days. Each conversation is focused on your circumstances, challenges, progress, and next steps.",
    },
    {
      title: "Personalized Session Recaps",
      description:
        "After each session, you'll receive a written summary highlighting important insights, patterns we've identified, and areas to focus on moving forward.",
    },
    {
      title: "Exercises and Action Plans",
      description:
        "Personalized reflection exercises, practical strategies, and achievable action steps help you apply what you're learning in everyday life.",
    },
    {
      title: "Support Between Sessions",
      description:
        "Share reflections, ask questions, and receive encouragement through email, text, and voice messages between scheduled sessions, within our agreed communication boundaries.",
    },
    {
      title: "Accountability and Progress",
      description:
        "We'll regularly revisit your intentions, recognize what you've attempted, explore what's working, and make adjustments when something isn't serving you.",
    },
    {
      title: "Optional Session Recordings",
      description:
        "With mutual agreement, sessions can be recorded for your personal reflection so you can revisit meaningful insights between our conversations.",
    },
  ];

  const outcomes = [
    "A clearer understanding of who you are and what matters to you.",
    "Greater awareness of limiting beliefs and recurring patterns.",
    "Stronger personal boundaries, self-trust, and confidence.",
    "A clearer sense of purpose and direction.",
    "Practical tools for responding to future challenges.",
    "A personalized action plan for continuing your progress.",
  ];

  const faqs = [
    {
      question: "Do I need to know what I want before starting?",
      answer:
        "Not at all. Many people begin coaching because they're uncertain about who they are, what they want, or where to go next. Discovering those answers is part of our work together.",
    },
    {
      question: "What if I don't make progress every week?",
      answer:
        "That's normal. Personal growth isn't a straight line. Some weeks bring breakthroughs, while others invite reflection and adjustment. We focus on what you're learning, what you've attempted, and what you can do differently moving forward.",
    },
    {
      question: "Will I have work to do between sessions?",
      answer:
        "Yes. The Catalyst is an active partnership. You'll be invited to complete personalized exercises, reflect on our conversations, and take practical steps between sessions. The work is designed around your circumstances, not a rigid curriculum.",
    },
    {
      question: "How are payments handled?",
      answer:
        "The total investment is $2,000 for the 90-day program. We'll discuss payment arrangements during your free discovery call so you understand the financial commitment before deciding to enroll.",
    },
    {
      question: "What happens after the 90 days?",
      answer:
        "We'll review your progress, revisit your priorities, and identify how you can continue applying what you've learned. The goal is to help you move forward with greater independence, clarity, and confidence.",
    },
    {
      question: "Is coaching the same as counseling or therapy?",
      answer:
        "No. Coaching focuses on reflection, personal development, goals, and forward action. It does not diagnose or treat mental health conditions and is not a replacement for licensed mental health care.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#26382F]">

      {/* HERO */}
      <section className="px-6 pb-16 pt-36 text-center md:px-16 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-4xl">

          <p className="text-[0.8rem] font-bold uppercase tracking-[0.3em] text-[#445146]">
            PRIVATE 1:1 COACHING
          </p>

          <h1 className="mt-6 font-serif text-[2.8rem] leading-[1.12] tracking-tight md:text-[3.8rem]">
            The 90-Day Catalyst
          </h1>

          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-[1.5rem] leading-[1.4] md:text-[1.9rem]">
            Rediscover Yourself. Reclaim Your Direction.
            <br/> Create What&apos;s Next.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[1.08rem] leading-[1.85] text-[#5D625A]">
            A private, personalized coaching partnership for
            people ready to move beyond feeling lost or stuck
            and create a life that reflects who
            they&apos;re becoming.
          </p>

          <p className="mx-auto mt-7 max-w-2xl font-serif text-[1.4rem] font-semibold text-[#26382F]">
            You don&apos;t have to keep waiting for life to change.
          </p>

          <div className="mt-9">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-[#26382F] px-9 py-4 text-center font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#405F6B]"
            >
              Book Your Free Discovery Call
            </Link>
          </div>
        </div>
      </section>


      {/* YOUR ROLE IN THE PROCESS */}
      <section className="px-6 pb-16 md:px-16 md:pb-20">
        <div className="mx-auto max-w-4xl rounded-[32px] bg-[#E5EBE4] px-7 py-12 text-center md:px-14 md:py-14">

          <p className="text-[0.78rem] font-bold uppercase tracking-[0.3em] text-[#445146]">
            REAL CHANGE REQUIRES PARTICIPATION
          </p>

          <h2 className="mt-5 font-serif text-[2rem] leading-[1.2] md:text-[2.7rem]">
            Your Evolution Is <br />Something We Build Together.
          </h2>

          <div className="mx-auto mt-7 max-w-2xl space-y-5 text-[1.05rem] leading-[1.85] text-[#5D625A]">

            <p>
              Coaching isn&apos;t about someone fixing your life
              or handing you all the answers.
            </p>

            <p>
              It&apos;s about gaining the awareness, confidence,
              and tools to <br />begin making meaningful choices
              for yourself.
            </p>

            <p>
              Our weekly conversations create space for
              reflection and discovery. <br />The real transformation
              begins when you take what we uncover <br />and put
              it into practice between sessions.
            </p>

            <p>
              There will be moments of clarity and moments
              of uncertainty. <br />Some attempts will work.
              Others will teach us something different.
            </p>

          </div>

          <div className="mx-auto mt-9 max-w-2xl border-t border-[#26382F]/20 pt-8">

            <p className="font-serif text-[1.6rem] font-semibold leading-[1.4] md:text-[1.9rem]">
              Sometimes progress is an inch.
              <br />
              Other times it&apos;s a mile.
              <br />
              Both are progress.
            </p>

            <p className="mt-6 leading-[1.8] text-[#5D625A]">
              We won&apos;t build this partnership around
              blame, shame, or guilt. <br />We&apos;ll focus on
              effort, learning, accountability, and finding
              a way forward.
            </p>

            <p className="mt-5 font-serif text-[1.25rem] italic text-[#26382F]">
              I&apos;ll walk beside you throughout the process,
              but the <br /> direction you choose will always be yours.
            </p>

          </div>
        </div>
      </section>


      {/* THE THREE PHASES */}
      <section className="bg-[#E5EBE4] px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-[0.8rem] font-bold uppercase tracking-[0.3em] text-[#445146]">
              YOUR 90-DAY JOURNEY
            </p>

            <h2 className="mt-5 font-serif text-[2.4rem] leading-[1.15] md:text-[3rem]">
              The Path to Your Evolution.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-[1.85] text-[#5D625A]">
              The Catalyst follows three interconnected
              phases. They provide direction while allowing
              us to adapt our work to your unique circumstances.
            </p>

            <p className="mx-auto mt-6 max-w-2xl font-serif text-[1.3rem] italic leading-[1.6]">
              We&apos;ll turn reflection into clarity, clarity
              into action, <br /> and action into meaningful change.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">

            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className="flex h-full flex-col rounded-[28px] bg-white p-7 text-center shadow-sm md:p-8"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DFE5DB]">
                  {index === 0 && <TreePine size={30} />}
                  {index === 1 && <Signpost size={30} />}
                  {index === 2 && <Mountain size={30} />}
                </div>

                <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.25em] text-[#66756B]">
                  PHASE {phase.number}
                </p>

                <h3 className="mt-4 flex items-center justify-center font-serif text-[1.7rem] leading-[1.2] lg:min-h-[65px]">
                  {phase.title}
                </h3>

                <p className="mt-3 flex items-center justify-center font-semibold leading-[1.5] lg:min-h-[52px]">
                  {phase.subtitle}
                </p>

                <p className="mt-6 leading-[1.8] text-[#5D625A]">
                  {phase.description}
                </p>

                <div className="mt-auto pt-7">
                  <div className="border-t border-[#26382F]/15 pt-5">
                    <p className="text-[0.95rem] leading-[1.65]">
                      <strong>Your focus:</strong> {phase.focus}
                    </p>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* INSIDE THE EXPERIENCE */}
      <section className="bg-[#F4F1EA] px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-[0.8rem] font-bold uppercase tracking-[0.3em] text-[#445146]">
              INSIDE THE EXPERIENCE
            </p>

            <h2 className="mt-5 font-serif text-[2.4rem] leading-[1.15] md:text-[3rem]">
              A Partnership in Your Evolution.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-[1.85] text-[#5D625A]">
              The 90-Day Catalyst is more than our weekly
              conversations. It&apos;s a personalized
              partnership designed to help you turn
              insight into meaningful action.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[28px] bg-white p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DFE5DB]">
                    <Check size={19} />
                  </div>

                  <div>
                    <h3 className="font-serif text-[1.45rem] leading-[1.3]">
                      {benefit.title}
                    </h3>

                    <p className="mt-4 leading-[1.8] text-[#5D625A]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* EXPECTED OUTCOMES */}
      <section className="bg-white px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-[0.8rem] font-bold uppercase tracking-[0.3em] text-[#445146]">
              WHAT YOU&apos;RE WORKING TOWARD
            </p>

            <h2 className="mt-5 font-serif text-[2.4rem] leading-[1.15] md:text-[3rem]">
              More Clarity. More Confidence.
              <br /> More Direction.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-[1.85] text-[#5D625A]">
              Every client&apos;s experience is different.
              Our goal is to help you develop meaningful,
              lasting changes that reflect your values,
              circumstances, and aspirations.
            </p>
          </div>

          
<div className="mx-auto mt-10 w-fit max-w-full space-y-5">


            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-start gap-4"
              >
                <Check
                  size={21}
                  className="mt-1 shrink-0 text-[#526B65]"
                />

                <p className="leading-[1.75] text-[#5D625A]">
                  {outcome}
                </p>
              </div>
            ))}

          </div>

          <p className="mx-auto mt-9 max-w-2xl text-center text-sm leading-[1.8] text-[#66756B]">
            These are potential areas of growth, not
            guaranteed outcomes. Your experience will depend <br />
            on your starting point, circumstances,
            participation, and the work we do together.
          </p>

        </div>
      </section>


      {/* PROGRAM INVESTMENT */}
      <section className="bg-[#E5EBE4] px-6 py-16 md:px-16 md:py-20">

        <div className="mx-auto max-w-3xl rounded-[32px] bg-white px-7 py-12 text-center shadow-sm md:px-14 md:py-14">

          <p className="text-[0.8rem] font-bold uppercase tracking-[0.3em] text-[#445146]">
            YOUR INVESTMENT
          </p>

          <h2 className="mt-5 font-serif text-[2.3rem] leading-[1.2] md:text-[2.8rem]">
            Invest in Your Next Chapter.
          </h2>

          <p className="mt-7 font-serif text-[3.5rem] leading-none text-[#26382F] md:text-[4.2rem]">
            $2,000
          </p>

          <p className="mt-3 font-semibold text-[#445146]">
            Complete 90-Day Private Coaching Experience
          </p>


<div className="mx-auto mt-9 w-fit max-w-full space-y-3 text-left leading-[1.7] text-[#5D625A]">

            <p>✓ 90 days of private 1:1 coaching</p>
            <p>✓ Weekly 60-minute Zoom sessions</p>
            <p>✓ Personalized session notes and exercises</p>
            <p>✓ Action planning and accountability</p>
            <p>✓ Email, text, and voice-message support</p>
            <p>✓ Optional session recordings</p>

          </div>

          <p className="mx-auto mt-8 max-w-lg leading-[1.75] text-[#5D625A]">
            Payment arrangements are discussed during
            your free discovery call, before you make
            any commitment.
          </p>

          <div className="mt-9">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#26382F] px-9 py-4 text-center font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#405F6B]"
            >
              Book Your Free Discovery Call
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="mt-5 text-sm text-[#66756B]">
            No pressure. No obligation to enroll.
          </p>

        </div>
      </section>


      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-[#F4F1EA] px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-3xl">

          <div className="text-center">
            <p className="text-[0.8rem] font-bold uppercase tracking-[0.3em] text-[#445146]">
              COMMON QUESTIONS
            </p>

            <h2 className="mt-5 font-serif text-[2.3rem] md:text-[2.8rem]">
              Before You Begin.
            </h2>
          </div>

          <div className="mt-10 space-y-4">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[20px] bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-semibold leading-[1.6] text-[#26382F] [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="shrink-0 text-xl font-normal text-[#66756B]">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-4 leading-[1.8] text-[#5D625A]">
                  {faq.answer}
                </p>
              </details>
            ))}

          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-[#F4F1EA] px-6 pb-16 md:px-16 md:pb-20">

        <div className="mx-auto max-w-5xl rounded-[32px] bg-[#405F6B] px-6 py-12 text-center md:px-14 md:py-14">

          <p className="text-[0.75rem] font-bold uppercase tracking-[0.3em] text-[#D7E0D6]">
            YOUR NEXT CHAPTER BEGINS WITH A CHOICE
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-[2.3rem] leading-[1.15] text-white md:text-[3rem]">
            You Don&apos;t Have to Have Everything
            Figured Out to Begin.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[1.05rem] leading-[1.8] text-[#F4F1EA]">
            Let&apos;s start where you are, explore where
            you want to go, and discover what&apos;s
            possible together.
          </p>

          <div className="mt-9">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-[#F4F1EA] px-9 py-4 text-center font-semibold text-[#26382F] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              Book Your Free Discovery Call
            </Link>
          </div>

        </div>

      </section>


      {/* COACHING DISCLAIMER */}
      <section className="bg-[#F4F1EA] px-6 pb-12 md:px-16">
        <div className="mx-auto max-w-4xl rounded-[20px] border border-[#26382F]/10 bg-white/70 px-6 py-6 text-center">

          <p className="text-[0.85rem] leading-[1.8] text-[#5D625A]">
            <strong className="text-[#26382F]">
              Coaching Disclaimer:
            </strong>{" "}
            Coaching services are not psychotherapy,
            counseling, crisis intervention, or medical
            treatment. Coaching is not intended to diagnose
            or treat mental health conditions. If you need
            clinical mental health support, please consult
            a qualified licensed professional.
          </p>

        </div>
      </section>

    </main>
  );
}
