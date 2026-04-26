const footerLinks = {
  Solutions: ["Custom Programs", "Live Training", "Self-Paced Courses", "Certifications", "LMS Integration"],
  Programs: ["AI & Machine Learning", "Data Science", "Product Management", "Full Stack Dev", "Leadership"],
  Company: ["About Accredian", "Careers", "Blog", "Press Kit", "Contact Us"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR Compliance"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1E] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#0066FF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "Sora, sans-serif" }}>A</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "Sora, sans-serif" }}>
                Accredian <span className="text-[#00C2FF]">Enterprise</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering enterprises worldwide with cutting-edge learning solutions. Build
              future-ready teams with Accredian.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { name: "LinkedIn", icon: "in" },
                { name: "Twitter", icon: "𝕏" },
                { name: "YouTube", icon: "▶" },
                { name: "Instagram", icon: "◎" },
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-xs font-bold text-white hover:bg-[#0066FF] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            All systems operational
          </div>
          <p className="text-gray-600 text-xs">
            Made with ❤️ for enterprise learning
          </p>
        </div>
      </div>
    </footer>
  );
}
