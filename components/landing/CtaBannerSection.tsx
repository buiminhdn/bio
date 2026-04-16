import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaBannerSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="relative bg-violet-600 rounded-[3rem] p-10 md:p-20 overflow-hidden shadow-2xl border border-violet-500 card-3d">
          {/* Internal Glows & Textures */}
          <div className="absolute -top-[50%] -right-[20%] w-[80%] h-[150%] bg-yellow-400 blur-[150px] opacity-40 mix-blend-overlay"></div>
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#fff 2px, transparent 2px)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          <div className="relative z-10 flex flex-col items-center text-center gap-10">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight max-w-4xl text-shadow">
              Ready to monopolize <br className="hidden md:block" /> your
              attention?
            </h2>

            <p className="text-xl md:text-2xl text-violet-100 font-medium max-w-2xl">
              Takes literal seconds to create. Looks amazing. And gives you the
              data to multiply your revenue.
            </p>

            <div className="mt-8 relative z-10">
              <Button
                variant="primary"
                className="px-12 py-5 bg-yellow-400 text-gray-900 rounded-3xl font-black text-2xl hover:bg-yellow-300 transition-colors shadow-brutal flex items-center justify-center gap-4 group"
              >
                Launch Your Profile
                <svg
                  className="w-8 h-8 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Button>
              {/* Flairs around button */}
              <div className="absolute -top-8 -left-10 text-4xl animate-bounce">
                🔥
              </div>
              <div className="absolute -bottom-5 -right-8 text-4xl animate-pulse">
                💸
              </div>
            </div>

            <p className="text-sm font-semibold text-violet-200 mt-2 uppercase tracking-widest">
              No credit card • Free forever tier
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
