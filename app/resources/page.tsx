
import Link from "next/link";
import {
  BookOpen,
  Quote,
  Compass,
  Leaf,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

// UPDATE THIS WITH YOUR OWN SUBSTACK ADDRESS
const SUBSTACK_URL = "https://YOURPUBLICATION.substack.com";

// FEATURED CATEGORIES
// You can replace the image URLs with your own photos later.

const categories = [
  {
    title: "Books That Changed My Perspective",
    description:
      "Books that challenged my thinking, expanded my awareness, or helped me see life differently.",
    href: "#books",
    image: "/insights-books.jpg",
    label: "Explore Books",
    Icon: BookOpen,
  },
  {
    title: "Words Worth Remembering",
    description:
      "Quotes, passages, and powerful ideas that have stayed with me long after I first encountered them.",
    href: "#words",
    image: "/insights-words.jpg",
    label: "Explore Words",
    Icon: Quote,
  },
  {
    title: "Lessons From the Journey",
    description:
      "Personal breakthroughs, hard-earned lessons, and moments that changed how I see myself and the world.",
    href: "#lessons",
    image: "/insights-lessons.jpg",
    label: "Explore Lessons",
    Icon: Compass,
  },
  {
    title: "Reflections for Your Own Becoming",
    description:
      "Thought-provoking questions and invitations to pause, explore, and discover what matters to you.",
    href: "#reflections",
    image: "/insights-reflections.jpg",
    label: "Explore Reflections",
    Icon: Leaf,
  },
];


// STARTER CONTENT - REPLACE OR ADD TO THESE ARRAYS
const words = [
  {
    title: "A Reminder About Rebuilding",
    quote: "You don't rebuild backward. You rebuild untamed.",
    reflection:
      "Moving forward doesn't always mean recovering the life you once had. Sometimes it means giving yourself permission to create something entirely different.",
    source: "The Untamed Rebuilder",
  },
];

const lessons = [
  {
    category: "PERSONAL GROWTH",
    title: "Progress Isn't Always a Straight Line",
    description:
      "Sometimes progress is an inch. Other times it's a mile. What matters isn't how quickly we move, but what we're learning and how we're choosing to move forward.",
  },
];

const reflections = [
  {
    number: "01",
    question:
      "What part of your life no longer reflects who you're becoming?",
    prompt:
      "Consider where your current choices, routines, or expectations might no longer align with your values.",
  },
  {
    number: "02",
    question:
      "What would you choose if you weren't afraid of disappointing someone?",
    prompt:
      "Explore how expectations and outside approval may influence the direction of your life.",
  },
  {
    number: "03",
    question: "What does moving forward look like for you right now?",
    prompt:
      "It doesn't need to be a major leap. Sometimes one meaningful step is enough to begin.",
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#26382F]">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 pb-12 pt-36 md:px-16 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-[0.8rem] font-bold uppercase tracking-[0.32em] text-[#445146]">
            IDEAS • REFLECTIONS • DISCOVERIES
          </p>

          <h1 className="mt-6 font-serif text-[2.65rem] leading-[1.15] tracking-tight md:text-[3.6rem]">
            The Untamed
            <br />
            Collection of Insights
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-[1.08rem] leading-[1.85] text-[#5D625A]">
            A growing collection of books, meaningful words,
            personal discoveries, and reflections that challenge
            the way we think, reconnect us with ourselves,
            and inspire meaningful change.
          </p>

          <p className="mx-auto mt-6 max-w-2xl font-serif text-[1.3rem] italic leading-[1.6] text-[#26382F]">
            Sometimes a single idea can change the way
            we see everything.
          </p>

        </div>
      </section>


      {/* FOUR FEATURED CATEGORIES */}
      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">

          {categories.map((category) => {
            const Icon = category.Icon;

            return (
              <Link
                key={category.href}
                href={category.href}
                className="group overflow-hidden rounded-[28px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* CATEGORY PHOTO */}
                <div
                  className="relative h-[200px] bg-[#DDE5DC] bg-cover bg-center md:h-[240px]"
                  style={{
                    backgroundImage: `url("${category.image}")`,
                  }}
                >
                  <div className="absolute inset-0 bg-[#26382F]/10 transition-colors group-hover:bg-[#26382F]/20" />
                </div>

                {/* CATEGORY DESCRIPTION */}
                <div className="p-7 md:p-9">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E5EBE4]">
                    <Icon size={23} />
                  </div>

                  <h2 className="font-serif text-[1.65rem] leading-[1.25] text-[#26382F]">
                    {category.title}
                  </h2>

                  <p className="mt-4 leading-[1.8] text-[#5D625A]">
                    {category.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-semibold text-[#405F6B]">
                    {category.label}
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>

                </div>
              </Link>
            );
          })}

        </div>
      </section>


      {/* FEATURED THOUGHT */}
      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-3xl rounded-[32px] bg-[#E5EBE4] px-7 py-12 text-center md:px-14 md:py-14">

          <p className="text-[0.78rem] font-bold uppercase tracking-[0.3em] text-[#445146]">
            A THOUGHT WORTH EXPLORING
          </p>

          <h2 className="mx-auto mt-7 max-w-3xl font-serif text-[1.9rem] leading-[1.4] md:text-[2.5rem]">
            &ldquo;You don&apos;t rebuild backward. <br />
            You rebuild untamed.&rdquo;
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-[1.85] text-[#5D625A]">
            Sometimes growth begins when we stop asking how
            to return to who <br />we were and start exploring
            who we&apos;re becoming.
          </p>

        </div>
      </section>


      {/* BOOK COLLECTION */}
      <section
        id="books"
        className="scroll-mt-28 bg-white px-6 py-16 md:px-16 md:py-20"
      >
        <div className="mx-auto max-w-5xl">

          <p className="text-center text-[0.78rem] font-bold uppercase tracking-[0.3em] text-[#445146]">
            FROM MY READING LIST
          </p>

          <h2 className="mt-5 text-center font-serif text-[2.3rem] leading-[1.2] md:text-[3rem]">
            Books That Changed My Perspective
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center leading-[1.85] text-[#5D625A]">
            Some books entertain us. Others challenge what
            we believe, offer a different perspective,
            or leave us thinking long after the final page.
          </p>

          {/* STARTER BOOK CARD */}
          <div className="mx-auto mt-11 max-w-2xl rounded-[28px] bg-[#F4F1EA] p-8 text-center md:p-10">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DFE5DB]">
              <BookOpen size={30} />
            </div>

            <h3 className="mt-6 font-serif text-[1.65rem]">
              A Reading Collection in the Making
            </h3>

            <p className="mx-auto mt-4 max-w-lg leading-[1.8] text-[#5D625A]">
              This is where I&apos;ll share books that have
              challenged my thinking, influenced my personal
              growth, and inspired meaningful reflection.
              Each recommendation will include what stood
              out to me and why it matters.
            </p>

          </div>

        </div>
      </section>


      {/* WORDS COLLECTION */}
      <section
        id="words"
        className="scroll-mt-28 bg-[#F4F1EA] px-6 py-16 md:px-16 md:py-20"
      >
        <div className="mx-auto max-w-5xl">

          <p className="text-center text-[0.78rem] font-bold uppercase tracking-[0.3em] text-[#445146]">
            IDEAS THAT STAY WITH US
          </p>

          <h2 className="mt-5 text-center font-serif text-[2.3rem] md:text-[3rem]">
            Words Worth Remembering
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center leading-[1.85] text-[#5D625A]">
            A phrase, a sentence, or a simple idea can
            sometimes express something we&apos;ve been
            trying to understand for years.
          </p>

          <div className="mt-11 grid gap-6">

            {words.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] bg-white p-8 text-center shadow-sm md:p-12"
              >

                <Quote
                  size={30}
                  className="mx-auto text-[#66756B]"
                />

                <h3 className="mt-5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#66756B]">
                  {item.title}
                </h3>

                <p className="mx-auto mt-6 max-w-3xl font-serif text-[1.7rem] leading-[1.5] md:text-[2rem]">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <p className="mt-4 text-sm text-[#66756B]">
                  — {item.source}
                </p>

                <div className="mx-auto mt-7 max-w-2xl border-t border-[#26382F]/15 pt-7">
                  <p className="leading-[1.8] text-[#5D625A]">
                    {item.reflection}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* PERSONAL LESSONS */}
      <section
        id="lessons"
        className="scroll-mt-28 bg-white px-6 py-16 md:px-16 md:py-20"
      >
        <div className="mx-auto max-w-5xl">

          <p className="text-center text-[0.78rem] font-bold uppercase tracking-[0.3em] text-[#445146]">
            DISCOVERIES ALONG THE WAY
          </p>

          <h2 className="mt-5 text-center font-serif text-[2.3rem] md:text-[3rem]">
            Lessons From the Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center leading-[1.85] text-[#5D625A]">
            Not every meaningful lesson comes from a
            book or classroom. Some come from the
            experiences that challenge us to see
            ourselves and our lives differently.
          </p>

          <div className="mt-11 grid gap-6">

            {lessons.map((lesson) => (
              <article
                key={lesson.title}
                className="rounded-[28px] bg-[#E5EBE4] p-8 md:p-11"
              >

                <p className="text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[#445146]">
                  {lesson.category}
                </p>

                <h3 className="mt-5 font-serif text-[1.8rem] leading-[1.3] md:text-[2.1rem]">
                  {lesson.title}
                </h3>

                <p className="mt-5 max-w-3xl leading-[1.85] text-[#5D625A]">
                  {lesson.description}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* REFLECTION QUESTIONS */}
      <section
        id="reflections"
        className="scroll-mt-28 bg-[#F4F1EA] px-6 py-16 md:px-16 md:py-20"
      >
        <div className="mx-auto max-w-5xl">

          <p className="text-center text-[0.78rem] font-bold uppercase tracking-[0.3em] text-[#445146]">
            AN INVITATION TO EXPLORE
          </p>

          <h2 className="mt-5 text-center font-serif text-[2.3rem] leading-[1.2] md:text-[3rem]">
            Reflections for Your Own Becoming
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center leading-[1.85] text-[#5D625A]">
            You don&apos;t need to have all the answers.
            Sometimes the right question is enough
            to help you begin seeing a different possibility.
          </p>

          <div className="mt-11 grid gap-6">

            {reflections.map((reflection) => (
              <div
                key={reflection.number}
                className="rounded-[28px] bg-white p-8 shadow-sm md:p-10"
              >

                <p className="text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[#66756B]">
                  REFLECTION {reflection.number}
                </p>

                <h3 className="mt-4 font-serif text-[1.6rem] leading-[1.4] md:text-[1.9rem]">
                  {reflection.question}
                </h3>

                <p className="mt-4 leading-[1.8] text-[#5D625A]">
                  {reflection.prompt}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* SUBSTACK INVITATION */}
      <section className="bg-[#F4F1EA] px-6 pb-16 md:px-16 md:pb-20">

        <div className="mx-auto max-w-5xl rounded-[32px] bg-[#405F6B] px-6 py-12 text-center md:px-14 md:py-14">

          <p className="text-[0.75rem] font-bold uppercase tracking-[0.3em] text-[#D7E0D6]">
            GO A LITTLE DEEPER
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-[2.2rem] leading-[1.2] text-white md:text-[3rem]">
            The Conversation Continues on Substack.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-[1.85] text-[#F4F1EA]">
            Explore longer reflections, personal stories,
            and deeper conversations about navigating
            change, rediscovering yourself, and creating
            a meaningful life.
          </p>

          <div className="mt-9">
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4F1EA] px-9 py-4 font-semibold text-[#26382F] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              Explore My Substack
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
