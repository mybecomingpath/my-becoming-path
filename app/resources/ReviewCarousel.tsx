"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    name: "R",
    title: "A Healing Journey Told Through Real Voices",
    text: `A beautifully crafted and deeply compassionate anthology. This book transforms the way we understand grief—honoring it as a powerful teacher rather than something to hide or “move past.” Each story is raw, heartfelt, and profoundly human, offering real insight into how healing unfolds in its own time. It’s comforting, validating, and genuinely empowering. A must-read for anyone navigating loss or supporting someone who is.`,
  },
  {
    name: "David N. Brim",
    title: "Grief as a Sacred Teacher: A Heartfelt and Transformative Read",
    text: `The Empowered Grief Journey is a beautifully written collection of personal stories that opened up grief in a whole new way for me. The writing reframes grief not as something to “get over,” but as a sacred teacher that opens the heart and breaks generational cycles. It is deeply emotional, beautifully written, and full of wisdom for anyone navigating loss or seeking a more compassionate way forward.`,
  },
  {
    name: "William Green",
    title: "Grief Empowerment and Healing",
    text: `There are so many common themes in this book and at the same time a seemingly infinite number of circumstances and types of grief explored. One nearly universal theme is the loss of love and loved ones. This is one of many gems melded together in this anthology. My hope is that this book will shine brightly on the lives of anyone who picks it up in a time of grief.`,
  },
  {
    name: "rina_lei",
    title: "Spark of Hope",
    text: `Grief crosses all of our paths at the most unexpected points of our lives, until the day we move on. The stories and courage of these authors and their experiences brought tears to my eyes. The strength they found to continue brings hope and encouragement. This is where we find the spark of hope to continue on.`,
  },
  {
    name: "Tracy Oeser",
    title: "You Are Not Alone in Your Grief",
    text: `This book is a must-have if you are trying to navigate grief. This anthology is a great example of how different types of loss bring about different grief processes. Everyone is different. Thank you, Chris, for taking the opportunity to highlight this, and thank you to all the writers for sharing a piece of your heart.`,
  },
];

export default function ReviewCarousel() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentReview((current) => (current + 1) % reviews.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const previousReview = () => {
    setCurrentReview(
      (current) => (current - 1 + reviews.length) % reviews.length
    );
  };

  const nextReview = () => {
    setCurrentReview((current) => (current + 1) % reviews.length);
  };

  const review = reviews[currentReview];

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div
        className="rounded-3xl border border-[#d8d1c3] bg-[#ebe7de] px-7 py-9 text-left shadow-sm sm:px-12 sm:py-12"
        aria-live="polite"
      >
        <div
          className="text-xl tracking-[0.12em] text-[#c8903d]"
          aria-label="5 out of 5 stars"
        >
          ★★★★★
        </div>

        <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#172033]">
          {review.title}
        </h3>

        <blockquote className="mt-5 text-lg leading-8 text-[#34435a]">
          “{review.text}”
        </blockquote>

        <p className="mt-6 font-semibold text-[#223b30]">— {review.name}</p>
      </div>

      <div className="mt-7 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={previousReview}
          aria-label="Show previous review"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#223b30]/25 bg-white text-xl text-[#223b30] transition hover:bg-[#efe0bf] focus:outline-none focus:ring-2 focus:ring-[#223b30]"
        >
          ←
        </button>

        <div className="flex gap-2" aria-label="Review navigation">
          {reviews.map((item, index) => (
            <button
              key={`${item.name}-${item.title}`}
              type="button"
              onClick={() => setCurrentReview(index)}
              aria-label={`Show review ${index + 1}`}
              aria-current={index === currentReview ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all ${
                index === currentReview
                  ? "w-8 bg-[#223b30]"
                  : "w-2.5 bg-[#223b30]/25 hover:bg-[#223b30]/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextReview}
          aria-label="Show next review"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#223b30]/25 bg-white text-xl text-[#223b30] transition hover:bg-[#efe0bf] focus:outline-none focus:ring-2 focus:ring-[#223b30]"
        >
          →
        </button>
      </div>
    </div>
  );
}