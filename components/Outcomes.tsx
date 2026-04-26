"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Enterprise Clients", icon: "🏢" },
  { value: 1, suffix: "M+", label: "Learners Trained", icon: "👥" },
  { value: 95, suffix: "%", label: "Avg. Completion Rate", icon: "✅" },
  { value: 4.8, suffix: "★", label: "Learner Satisfaction", icon: "⭐" },
  { value: 3, suffix: "x", label: "Average Productivity Gain", icon: "📈" },
  { value: 78, suffix: "%", label: "Promoted Within 1 Year", icon: "🚀" },
];

function useCountUp(target: number, duration: number = 2000, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, animate }: { stat: typeof stats[0]; animate: boolean }) {
  const count = useCountUp(stat.value, 1800, animate);
  const display = Number.isInteger(stat.value) ? Math.round(count) : count.toFixed(1);

  return (
    <div className="text-center group">
      <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-[#0066FF] transition-colors duration-300 group-hover:scale-110 transform">
        {stat.icon}
      </div>
      <div
        className="stat-number text-4xl lg:text-5xl font-extrabold mb-2"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        {display}{stat.suffix}
      </div>
      <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
    </div>
  );
}

export default function Outcomes() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="outcomes" className="py-24 bg-[#0A0F1E] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00C2FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Proven Impact
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Numbers That{" "}
            <span className="text-[#00C2FF]">Speak for Themselves</span>
          </h2>
          <p className="mt-5 text-lg text-blue-200/70">
            Real outcomes from real enterprises. Here&apos;s what Accredian delivers.
          </p>
        </div>

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={animate} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-20 bg-gradient-to-r from-[#0066FF] to-[#00C2FF] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Ready to transform your workforce?
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Join 500+ enterprises already building future-ready teams with Accredian.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-[#0066FF] px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
          >
            Book a Free Demo →
          </a>
        </div>
      </div>
    </section>
  );
}
