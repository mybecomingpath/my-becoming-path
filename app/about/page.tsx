
import Link from "next/link";
import { Trees, Waves, Coffee, Compass } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#26382F]">

      
{/* SECTION 1: ABOUT CHRIS */}
<section className="bg-[#F4F1EA] px-6 pb-16 pt-36 md:px-16 md:pb-20 md:pt-40">

  {/* PHOTO AND INTRODUCTORY STORY */}
  <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

    {/* PHOTO */}
    <div className="mx-auto w-full max-w-[450px]">

      <div className="overflow-hidden rounded-[36px] shadow-lg shadow-[#26382F]/10">
        <img
          src="/chris.jpg"
          alt="Chris Mamone, founder of The Untamed Rebuilder"
          className="h-[480px] w-full object-cover object-center md:h-[580px] lg:h-[540px]"
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


    {/* INTRODUCTORY BIOGRAPHY */}
    <div className="flex flex-col justify-center">

      <p className="text-[0.82rem] font-bold uppercase tracking-[0.32em] text-[#445146]">
        ABOUT CHRIS
      </p>

      <h1 className="mt-5 font-serif text-[2.7rem] leading-[1.1] tracking-tight text-[#26382F] md:text-[3.5rem]">
        Life Changed.
        <br />
        So Did I.
      </h1>

      <div className="mt-7 space-y-5 text-[1.05rem] leading-[1.8] text-[#5D625A]">

        <p>
          I&apos;m Chris Mamone, founder of The Untamed Rebuilder.
        </p>

        <p>
          I know firsthand what it feels like when the life
          you&apos;ve built and the future you imagined
          suddenly disappear.
        </p>

        <p>
          I&apos;ve navigated profound loss, unexpected
          setbacks, major life transitions, and the difficult
          process of rediscovering myself when the life I once
          knew no longer fit.
        </p>

        <p>
          Those experiences changed how I understand
          resilience, identity, and personal growth.
        </p>

        <p className="font-serif text-[1.3rem] font-semibold leading-[1.5] text-[#26382F]">
          I learned that rebuilding isn&apos;t about returning
          to who you used to be. It&apos;s about discovering
          who you&apos;re becoming and having the courage
          to create your next chapter.
        </p>

      </div>
    </div>

  </div>


  {/* CENTERED COACHING PHILOSOPHY BLOCK */}
  <div className="mx-auto mt-16 max-w-4xl rounded-[32px] bg-[#E5EBE4] px-6 py-12 text-center md:mt-20 md:px-14 md:py-14">

    <div className="mx-auto max-w-3xl space-y-6 text-[1.05rem] leading-[1.85] text-[#5D625A]">

      <p>
        That understanding eventually became the foundation
        for The Untamed Rebuilder.
      </p>

      <p>
        Today, I help people who feel lost or stuck after
        major life changes reconnect with their strengths,
        challenge limiting beliefs, and find greater
        clarity and direction.
      </p>

      <p>
        My approach is rooted in a belief that everyone
        has the power within themselves to create meaningful
        change when they reconnect with their ability to
        choose. Sometimes what we need is someone who
        will walk beside us as we discover this forward path.
      </p>

    </div>


    {/* FEATURED MESSAGE */}
    <div className="mx-auto mt-10 max-w-3xl border-t border-[#26382F]/20 pt-9">

      <h2 className="font-serif text-[1.65rem] font-semibold leading-[1.45] text-[#26382F] md:text-[1.9rem]">
        You&apos;re not broken. You&apos;re not a problem.
        <br />You don&apos;t need to be fixed.
      </h2>

      <p className="mt-6 font-serif text-[1.3rem] italic leading-[1.6] text-[#26382F] md:text-[1.5rem]">
        I&apos;m here to walk beside you as you
        discover that for yourself.
      </p>

    </div>


    {/* DISCOVERY CALL BUTTON */}
    <div className="mt-9 flex justify-center">
      <Link
        href="/book"
        className="inline-flex items-center justify-center rounded-full bg-[#26382F] px-9 py-4 text-center font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#405F6B] hover:shadow-xl"
      >
        Book Your Free Discovery Call
      </Link>
    </div>

  </div>

</section>

      {/* SECTION 2: WHAT GUIDES MY WORK */}
      <section className="bg-white px-6 py-16 md:px-16 md:py-20">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-[0.82rem] font-bold uppercase tracking-[0.32em] text-[#445146]">
              WHAT GUIDES MY WORK
            </p>

            <h2 className="mt-5 font-serif text-[2.3rem] leading-[1.15] tracking-tight text-[#26382F] md:text-[3rem]">
              Growth Begins With Self-Awareness,
              Courage, and Choice.
            </h2>
          </div>

          <div className="mt-10 space-y-6 text-[1.05rem] leading-[1.85] text-[#5D625A]">

            <p>
              The life we desire shows itself to us when
              we begin to stop judging ourselves for where
              we are and how we got here, and start getting
              curious about what we need, what we value,
              and who we want to become.
            </p>

            
<p className="font-serif text-[1.4rem] font-semibold leading-[1.5] text-center text-[#26382F]">

              My coaching philosophy is built around a simple belief:
              <br />You are the expert on your own life.
            </p>

            <p>
              My role isn&apos;t to fix you, tell you what
              decisions to make, or define what success
              should look like.
            </p>

            <p>
              It&apos;s to create a space where you feel seen,
              heard, understood, and supported while also being
              challenged to recognize patterns, question limiting
              beliefs, and explore possibilities you may not
              have considered.
            </p>

            {/* FEATURED QUOTE */}
            <blockquote className="my-10 rounded-[28px] border-l-4 border-[#26382F] bg-[#F4F1EA] px-7 py-8 md:px-10">
              <p className="font-serif text-[1.35rem] leading-[1.6] text-[#26382F] md:text-[1.55rem]">
                &ldquo;This is your life. Your experiences are real
                and valid. You don&apos;t need anyone else&apos;s
                permission to choose a different direction.&rdquo;
              </p>
            </blockquote>

            <p>
              I believe empathy and accountability can coexist.
              We can acknowledge what we&apos;ve experienced
              without allowing those experiences to determine
              everything that comes next.
            </p>

            
<p className="font-serif text-[1.3rem] font-semibold text-center text-[#26382F]">

              And we can move forward without having every answer.
            </p>

            
<p className="text-center">
  You bring your experiences, your strengths, and
  your aspirations. <br />
  I bring perspective, practical tools, and a
  partnership focused on helping you move forward.
</p>


          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/coaching"
              className="inline-flex items-center justify-center rounded-full bg-[#26382F] px-9 py-4 font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#405F6B]"
            >
              Explore the 90-Day Catalyst
            </Link>
          </div>

        </div>
      </section>


      {/* SECTION 3: BEYOND COACHING */}
      <section className="bg-[#F4F1EA] px-6 py-16 md:px-16 md:py-20">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-[0.82rem] font-bold uppercase tracking-[0.32em] text-[#445146]">
              A LITTLE MORE ABOUT ME
            </p>

            <h2 className="mt-5 font-serif text-[2.2rem] leading-[1.2] text-[#26382F] md:text-[2.8rem]">
              Beyond Coaching, Here&apos;s Where
              You&apos;ll Find Me.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* CARD 1 */}
            <div className="rounded-[28px] bg-white p-8 shadow-sm md:p-9">
              <Trees size={28} className="text-[#26382F]" />

              <h3 className="mt-5 font-serif text-[1.55rem] text-[#26382F]">
                Exploring the Pacific Northwest
              </h3>

              <p className="mt-4 leading-[1.8] text-[#5D625A]">
                You'll usually find me hiking, going on scenic drives, 
                photographing places that move me, or spending time on the water.
                Living in the Pacific Northwest means not having to choose between the mountains,
                the ocean, and everything inbetween. Every trip is an adventure.                            
              </p>
            </div>

            {/* CARD 2 */}
            <div className="rounded-[28px] bg-white p-8 shadow-sm md:p-9">
              <Waves size={28} className="text-[#26382F]" />

              <h3 className="mt-5 font-serif text-[1.55rem] text-[#26382F]">
                Drawn to the Water
              </h3>

              <p className="mt-4 leading-[1.8] text-[#5D625A]">
                The rugged coast line of Washington and sailing have always
                held a special place in my life. Whether its going to Ocean Shores,
                Kalaloch, or Port Townsend, I love spending time by the water. These places
                are naturally grounding, healing, peaceful, and inspiring. 
                
                                
              </p>
            </div>

            {/* CARD 3 */}
            <div className="rounded-[28px] bg-white p-8 shadow-sm md:p-9">
              <Coffee size={28} className="text-[#26382F]" />

              <h3 className="mt-5 font-serif text-[1.55rem] text-[#26382F]">
                Coffee &amp; Creativity
              </h3>

              <p className="mt-4 leading-[1.8] text-[#5D625A]">
                You are never far from good coffee in the PNW. Coffee stands
                are everywhere and so are new places to explore. These adventures
                are a great way to connect with the community and inspire my passions for
                creativity through podcasting, writing, reading, photography. 
                </p>
            </div>

            {/* CARD 4 */}
            <div className="rounded-[28px] bg-white p-8 shadow-sm md:p-9">
              <Compass size={28} className="text-[#26382F]" />

              <h3 className="mt-5 font-serif text-[1.55rem] text-[#26382F]">
                Always Evolving
              </h3>

              <p className="mt-4 leading-[1.8] text-[#5D625A]">
                Life is a continuous journey of personal growth and discovering who you become.
                Questioning old beliefs, embracing new challenges, and looking forward to the next chapter
                creates unique opportunities in life to what I call gifts, lessons, and blessings.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 4: FINAL DISCOVERY CALL CTA */}
      <section className="bg-[#F4F1EA] px-6 pb-16 md:px-16 md:pb-18">

        <div className="mx-auto max-w-3xl rounded-[32px] bg-[#405F6B] px-6 py-12 text-center md:px-14 md:py-14">

          <p className="text-[0.75rem] font-bold uppercase tracking-[0.3em] text-[#D7E0D6]">
            LET&apos;S TAKE THE NEXT STEP
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-[2.2rem] leading-[1.15] text-white md:text-[3rem]">
            Your Next Chapter <br />Is Yours to Create.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[1.05rem] leading-[1.8] text-[#F4F1EA]">
            If you&apos;re ready to rediscover yourself,
            regain your confidence, <br /> and explore what
            comes next, I&apos;d love to hear your story.
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

    </main>
  );
}
