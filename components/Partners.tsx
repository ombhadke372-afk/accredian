"use client";

import { useState } from "react";

const partners = [
  { name: "Google", domain: "google.com", type: "Technology" },
  { name: "Microsoft", domain: "microsoft.com", type: "Technology" },
  { name: "Amazon", domain: "amazon.com", type: "Cloud" },
  { name: "IBM", domain: "ibm.com", type: "Technology" },
  { name: "Infosys", domain: "infosys.com", type: "IT Services" },
  { name: "Wipro", domain: "wipro.com", type: "IT Services" },
  { name: "TCS", domain: "tcs.com", type: "IT Services" },
  { name: "Accenture", domain: "accenture.com", type: "Consulting" },
  { name: "Deloitte", domain: "deloitte.com", type: "Consulting" },
  { name: "Coursera", domain: "coursera.org", type: "EdTech" },
  { name: "LinkedIn", domain: "linkedin.com", type: "Professional" },
  { name: "HCL", domain: "hcltech.com", type: "IT Services" },
];

// Use your public key (safe for client-side)
const LOGO_DEV_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_LOGO_DEV_KEY || "pk_dPylRidRRqOGZCpPVaxDzQ";

function getSources(domain: string) {
  return [
    // 1. Logo.dev – high-quality logos (using public key)
    `https://img.logo.dev/${domain}?token=${LOGO_DEV_PUBLIC_KEY}`,
    // 2. Clearbit – fallback
    `https://logo.clearbit.com/${domain}`,
    // 3. DuckDuckGo favicon – returns 404 if missing
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
    // 4. Twenty.com – modern favicon service
    `https://favicon.twenty.com/${domain}`,
  ];
}

function PartnerLogo({ partner }: { partner: typeof partners[0] }) {
  const sources = getSources(partner.domain);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

  const handleError = () => {
    if (sourceIndex + 1 < sources.length) {
      setSourceIndex((i) => i + 1);
    } else {
      setAllFailed(true);
    }
  };

  return (
    <div className="group flex flex-col items-center justify-center gap-3 bg-white border border-gray-100 rounded-2xl p-6 card-hover shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300">
      <div className="w-14 h-14 flex items-center justify-center">
        {!allFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={sourceIndex}
            src={sources[sourceIndex]}
            alt={`${partner.name} logo`}
            width={56}
            height={56}
            className="object-contain w-14 h-14 grayscale group-hover:grayscale-0 transition-all duration-300"
            onError={handleError}
          />
        ) : (
          <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
            <span
              className="text-[#0066FF] font-black text-lg"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              {partner.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      <div className="text-center">
        <p className="text-xs font-semibold text-gray-700 group-hover:text-[#0066FF] transition-colors">
          {partner.name}
        </p>
        <p className="text-[10px] text-gray-400 mt-0.5">{partner.type}</p>
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag mb-4">Our Network</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Backed by the{" "}
            <span className="text-[#0066FF]">Best in the World</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            Our programs are co-designed with top technology companies,
            consulting giants, and industry bodies to ensure unmatched quality
            and real-world relevance.
          </p>
        </div>

        {/* Partner logo grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} partner={partner} />
          ))}
        </div>

        {/* Accreditation banner */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: "🎓",
              title: "University-Backed Credentials",
              desc: "Partner with 30+ top universities for co-branded certificates.",
            },
            {
              icon: "🛡️",
              title: "ISO Certified Quality",
              desc: "ISO 9001:2015 certified — every program meets global quality standards.",
            },
            {
              icon: "🌍",
              title: "Global Delivery Network",
              desc: "Programs delivered in 15+ languages across 40+ countries.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100"
            >
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div>
                <h4
                  className="text-sm font-bold text-gray-900 mb-1"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}