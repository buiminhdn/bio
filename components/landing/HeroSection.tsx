import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-mesh-light flex items-center pt-16 pb-20 overflow-hidden noise-bg">
      {/* Decorative oversized background elements */}
      <div className="absolute top-20 -right-1/4 md:-right-32 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-30 mix-blend-multiply animate-float-slow"></div>
      <div className="absolute bottom-10 -left-1/4 md:-left-32 w-full max-w-2xl aspect-square bg-violet-300 rounded-full blur-3xl opacity-30 mix-blend-multiply animate-float-delayed"></div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Typography & CTA */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-start gap-8 z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-gray-800 uppercase tracking-widest">
                AI Powered Profiles
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight">
              Own your <br className="hidden sm:block" />
              <span className="inline-block bg-yellow-300 border-4 border-gray-900 px-4 py-1 mt-2 mb-2 shadow-brutal -rotate-1">
                digital
              </span><br />
              real estate.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg font-medium">
              Ditch the generic link-in-bio. Build a curated, trackable, and
              stunning showcase for your affiliate products that actually
              converts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Input
                type="text"
                placeholder="biolin.ks/yourname"
                className="w-full sm:w-72"
              />
              <Button
                variant="primary"
                className="text-lg px-8 py-4 gap-2 whitespace-nowrap rounded-3xl"
              >
                Claim It
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`/images/influencer${i}.jpg`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-500">
                Join <span className="text-gray-900">10,000+</span> creators
              </p>
            </div>
          </div>

          {/* Right: Dynamic Composition */}
          <div className="col-span-1 lg:col-span-6 relative h-96 md:h-128 w-full hidden md:block mt-12 lg:mt-0">
            {/* Center phone-like main card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-128 bg-white rounded-3xl shadow-brutal border-8 border-gray-900 z-20 overflow-hidden animate-float">
              <div className="w-full h-full bg-gray-50 flex flex-col">
                <img
                  src="/images/cover1.png"
                  className="w-full h-40 object-cover"
                  alt="Profile Header"
                />
                <div className="-mt-10 mx-auto w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-md bg-white">
                  <img
                    src="/images/user1.jpg"
                    className="w-full h-full object-cover"
                    alt="Avatar"
                  />
                </div>
                <div className="text-center px-4 mt-2">
                  <h3 className="font-bold text-gray-900 text-lg">
                    @buiminhdn
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Design | Lifestyle | Tech
                  </p>
                </div>
                <div className="flex-1 overflow-hidden px-4 mt-4 space-y-3">
                  <div className="h-16 w-full bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-3 gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg"></div>
                    <div className="flex-1 h-3 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="h-16 w-full bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-3 gap-3">
                    <div className="w-10 h-10 bg-violet-100 rounded-lg"></div>
                    <div className="flex-1 h-3 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating element 1: Notification/Stat pop */}
            <div className="absolute top-1/4 left-0 bg-white rounded-2xl p-4 shadow-brutal z-30 animate-float-delayed -rotate-6 border-2 border-gray-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">
                    Revenue
                  </p>
                  <p className="text-lg font-extrabold text-gray-900">
                    +$1,240
                  </p>
                </div>
              </div>
            </div>

            {/* Floating element 2: Product Image */}
            <div className="absolute bottom-1/4 right-0 w-44 rounded-2xl overflow-hidden shadow-2xl z-30 animate-float-slow rotate-6 ring-4 ring-white">
              <img
                src="/images/product1.png"
                className="w-full h-auto object-cover"
                alt="Product overlay"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 flex justify-between items-center">
                <span className="text-xs font-bold truncate">Cute Teddy Bear</span>
                <span className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs">
                  ↗
                </span>
              </div>
            </div>

            {/* Decorative blob shape behind */}
            <div className="absolute top-1/3 right-12 w-64 h-64 bg-yellow-300 blob-shape-1 z-10 opacity-60"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
