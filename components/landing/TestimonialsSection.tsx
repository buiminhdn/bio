import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const testimonials = [
  {
    quote:
      "BioLinks completely changed how I share my affiliate picks. My followers can browse by category and I can see exactly which products they click. Revenue went up 40% in a month.",
    name: "Sarah Nguyen",
    role: "Tech Reviewer",
    avatar: "https://picsum.photos/seed/sarah/80/80",
    tilt: "rotate-2",
    hoverTilt: "hover:rotate-0",
    bg: "bg-yellow-50",
  },
  {
    quote:
      "I used to juggle Linktree and spreadsheets. Now I have one beautiful page with full click tracking. The drag-and-drop reordering makes curating my picks super easy.",
    name: "Marco Rivera",
    role: "Fashion Blogger",
    avatar: "https://picsum.photos/seed/marco/80/80",
    tilt: "-rotate-3",
    hoverTilt: "hover:rotate-1",
    bg: "bg-violet-50",
  },
  {
    quote:
      "The redirect tracking is genius — every single click is logged, even when ad-blockers are running. I finally have data I can trust when talking to brands.",
    name: "Linh Pham",
    role: "Fitness Creator",
    avatar: "https://picsum.photos/seed/linh/80/80",
    tilt: "rotate-1",
    hoverTilt: "hover:-rotate-1",
    bg: "bg-green-50",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-[#fdfbf7] relative overflow-hidden"
    >
      {/* Decorative large quotes */}
      <div className="absolute top-10 left-10 text-[20rem] text-gray-100 font-serif leading-none opacity-50 pointer-events-none select-none">
        &ldquo;
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 pb-10 border-b border-gray-200">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight max-w-lg">
              Don't just take our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-600">
                word
              </span>{" "}
              for it.
            </h2>

            <Card className="p-4 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/trust${i}/50/50`}
                    alt="Trust"
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="text-yellow-400 text-lg flex gap-1">★★★★★</div>
                <p className="text-sm font-bold text-gray-900">
                  Over 5,000+ creators
                </p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`flex flex-col gap-6 p-8 md:p-10 rounded-[2.5rem] border-2 border-gray-900 shadow-brutal transition-transform duration-300 hover:-translate-y-4 ${t.hoverTilt} ${t.bg} ${t.tilt}`}
              >
                <div className="text-5xl text-gray-900 opacity-20 font-serif leading-none mt-2 h-8">
                  &ldquo;
                </div>
                <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed flex-1">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gray-900"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
