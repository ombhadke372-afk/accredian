"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "1M+", label: "Learners Trained" },
  { value: "95%", label: "Completion Rate" },
  { value: "4.8★", label: "Average Rating" },
];

export default function Hero() {
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dots = dotsRef.current;
    if (!dots) return;
    const count = 12;
    dots.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("div");
      const size = Math.random() * 80 + 20;
      dot.className = "dot";
      dot.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%; top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 6}s;
        animation-duration: ${6 + Math.random() * 6}s;
        opacity: ${Math.random() * 0.12 + 0.03};
      `;
      dots.appendChild(dot);
    }
  }, []);

  return (
    <section className="hero-mesh min-h-screen flex flex-col justify-center pt-20">
      {/* Floating dots */}
      <div ref={dotsRef} className="floating-dots" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-[#00C2FF] rounded-full animate-pulse" />
              Trusted by Fortune 500 Companies
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Upskill Your{" "}
              <span className="relative">
                <span className="text-[#00C2FF]">Entire</span>
              </span>{" "}
              Workforce at Scale
            </h1>

            <p className="text-lg text-blue-100/80 leading-relaxed max-w-xl">
              Accredian Enterprise delivers world-class learning programs in AI, Data Science,
              Product Management, and more — tailored to your business goals and deployed seamlessly
              across your organization.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0066FF] px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Explore Programs
              </a>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className="bg-white/10 rounded-xl p-5 text-center hover:bg-white/15 transition-colors"
                      style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                    >
                      <div
                        className="text-3xl font-extrabold text-white mb-1"
                        style={{ fontFamily: "Sora, sans-serif" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-blue-200/80 text-xs font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["bg-purple-400", "bg-pink-400", "bg-yellow-400", "bg-green-400"].map((c, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white/30`} />
                      ))}
                    </div>
                    <p className="text-white/70 text-sm">
                      <span className="text-white font-semibold">2,400+</span> learners joined this month
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#00C2FF] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-bounce">
                🚀 AI-Powered
              </div>
            </div>
          </div>
        </div>

        {/* Mobile stats */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-white" style={{ fontFamily: "Sora, sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-blue-200/70 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave transition */}
      <div className="relative mt-auto">
        <svg viewBox="0 0 1440 80" className="w-full fill-white" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
