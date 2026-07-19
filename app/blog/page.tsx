import Link from "next/link";

export const metadata = {
  title: "The Becoming Journal | My Becoming Path",
  description:
    "Reflections and grounded guidance for navigating grief, major life change, identity shifts, personal growth, and intentional new beginnings.",
};

const posts = [
  {
    title: "Rebuilding Your Life After Everything Changes",
    excerpt:
      "Rebuilding does not mean returning to who you were before. It means learning how to move forward while honoring everything that has changed.",
    slug: "how-to-rebuild-your-life-after-everything-changes",
    category: "Rebuilding",
    date: "Coming Soon",
  },
  {
    title: "Why Grief Changes Your Identity—and What to Do About It",
    excerpt:
      "Loss can change how you see yourself, your relationships, and the future you once imagined. That identity disruption is a real part of grief.",
    slug: "why-grief-changes-your-identity",
    category: "Grief & Identity",
    date: "Coming Soon",
  },
  {
    title: "When You Feel Stuck After Loss",
    excerpt:
      "Feeling stuck does not mean you are failing to heal. It may mean that part of you still needs safety, understanding, or permission to move differently.",
    slug: "when-you-feel-stuck-after-loss",
    category: "Moving Forward",
    date: "Coming Soon",
  },
  {
    title: "The Difference Between Moving On and Moving Forward",
    excerpt:
      "Moving forward does not require leaving someone, something, or a former version of your life behind.",
    slug: "moving-on-vs-moving-forward",
    category: "Grief & Healing",
    date: "Coming Soon",
  },
  {
    title: "5 Signs You’re Ready for a New Beginning",
    excerpt:
      "A new beginning rarely arrives with complete certainty. Often, it begins with a quiet awareness that your current way of living no longer fits.",
    slug: "signs-you-are-ready-for-a-new-beginning",
    category: "New Beginnings",
    date: "Coming Soon",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#172033]">
      {/* Introduction */}
      <section className="px-6 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#315747]">
            The Becoming Journal
          </p>

          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
            Grounded reflections for the road forward.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#43506a]">
            Stories, thoughts, and practical guidance for navigating, major life disruption, identity shifts, personal growth, and the
            ongoing process of rebuilding your life to start again.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-[#223b30] px-7 py-10 text-[#f7f3ea] shadow-md sm:px-12 sm:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d8c9a8]">
              Featured reflection
            </p>

            <h2 className="mt-4 max-w-4xl font-serif text-3xl leading-tight sm:text-5xl">
              {posts[0].title}
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#e5dfd3]">
              {posts[0].excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/blog/${posts[0].slug}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#efe0bf] px-7 py-3 font-semibold text-[#223b30] transition hover:bg-[#e5d2aa]"
              >
                Read the Article →
              </Link>

              <span className="text-sm text-[#d8c9a8]">
                {posts[0].category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article collection */}
      <section className="border-t border-[#d8d1c3] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#315747]">
              Explore the journal
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Latest reflections
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {posts.slice(1).map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-3xl border border-[#d8d1c3] bg-[#ebe7de] px-7 py-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:px-9 sm:py-10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#315747]">
                  {post.category}
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-tight">
                  {post.title}
                </h3>

                <p className="mt-4 flex-1 text-base leading-7 text-[#43506a]">
                  {post.excerpt}
                </p>

                <div className="mt-7">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-[#223b30] underline decoration-[#223b30]/30 underline-offset-4 transition hover:decoration-[#223b30]"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching CTA */}
      <section className="bg-[#223b30] px-6 py-20 text-[#f7f3ea] sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d8c9a8]">
            Your becoming path starts here
          </p>

          <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            You don’t have to rebuild alone.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#e5dfd3]">
            Coaching offers a grounded place to process what has changed,
            reconnect with yourself, and begin creating an intentional path
            forward.
          </p>

          <Link
            href="/coaching"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#efe0bf] px-8 py-3 font-semibold text-[#223b30] transition hover:bg-[#e5d2aa]"
          >
            Explore Coaching →
          </Link>
        </div>
      </section>
    </main>
  );
}