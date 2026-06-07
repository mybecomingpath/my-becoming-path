import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <main className="min-h-screen bg-[#26382F] px-6 pt-40 pb-20 text-[#F4F1EA]">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.38em] text-[#EFE0C3]/80">
          Message Sent
        </p>

        <h1 className="font-serif text-5xl leading-[1.08] md:text-6xl">
          Thank you for reaching out.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#D8D0C5]">
          Your message has been received. I’ll read it and get back to you as
          soon as I can.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-[#EFE0C3] px-8 py-4 font-semibold text-[#26382F] transition hover:bg-white"
          >
            Return Home
          </Link>

          <Link
            href="/book"
            className="rounded-full border border-[#EFE0C3]/40 px-8 py-4 font-semibold text-[#EFE0C3] transition hover:bg-[#EFE0C3] hover:text-[#26382F]"
          >
            Book a Free Clarity Call
          </Link>
        </div>
      </section>
    </main>
  );
}