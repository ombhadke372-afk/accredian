export default function TrustBar() {
  const companies = [
    "Google", "Microsoft", "Amazon", "IBM", "Infosys", "Wipro",
    "TCS", "HCL", "Accenture", "Deloitte", "KPMG", "EY",
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-8">
          Trusted by teams at
        </p>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...companies, ...companies].map((company, i) => (
              <div
                key={i}
                className="inline-flex items-center mx-8 text-gray-300 font-bold text-lg hover:text-gray-500 transition-colors cursor-default"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                <span className="w-2 h-2 bg-blue-200 rounded-full mr-3" />
                {company}
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
