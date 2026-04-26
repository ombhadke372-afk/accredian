const features = [
  {
    icon: "🎯",
    title: "Customized Learning Paths",
    description:
      "Tailor every program to your company's goals, industry, and skill gaps. From onboarding to advanced upskilling — we build it around you.",
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
  },
  {
    icon: "🤖",
    title: "AI-Powered Personalization",
    description:
      "Adaptive learning algorithms adjust content difficulty and pacing for each employee, maximizing engagement and knowledge retention.",
    color: "from-cyan-50 to-blue-50",
    border: "border-cyan-100",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics Dashboard",
    description:
      "Track learning progress, completion rates, skill scores, and ROI across your entire organization in one powerful dashboard.",
    color: "from-purple-50 to-pink-50",
    border: "border-purple-100",
  },
  {
    icon: "🏆",
    title: "Industry-Recognized Certificates",
    description:
      "Employees earn globally recognized certificates from Accredian and top university partners, boosting motivation and retention.",
    color: "from-yellow-50 to-orange-50",
    border: "border-yellow-100",
  },
  {
    icon: "👨‍🏫",
    title: "Expert-Led Live Sessions",
    description:
      "Live sessions with industry practitioners and Ivy-league alumni mentors ensure real-world applicability and direct interaction.",
    color: "from-green-50 to-teal-50",
    border: "border-green-100",
  },
  {
    icon: "🔗",
    title: "Seamless LMS Integration",
    description:
      "Plug directly into your existing HR and LMS systems — SAP SuccessFactors, Workday, Cornerstone, and more — with zero friction.",
    color: "from-rose-50 to-red-50",
    border: "border-rose-100",
  },
];

export default function WhyAccredian() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag mb-4">Why Accredian</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Everything Your Enterprise Needs to
            <span className="text-[#0066FF]"> Grow Smarter</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            From custom curricula to deep analytics, Accredian Enterprise is the complete platform
            for building future-ready teams at scale.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`bg-gradient-to-br ${feat.color} border ${feat.border} rounded-2xl p-7 card-hover`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feat.icon}</div>
              <h3
                className="text-lg font-bold text-gray-900 mb-3"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                {feat.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
