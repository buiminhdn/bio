import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export function TrackingHighlightSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#fdfbf7]">
      {/* Brutalist accents instead of glow */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400 rounded-full border-2 border-gray-900 shadow-brutal opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-violet-400 rounded-full border-2 border-gray-900 shadow-brutal opacity-20 -translate-x-1/2"></div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Text */}
          <div className="w-full lg:w-5/12 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gray-900 bg-white w-fit shadow-brutal">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span className="text-xs font-bold text-gray-900 tracking-widest uppercase">
                Smart Tracking
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
              Absolute <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                visibility.
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              We intercept every click with a server-side redirect before
              sending users to your affiliate URL. No dropped analytics. No
              ad-blocker interference.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <Card className="p-6">
                <span className="text-4xl font-black text-gray-900 mb-2 block">
                  100%
                </span>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Click Logging
                </span>
              </Card>
              <Card className="p-6">
                <span className="text-4xl font-black text-gray-900 mb-2 block">
                  &lt;20<span className="text-2xl">ms</span>
                </span>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Redirect Time
                </span>
              </Card>
            </div>
          </div>

          {/* Right Exploded Visual */}
          <div className="w-full lg:w-7/12 relative h-[500px]">
            {/* Main Dashboard Panel */}
            <div className="absolute inset-0 bg-white border-2 border-gray-900 rounded-[3rem] p-4 shadow-brutal z-20">
              <div className="w-full h-full bg-gray-900 rounded-3xl overflow-hidden relative flex flex-col">
                {/* Faux header */}
                <div className="h-16 border-b border-gray-800 flex items-center justify-between px-6">
                  <span className="text-white font-bold tracking-widest">
                    ANALYSIS
                  </span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  </div>
                </div>
                {/* Graph Area */}
                <div className="flex-1 p-6 flex flex-col justify-end">
                  <div className="flex items-end gap-2 h-40">
                    {[40, 20, 60, 30, 80, 50, 90, 70, 100, 60, 40].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-violet-600 to-indigo-400 rounded-t-sm"
                          style={{ height: `${h}%` }}
                        ></div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating 302 Badge */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full flex flex-col items-center justify-center shadow-brutal border-4 border-gray-900 animate-float z-30">
              <span className="text-5xl font-black text-gray-900 border-b-4 border-gray-900 pb-1">
                302
              </span>
              <span className="text-sm font-bold text-gray-900 pt-1 uppercase">
                Redirect
              </span>
            </div>

            {/* Floating Log Entry */}
            <div className="absolute -bottom-8 -left-8 bg-gray-900 border-2 border-gray-900 p-5 rounded-2xl z-30 animate-float-delayed shadow-brutal">
              <div className="flex flex-col gap-2 font-mono text-xs">
                <div className="text-green-400">&gt; POST /log/click</div>
                <div className="text-gray-300">
                  "timestamp": "2026-04-16T...
                </div>
                <div className="text-gray-300">"referer": "instagram.com"</div>
                <div className="text-yellow-400 leading-none mt-2">
                  Status: Recorded OK
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
