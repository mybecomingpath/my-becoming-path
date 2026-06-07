import { Trees, Waves, Coffee, Compass } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#26382F] pt-23">
      <section className="px-7 py-24 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <img
              src="/chris.jpg"
              alt="Chris Mamone"
              className="h-[1100px] w-full rounded-[36px] object-cover shadow-xl"
            />
          </div>

          <div>
            <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
              ABOUT CHRIS
            </p>

            <h1 className="font-serif text-5xl leading-[1.08] md:text-6xl">
              A grounded guide
            </h1>

            <p className="mt-7 text-lg leading-8 text-[#5D625A]">
              My name is Chris Mamone, and I help people navigate major life disruptions, identity shifts, emotional overwhelm, and new beginnings.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#5D625A]">
              My work blends personal experience, reflection, practical strategy, and compassionate accountability to help you move forward in a way that feels aligned with who you are becoming.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#5D625A]">
              My Becoming Path was created from my own lived experience of rebuilding my life, learning to trust myself again, and discovering that personal growth is rarely a straight line. Life has a way of changing the plans we thought we had. Sometimes through loss, sometimes through unexpected endings, and sometimes through opportunities that ask us to become someone new.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#5D625A]">
              Along the way, I learned that growth does not require pretending everything is okay. It does not require having all the answers. More often, it begins with honesty, self-compassion, and the willingness to take the next step—even when the path ahead is unclear.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#5D625A]">
                The name My Becoming Path carries a special meaning for me. While it began as part of my own journey, this work is not about my path—it is about yours.              </p>

              <p className="mt-6 text-lg leading-8 text-[#5D625A]">
                Each person's journey is unique. There is no single right way to heal, grow, rebuild, or move forward. My role is not to tell you what your path should look like. My role is to walk alongside you, help you reconnect with yourself, and create space for you to discover what feels true and meaningful for your life.              </p>

              <p className="mt-6 text-lg leading-8 text-[#5D625A]">
                Because in the end, this is your becoming path.
                </p>

              <p className="mt-6 text-lg leading-8 text-[#5D625A]"> And you don't have to walk it alone.
              </p>

            <a
              href="/book"
              className="mt-9 inline-flex rounded-full bg-[#26382F] px-8 py-4 font-semibold text-[#F4F1EA] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#1f2f28]"
            >
              Book a Free Clarity Call →
            </a>
          </div>
        </div>
      </section>
      {/* WHAT GUIDES MY WORK */}
<section className="bg-white px-7 py-24 md:px-16">
  <div className="mx-auto max-w-5xl">
    <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
      WHAT GUIDES MY WORK
    </p>

    <h2 className="font-serif text-5xl leading-[1.08] text-[#26382F]">
      Growth begins with courage and acceptance.
    </h2>

    <div className="mt-8 space-y-6 text-lg leading-8 text-[#5D625A]">
      <p>
        Growth isn’t about changing who you are. It’s about reconnecting with the version
        of you beneath the noise, expectations, and experiences that have pulled you away from yourself.
      </p>

      <p>
        The biggest breakthroughs I've witnessed come through self-awareness, accountability, courage, self-empathy, consistency, and the willingness to keep moving forward even when the path ahead isn't completely clear.
      </p>
<blockquote className="rounded-3xl border-l-4 border-[#26382F] bg-[#F4F1EA] p-8 font-serif text-2xl leading-9 text-[#26382F]">
        “This is your life. This is your journey. Your experiences are real and valid. They do not require
        justification from anyone. It’s okay to make mistakes and struggle. That’s how we learn. Keep going
        by finding what works for you, not what others have told you to do.”
      </blockquote>
      <p>
        I believe personal growth begins with acceptance. Not resignation, but the ability to
        fully acknowledge where you are today without judgment. From that place, meaningful change becomes possible.

      </p>

      <p>
        Many of us have spent years trying to fix ourselves, hustle harder, stay positive at all costs, or pretend
        everything is okay when it isn't. I've learned that lasting growth comes from a different approach — one rooted
        in trusting yourself, patience, healthy boundaries, and the courage to be fully yourself.
      </p>

      <p>
        I'm not here to tell you what your path should look like. I'm here
        to walk alongside you as you discover it for yourself.
      </p>
    </div>

    <a
      href="/coaching"
      className="mt-9 inline-flex rounded-full bg-[#26382F] px-8 py-4 font-semibold text-[#F4F1EA] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#1f2f28]"
    >
      Learn More About Coaching →
    </a>
  </div>
</section>

{/* A FEW THINGS ABOUT ME */}
<section className="bg-[#F4F1EA] px-7 py-24 md:px-16">
  <div className="mx-auto max-w-6xl">
    <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#445146]">
      A FEW THINGS ABOUT ME
    </p>

    <h2 className="font-serif text-5xl leading-[1.08] text-[#26382F]">
      Beyond coaching, this is where you'll find me...
    </h2>

    <div className="mt-12 grid gap-6 md:grid-cols-2">
  {[
    [
      "Exploring the Pacific Northwest",
      "Outside of coaching, you'll usually find me hiking, taking road trips, photographing places that move me, or spending time in nature. I love both the mountains and the ocean, and living in the Pacific Northwest means I don’t have to choose between them.",
    ],
    [
      "Quiet Coastal Places Along The Water",
      "One of the places I feel most at peace is the old wooden shipbuilding community of Port Townsend. From the small bakeries, shops downtown, and Fort Worden and the Point Wilson lighthouse along the beach, the quiet beauty of this place helps me ground and reconnect with myself.",
    ],
    [
      "Coffee stands, story, and creativity",
      "I'm a proud supporter of Pacific Northwest coffee stands. I'm also drawn to creative outlets like writing, podcasting, reading, and photography that help me make meaning from life and stay connected to my own becoming path.",
    ],
    [
      "Still becoming, too",
      "Growth often arrives through experiences we never would have chosen. I’m still learning how to move beyond seasons of rejection, isolation, and feeling misunderstood. Much of my journey has involved finding my voice, trusting my perspective, and allowing myself to be seen more fully.",
    ],
  ].map(([title, text]) => (
    <div
      key={title}
      className="rounded-3xl border border-[#26382F]/10 bg-white p-8 shadow-sm"
    >
      {title === "Exploring the Pacific Northwest" && (
        <Trees size={28} className="mb-4 text-[#26382F]" />
      )}

      {title === "Quiet Coastal Places Along The Water" && (
        <Waves size={28} className="mb-4 text-[#26382F]" />
      )}

      {title === "Coffee stands, story, and creativity" && (
        <Coffee size={28} className="mb-4 text-[#26382F]" />
      )}

      {title === "Still becoming, too" && (
        <Compass size={28} className="mb-4 text-[#26382F]" />
      )}

      <h3 className="font-serif text-2xl text-[#26382F]">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-[#5D625A]">
        {text}
      </p>
        </div>
  ))}
</div>
</div>
</section>
{/* FINAL CTA */}
<section className="bg-[#26382F] px-7 py-24 text-center text-[#F4F1EA] md:px-16">
  <div className="mx-auto max-w-4xl">
    <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-[#EFE0C3]/80">
      IF SOMETHING HERE RESONATED WITH YOU
    </p>

    <h2 className="font-serif text-5xl leading-[1.08] md:text-6xl">
      Let's walk this path together.
    </h2>

    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#D8D0C5]">
      If you're navigating a season of change and looking for grounded support,
      you don't have to have everything figured out before reaching out.
      Sometimes the next step isn't having all the answers. Sometimes it's
      simply having a conversation.
    </p>

    <a
      href="/book"
      className="mt-10 inline-flex rounded-full bg-[#EFE0C3] px-9 py-4 font-semibold text-[#26382F] shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-[#F5E8D2]"
    >
      Book Your Free Clarity Call →
    </a>
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