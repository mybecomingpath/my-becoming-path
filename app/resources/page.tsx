import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "./ReviewCarousel";

const barnesAndNobleUrl =
  "https://www.barnesandnoble.com/w/the-empowered-grief-journey-chris-mamone/1149278503";

export const metadata = {
  title: "Resources | My Becoming Path",
  description:
    "Explore The Empowered Grief Journey and resources for navigating grief, identity shifts, healing, and rebuilding after life changes.",
};

export default function ResourcesPage() {
  return (
    <main className="flex-1 bg-[#f5f2eb] text-[#172033]">
            {/* Featured book */}
     {/* Featured book */}
<section className="px-6 pb-16 pt-40 sm:pb-24 sm:pt-48">
  <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(340px,425px)_1fr] lg:gap-16">
    {/* Book cover */}
    <div className="mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
        <Image
          src="/images/empowered-grief-journey-cover.jpg"
          alt="Cover of The Empowered Grief Journey by Chris Mamone"
          width={640}
          height={1024}
          className="h-auto w-full"
          priority
        />
      </div>
    </div>

    {/* Book details */}
    <div className="pt-2">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315747]">
        Featured book
      </p>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
        The Empowered Grief Journey
      </h1>

      <p className="mt-3 text-xl font-medium text-[#43506a]">
        23 Stories of Grief That Carved a New Path Forward
      </p>

      <div className="mt-7 space-y-5 text-lg leading-8 text-[#303a4d]">
        <p>
          <em>The Empowered Grief Journey</em> brings together 23 deeply
          personal stories exploring loss, healing, identity, and the
          difficult work of rebuilding after life changes everything. Each
          contributor shares an honest path through grief without minimizing
          what was lost or pretending healing happens in a straight line.
        </p>

        <p>
          The book was created to help readers feel less alone and to remind
          them that moving forward does not require forgetting.
        </p>
      </div>

      {/* Direct-order highlight */}
      <div className="mt-8 rounded-2xl bg-[#223b30] px-6 py-7 text-[#f7f3ea] shadow-md">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d8c9a8]">
          Every Signed Copy Includes:
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-white">
          A  handwritten note, bookmark, and mini stuffed lion
        </h2>

        <p className="mt-3 leading-7 text-[#e7e1d5]">
          Each copy is personally signed by Chris before it is carefully packaged and mailed. Orders are shipped next business day and include tracking information.
        </p>

        <div className="mt-6 grid gap-3 text-[#223b30] sm:grid-cols-3">
          <div className="rounded-xl bg-[#efe0bf] px-4 py-4">
            <span className="block font-bold">Book</span>
            <span className="mt-1 block">$15.99</span>
          </div>

          <div className="rounded-xl bg-[#efe0bf] px-4 py-4">
            <span className="block font-bold">Flat-Rate Shipping</span>
            <span className="mt-1 block">$10.00</span>
          </div>

          <div className="rounded-xl bg-[#efe0bf] px-4 py-4">
            <span className="block font-bold">Usually Ships</span>
            <span className="mt-1 block">2-4 Business Days</span>
          </div>
        </div>
      </div>

      {/* Purchase buttons */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#c8903d] px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-[#ad772d] focus:outline-none focus:ring-2 focus:ring-[#c8903d] focus:ring-offset-2"
        >
          Order Your Signed Copy
        </Link>

        <a
          href={barnesAndNobleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#223b30]/30 bg-white px-7 py-3 font-semibold text-[#223b30] transition hover:bg-[#efe8da] focus:outline-none focus:ring-2 focus:ring-[#223b30] focus:ring-offset-2"
        >
          Buy from Barnes &amp; Noble
        </a>
      </div>

      <p className="mt-4 text-sm leading-6 text-[#667085]">
        Secure direct checkout will be added once the Stripe payment page is
        ready.
      </p>
    </div>
  </div>
</section>

      {/* Reviews placeholder */}
      <section className="border-y border-[#d8d1c3] bg-[#f5f2eb] px-6 py-16 sm:py-20">
  <div className="mx-auto max-w-5xl text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315747]">
      Readers Share Their Experience
    </p>

    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
      Words from readers
    </h2>

   <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#43506a]">
  Readers share how the stories in this collection helped them feel seen,
  understood, and less alone in their grief.
</p>

<ReviewCarousel />
  </div>
</section>

      {/* Author section */}
<section className="bg-[#f5f2eb] px-6 py-16 sm:py-24">
  <div className="mx-auto max-w-4xl rounded-3xl border border-[#d8d1c3] bg-[#ebe7de] px-7 py-10 shadow-sm sm:px-12 sm:py-14">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315747]">
      A note from Chris
    </p>

    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033]">
      This book grew from lived experience
    </h2>

    <div className="mt-5 space-y-4 text-lg leading-8 text-[#34435a]">
      <p>
        Losing my son Caden to stillbirth changed my life in ways I could never
        have prepared for. The work of grieving, rebuilding, and finding myself
        again became a deeply personal journey that inspired me to give others
        the same support.
      </p>

      <p>
        I created <em>The Empowered Grief Journey</em> to make room for stories
        of loss, healing, and rebuilding, and to remind others that they do not
        have to navigate life after profound change alone.
      </p>
    </div>

    <Link
      href="/about"
      className="mt-7 inline-flex font-semibold text-[#223b30] underline decoration-[#223b30]/30 underline-offset-4 transition hover:decoration-[#223b30]"
    >
      Learn more about Chris
    </Link>
  </div>
</section>

     {/* Coaching CTA */}
<section className="bg-[#223b30] px-6 py-20 text-[#f7f3ea] sm:py-24">
  <div className="mx-auto max-w-4xl text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d8c9a8]">
      Your becoming path starts here
    </p>

    <h2 className="mt-4 font-serif text-4xl tracking-tight text-white sm:text-5xl">
      Let’s walk this path together.
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#e5dfd3]">
      If you’re navigating grief, major change, or a season of rebuilding,
      coaching offers a grounded place to find clarity, support, and direction.
    </p>

    <Link
      href="/coaching"
      className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#efe0bf] px-8 py-3 font-semibold text-[#223b30] shadow-sm transition hover:bg-[#e5d2aa] focus:outline-none focus:ring-2 focus:ring-[#efe0bf] focus:ring-offset-2 focus:ring-offset-[#223b30]"
    >
      Explore Coaching →
    </Link>
  </div>
</section>
    </main>
  );
}