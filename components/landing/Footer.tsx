import { Container } from "@/components/ui/Container";

const footerLinks = {
  Product: ["Features", "Use Cases", "Pricing", "Integrations"],
  Resources: ["Blog", "Help Center", "Case Studies", "Changelog"],
  Company: ["About Us", "Careers", "Contact", "Privacy Policy"],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 pt-24 pb-8 overflow-hidden relative">
      <Container className="relative z-10 flex flex-col gap-20">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-6 pr-0 lg:pr-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-brutal border-2 border-gray-900">
                <span className="text-2xl font-black text-gray-900">B</span>
              </div>
              <span className="text-3xl font-black text-white tracking-tight">
                BioLinks
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mt-4 max-w-sm">
              The unfair advantage for creators and marketers. Own your real
              estate, measure every click, dominate your niche.
            </p>
            <div className="flex gap-4 mt-2">
              {["Twitter", "Instagram", "LinkedIn", "YouTube"].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 rounded-full border border-gray-800 bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-violet-600 hover:border-violet-600 transition-colors cursor-pointer"
                >
                  {/* Simplified generic icon for shape */}
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1 md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-5">
                <h4 className="text-white font-bold tracking-widest uppercase mb-2">
                  {title}
                </h4>
                <ul className="flex flex-col gap-3 text-gray-400">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-yellow-400 hover:underline transition-all"
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

        {/* Big Brand typography */}
        <div className="w-full border-t border-gray-900 pt-16 pb-8 flex flex-col items-center">
          <h1
            className="text-[12vw] font-black text-gray-900 leading-none select-none tracking-tighter"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
          >
            BIOLINKS
          </h1>
          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-600 font-medium">
            <p>© 2026 BioLinks Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300">
                Terms
              </a>
              <a href="#" className="hover:text-gray-300">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
