
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#26382F]">

      {/* CONTACT INTRODUCTION */}
      <section className="px-6 pb-16 pt-36 md:px-16 md:pb-20 md:pt-40">

        <div className="mx-auto max-w-3xl">

          <div className="text-center">

            <p className="text-[0.8rem] font-bold uppercase tracking-[0.32em] text-[#445146]">
              Become an Untamed Rebuilder
            </p>

            <h1 className="mt-6 font-serif text-[2.7rem] leading-[1.15] tracking-tight text-[#26382F] md:text-[3.5rem]">
              Let&apos;s Start With a Conversation.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-[1.1rem] leading-[1.8] text-[#5D625A]">
              Whether you are curious about coaching, have a question,
              <br />
              or simply want to reach out,
                          let's connect.
            </p>

          </div>


          {/* CONTACT FORM */}
          <form
            action="https://formspree.io/f/xpqeqgdb"
            method="POST"
            className="mx-auto mt-12 max-w-2xl space-y-6 rounded-[28px] bg-[#26382F] p-7 shadow-lg shadow-[#26382F]/10 md:p-10"
          >

            {/* Update this URL to your live domain */}
            <input
              type="hidden"
              name="_redirect"
              value="https://mybecomingpath.com/contact-success"
            />

            {/* NAME */}
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium text-white/90"
              >
                Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                className="w-full rounded-xl bg-white px-4 py-4 text-[#26382F] outline-none focus:ring-2 focus:ring-[#D7E0D6]"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-white/90"
              >
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-xl bg-white px-4 py-4 text-[#26382F] outline-none focus:ring-2 focus:ring-[#D7E0D6]"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-white/90"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={6}
                required
                placeholder="Tell me a little about what you'd like to connect about..."
                className="w-full rounded-xl bg-white px-4 py-4 text-[#26382F] outline-none focus:ring-2 focus:ring-[#D7E0D6]"
              />
            </div>

            
{/* SUBMIT BUTTON */}
<div className="flex justify-center">
  <button
    type="submit"
    className="rounded-full bg-[#F4F1EA] px-9 py-4 font-semibold text-[#26382F] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
  >
    Send Message
  </button>
</div>

          </form>

        </div>
      </section>


      {/* COACHING CTA */}
      <section className="bg-[#F4F1EA] px-6 pb-16 md:px-16 md:pb-16">

        <div className="mx-auto max-w-4xl rounded-[32px] bg-[#405F6B] px-6 py-12 text-center md:px-14 md:py-16">

          <p className="text-[0.75rem] font-bold uppercase tracking-[0.3em] text-[#D7E0D6]">
            YOUR NEXT CHAPTER BEGINS HERE
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-[2.2rem] leading-[1.15] text-white md:text-[3rem]">
            Ready to Rediscover What&apos;s Next?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[1.05rem] leading-[1.8] text-[#F4F1EA]">
            You don&apos;t have to have everything figured out
            to begin. Let&apos;s explore where you are,
            <br /> where you want to go, and what&apos;s possible together.
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
