import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative background lines */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      ></div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-24">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <Badge variant="violet">Core Capabilities</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Not just links. <br /> A complete{" "}
              <span className="text-violet-600">engine.</span>
            </h2>
          </div>

          {/* Feature 1: Left Text, Right Image Breakout */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="w-16 h-16 bg-yellow-300 rounded-3xl blob-shape-2 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Curate products into beautiful categories
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Why drop a messy list of text links? Build a visually stunning
                storefront. Organize by "Tech Setup", "Skincare", or "Books" and
                let visitors browse visually.
              </p>
              <ul className="flex flex-col gap-3 mt-2">
                {[
                  "Drag & drop sorting",
                  "Automatic thumbnail fetching",
                  "Custom category labels",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-square md:aspect-video rounded-3xl bg-violet-100 relative overflow-hidden shadow-brutal border-2 border-gray-900">
                <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden border-2 border-gray-900 flex flex-col">
                  {/* Mockup Header */}
                  <div className="h-12 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50/50">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  {/* Mockup Content */}
                  <img
                    src="/images/influencer3.jpg"
                    alt="UI Showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating pill */}
                <div className="absolute -bottom-4 -left-4 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-brutal border-2 border-gray-900 font-bold flex items-center gap-3 animate-float">
                  <span className="text-yellow-400 text-xl">✦</span>
                  Conversion optimized
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Right Text, Left Image Breakout */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="w-16 h-16 bg-green-300 rounded-3xl blob-shape-1 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Connect every platform effortlessly
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your audience lives everywhere. Bring them to one central hub.
                From YouTube to TikTok to your preferred newsletter provider.
              </p>
              <div className="flex flex-col border-4 border-gray-900 rounded-2xl overflow-hidden shadow-brutal mt-6 bg-white w-full max-w-sm">
                <div className="bg-gray-50 border-b-4 border-gray-900 px-4 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse border border-gray-900"></span>
                    <span className="font-black text-sm text-gray-900">Live Audience</span>
                  </div>
                  <span className="bg-yellow-300 text-gray-900 text-xs px-2 py-0.5 rounded-md border-2 border-gray-900 font-bold shadow-sm">
                    Today
                  </span>
                </div>
                <div className="p-4 flex flex-col gap-4">
                  {[
                    { img: "/images/user1.jpg", name: "Alex Rivers", source: "TikTok" },
                    { img: "/images/user2.jpg", name: "Jordan Lee", source: "Instagram" },
                    { img: "/images/user4.jpg", name: "Casey Smith", source: "Newsletter" }
                  ].map((u, i) => (
                    <div key={i} className="flex items-center justify-between pb-3 border-b-2 border-gray-100 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <img src={u.img} className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover border-2 border-gray-900" alt={u.name} />
                        <div className="flex flex-col">
                          <span className="font-bold text-sm text-gray-900">{u.name}</span>
                          <span className="text-xs text-gray-500 font-medium">via {u.source}</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center bg-violet-100 border-2 border-gray-900 rounded-lg shadow-brutal-sm">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative min-h-96 flex items-center justify-center">
              {/* Central Hub */}
              <div className="relative z-30 w-32 h-32 bg-white rounded-full border-8 border-gray-900 shadow-brutal flex flex-col items-center justify-center animate-float">
                <span className="text-3xl font-black text-gray-900 tracking-tighter">Bio.</span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Hub</span>
              </div>

              {/* Connecting dashed lines from center to icons */}
              <svg className="absolute inset-0 w-full h-full z-10" style={{ pointerEvents: "none" }}>
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#111827" strokeWidth="4" strokeDasharray="8 8" className="opacity-40 animate-pulse" />
                <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="#111827" strokeWidth="4" strokeDasharray="8 8" className="opacity-40 animate-pulse" style={{ animationDelay: "0.2s" }} />
                <line x1="50%" y1="50%" x2="15%" y2="60%" stroke="#111827" strokeWidth="4" strokeDasharray="8 8" className="opacity-40 animate-pulse" style={{ animationDelay: "0.4s" }} />
                <line x1="50%" y1="50%" x2="85%" y2="70%" stroke="#111827" strokeWidth="4" strokeDasharray="8 8" className="opacity-40 animate-pulse" style={{ animationDelay: "0.6s" }} />
                <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#111827" strokeWidth="4" strokeDasharray="8 8" className="opacity-40 animate-pulse" style={{ animationDelay: "0.8s" }} />
              </svg>

              {/* Floating Social Icons (Aligned to SVG endpoints) */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-pink-100 rounded-2xl border-4 border-gray-900 shadow-brutal flex items-center justify-center animate-float-slow z-20"
                style={{ top: "20%", left: "20%" }}
              >
                <img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
              </div>
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-100 rounded-3xl border-4 border-gray-900 shadow-brutal flex items-center justify-center animate-float-delayed z-20"
                style={{ top: "25%", left: "80%" }}
              >
                <img src="/icons/youtube.svg" alt="YouTube" className="w-10 h-10 hover:scale-110 transition-transform cursor-pointer" />
              </div>
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-900 rounded-full border-4 border-gray-900 shadow-brutal flex items-center justify-center animate-float z-20 hover:bg-gray-800 transition-colors cursor-pointer"
                style={{ top: "60%", left: "15%" }}
              >
                <img src="/icons/tiktok.svg" alt="TikTok" className="w-6 h-6 invert" />
              </div>
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-100 rounded-2xl border-4 border-gray-900 shadow-brutal flex items-center justify-center animate-float-slow z-20"
                style={{ top: "70%", left: "85%" }}
              >
                <img src="/icons/facebook.svg" alt="Facebook" className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
              </div>
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-orange-100 rounded-2xl border-4 border-gray-900 shadow-brutal flex items-center justify-center animate-float-delayed z-20"
                style={{ top: "85%", left: "50%" }}
              >
                <img src="/icons/shopee.svg" alt="Shopee" className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
