import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b-2 border-gray-900">
      <Container>
        {/* Added pb-5 to compensate for bottom shadows on buttons */}
        <div className="flex items-center justify-between pt-4 pb-5">
          {/* Logo */}
          <a
            href="/"
            className="text-lg font-black text-gray-900 flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-yellow-300 rounded-lg border-2 border-gray-900 flex items-center justify-center shadow-brutal mb-1.5 mr-0.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            BioLinks
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Features", href: "#features" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:flex">
              Log In
            </Button>
            <div className="mb-1.5 mr-1.5">
              <Button variant="primary">
                Get Started Free
                <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
