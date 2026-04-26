const steps = [
  {
    number: "01",
    title: "Discovery & Needs Assessment",
    description:
      "Our enterprise consultants work with your L&D and HR teams to map skill gaps, define learning objectives, and understand your organizational structure.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Custom Program Design",
    description:
      "We co-create a tailored learning roadmap — blending live sessions, self-paced modules, and hands-on projects aligned to your business goals.",
    icon: "🗺️",
  },
  {
    number: "03",
    title: "Seamless Deployment",
    description:
      "Programs are deployed on your existing LMS or via our white-labeled platform. Onboarding takes less than a week with dedicated support.",
    icon: "🚀",
  },
  {
    number: "04",
    title: "Track, Measure & Iterate",
    description:
      "Real-time dashboards surface completion rates, skill scores, and business impact. We iterate programs based on data and feedback continuously.",
    icon: "📈",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag mb-4">The Process</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            From <span className="text-[#0066FF]">Day One</span> to{" "}
            <span className="text-[#0066FF]">Full Scale</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            A simple, proven process that gets your teams learning within days — not months.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 mx-32 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative z-10 flex flex-col items-center text-center group">
                {/* Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0066FF] shadow-lg flex items-center justify-center mb-6 group-hover:bg-[#0066FF] transition-colors duration-300">
                  <span className="text-2xl">{step.icon}</span>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover w-full">
                  <div
                    className="text-[#0066FF] text-xs font-black uppercase tracking-widest mb-2"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    Step {step.number}
                  </div>
                  <h3
                    className="text-base font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm">
            Start Your Enterprise Journey
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
