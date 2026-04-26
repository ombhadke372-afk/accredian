"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Head of L&D, Infosys",
    avatar: "PS",
    color: "bg-purple-500",
    quote:
      "Accredian Enterprise transformed how we approach upskilling. Within 6 months, our data teams showed a measurable 40% improvement in analysis quality. The customization was unmatched.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "CHRO, HCL Technologies",
    avatar: "AM",
    color: "bg-blue-500",
    quote:
      "We deployed Accredian's AI program to 3,000+ engineers. The engagement rates were exceptional — 91% completion, which is nearly unheard of in corporate learning. Highly recommend.",
    rating: 5,
  },
  {
    name: "Sneha Rajan",
    role: "VP Talent, Wipro Digital",
    avatar: "SR",
    color: "bg-pink-500",
    quote:
      "The analytics dashboard alone is worth it. I can see exactly which teams are progressing, where the gaps are, and course-correct in real time. Our leadership visibility has never been better.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "CTO, Zomato",
    avatar: "RV",
    color: "bg-green-500",
    quote:
      "Fast-moving startups need learning partners that can keep up. Accredian built a custom program for us in under 2 weeks and deployed it across 4 offices seamlessly. Incredible execution.",
    rating: 5,
  },
  {
    name: "Meena Pillai",
    role: "Director HR, TCS",
    avatar: "MP",
    color: "bg-orange-500",
    quote:
      "Our NPS scores after the Accredian PM program went through the roof. Employees felt genuinely valued and invested in. It showed directly in our 6-month retention numbers.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));

  const next = () =>
    setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag mb-4">Testimonials</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Loved by{" "}
            <span className="text-[#0066FF]">Enterprise Leaders</span>
          </h2>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative">
            
            {/* Decorative quote mark (FIXED) */}
            <div className="absolute -top-5 left-10 text-8xl text-[#0066FF]/10 font-serif leading-none select-none">
              &ldquo;
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <p
              className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 relative z-10"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full ${t.color} text-white flex items-center justify-center font-bold text-sm`}
              >
                {t.avatar}
              </div>
              <div>
                <p
                  className="font-bold text-gray-900"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  {t.name}
                </p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-8 bg-[#0066FF]"
                        : "w-2 bg-gray-200 hover:bg-gray-300"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
                  aria-label="Next"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mini cards */}
        <div className="hidden md:flex justify-center gap-4 mt-8">
          {testimonials.map((test, i) => (
            <button
              key={test.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                i === active
                  ? "bg-[#0066FF] text-white shadow"
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full ${test.color} text-white flex items-center justify-center text-[10px] font-bold`}
              >
                {test.avatar[0]}
              </span>
              {test.name}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}