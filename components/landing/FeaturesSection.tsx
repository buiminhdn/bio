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
              <div className="aspect-square md:aspect-[4/3] rounded-3xl bg-violet-100 relative overflow-hidden shadow-brutal border-2 border-gray-900">
                <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden border-2 border-gray-900 flex flex-col">
                  {/* Mockup Header */}
                  <div className="h-12 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50/50">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  {/* Mockup Content */}
                  <img
                    src="https://picsum.photos/seed/feat1/600/500"
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
              <div className="grid grid-cols-4 gap-4 mt-4">
                {["Ig", "Yt", "Tk", "X", "Sp", "Li", "Pin", "Tw"].map(
                  (icon, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center font-bold text-gray-400 text-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors cursor-pointer shadow-brutal"
                    >
                      {icon}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-square rounded-full bg-gradient-to-tr from-green-200 to-yellow-100 relative p-8 shadow-brutal border-2 border-gray-900 flex items-center justify-center">
                <img
                  src="https://picsum.photos/seed/feat2social/500/500"
                  alt="Social connections"
                  className="w-[85%] h-[85%] object-cover rounded-full shadow-brutal border-4 border-gray-900"
                />
                {/* Mini floating avatars */}
                <img
                  src="https://picsum.photos/seed/p1/80/80"
                  className="absolute top-10 left-10 w-16 h-16 rounded-full border-2 border-gray-900 shadow-brutal animate-float-slow"
                  alt="social"
                />
                <img
                  src="https://picsum.photos/seed/p2/80/80"
                  className="absolute bottom-20 right-5 w-20 h-20 rounded-full border-2 border-gray-900 shadow-brutal animate-float"
                  alt="social"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
