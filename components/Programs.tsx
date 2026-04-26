"use client";

import { useState } from "react";

const categories = ["All", "AI & ML", "Data Science", "Product", "Tech", "Leadership"];

const programs = [
  {
    category: "AI & ML",
    title: "Executive Program in AI & Machine Learning",
    duration: "6 Months",
    format: "Live + Self-Paced",
    level: "Advanced",
    tag: "Most Popular",
    tagColor: "bg-blue-100 text-blue-700",
    color: "border-t-4 border-t-[#0066FF]",
    icon: "🤖",
    skills: ["Neural Networks", "LLMs", "MLOps", "GenAI"],
  },
  {
    category: "Data Science",
    title: "Data Science & Analytics for Business Leaders",
    duration: "4 Months",
    format: "Self-Paced",
    level: "Intermediate",
    tag: "High Demand",
    tagColor: "bg-green-100 text-green-700",
    color: "border-t-4 border-t-green-500",
    icon: "📊",
    skills: ["Python", "SQL", "Tableau", "Statistics"],
  },
  {
    category: "Product",
    title: "Product Management Professional Certificate",
    duration: "5 Months",
    format: "Live + Workshops",
    level: "Intermediate",
    tag: "New Batch",
    tagColor: "bg-purple-100 text-purple-700",
    color: "border-t-4 border-t-purple-500",
    icon: "🎯",
    skills: ["Roadmapping", "OKRs", "User Research", "Agile"],
  },
  {
    category: "Tech",
    title: "Full Stack Engineering Bootcamp",
    duration: "3 Months",
    format: "Live + Projects",
    level: "Beginner to Advanced",
    tag: "Fast Track",
    tagColor: "bg-orange-100 text-orange-700",
    color: "border-t-4 border-t-orange-500",
    icon: "💻",
    skills: ["React", "Node.js", "AWS", "DevOps"],
  },
  {
    category: "Leadership",
    title: "Strategic Leadership & Innovation Program",
    duration: "8 Weeks",
    format: "Live Cohort",
    level: "Senior",
    tag: "C-Suite",
    tagColor: "bg-red-100 text-red-700",
    color: "border-t-4 border-t-red-500",
    icon: "🏆",
    skills: ["Strategy", "Innovation", "Change Mgmt", "OKRs"],
  },
  {
    category: "AI & ML",
    title: "Generative AI for Enterprises",
    duration: "6 Weeks",
    format: "Live Workshop",
    level: "Intermediate",
    tag: "Trending",
    tagColor: "bg-cyan-100 text-cyan-700",
    color: "border-t-4 border-t-cyan-500",
    icon: "✨",
    skills: ["ChatGPT", "Prompt Eng.", "RAG", "Copilots"],
  },
];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-tag mb-4">Our Programs</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            World-Class Programs,{" "}
            <span className="text-[#0066FF]">Built for Business</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            Choose from 50+ programs across domains. All delivered by top practitioners and
            designed for real-world impact.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#0066FF] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prog) => (
            <div
              key={prog.title}
              className={`bg-white rounded-2xl shadow-sm border border-gray-100 ${prog.color} overflow-hidden card-hover`}
            >
              <div className="p-6">
                {/* Header row */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{prog.icon}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${prog.tagColor}`}>
                    {prog.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold text-gray-900 mb-3 leading-snug"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  {prog.title}
                </h3>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {prog.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                    </svg>
                    {prog.format}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {prog.level}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {prog.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-50 text-[#0066FF] text-xs px-2.5 py-1 rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="block text-center btn-outline py-2.5 text-xs rounded-lg w-full"
                >
                  Request Enterprise Pricing
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">
            Don&apos;t see what you&apos;re looking for? We build custom programs too.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
