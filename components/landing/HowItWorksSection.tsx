import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-amber-50 text-gray-900 relative overflow-hidden"
    >
      {/* Background brutal lines */}
      <div className="absolute inset-0 flex justify-center opacity-10 pointer-events-none">
        <div className="w-0.5 h-full bg-gray-900"></div>
        <div className="w-0.5 h-full bg-gray-900 mx-32"></div>
        <div className="w-0.5 h-full bg-gray-900"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge
            variant="dark"
            className="border-2 border-gray-900 mb-4 inline-block shadow-brutal"
          >
            Timeline
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 mt-4">
            Launch in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              Minutes
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Zero coding required. We've streamlined the process so you can focus
            on creating.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Main vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-900 -translate-x-1/2"></div>

          <div className="flex flex-col gap-12 lg:gap-0">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center justify-between group">
              <div className="lg:w-5/12 lg:text-right flex flex-col items-start lg:items-end gap-4 order-2 lg:order-1 pt-6 lg:pt-0">
                <span className="text-gray-900 bg-yellow-300 px-3 py-1 rounded-full border-2 border-gray-900 font-bold tracking-widest uppercase text-xs shadow-brutal">
                  Step 01
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Claim your identity
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Secure your custom handle and sign up instantly with your
                  Google account. Your beautiful link is generated in
                  milliseconds.
                </p>
              </div>
              <div className="hidden lg:flex w-2/12 justify-center z-10 order-2">
                <div className="w-16 h-16 rounded-full bg-yellow-300 border-4 border-gray-900 flex items-center justify-center text-gray-900 text-2xl font-black shadow-brutal">
                  1
                </div>
              </div>
              <div className="w-full lg:w-5/12 order-1 lg:order-3">
                <Card className="p-3 overflow-hidden">
                  <img
                    src="/images/influencer9.jpg"
                    alt="Claim handle"
                    className="w-full h-auto rounded-2xl object-cover border border-gray-200"
                  />
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row items-center justify-between lg:mt-16 group">
              <div className="w-full lg:w-5/12 order-1 lg:order-1">
                <Card className="p-3 overflow-hidden">
                  <img
                    src="/images/influencer1.jpg"
                    alt="Customize"
                    className="w-full h-auto rounded-2xl object-cover border border-gray-200"
                  />
                </Card>
              </div>
              <div className="hidden lg:flex w-2/12 justify-center z-10 order-2">
                <div className="w-16 h-16 rounded-full bg-violet-300 border-4 border-gray-900 flex items-center justify-center text-gray-900 text-2xl font-black shadow-brutal">
                  2
                </div>
              </div>
              <div className="lg:w-5/12 text-left flex flex-col items-start gap-4 order-2 lg:order-3 pt-6 lg:pt-0">
                <span className="text-gray-900 bg-violet-300 px-3 py-1 rounded-full border-2 border-gray-900 font-bold tracking-widest uppercase text-xs shadow-brutal">
                  Step 02
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Populate & Style
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Paste your links, upload thumbnails, and let our system
                  automatically fetch product metadata. Choose from dozens of
                  premium themes.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center justify-between lg:mt-16 group">
              <div className="lg:w-5/12 lg:text-right flex flex-col items-start lg:items-end gap-4 order-2 lg:order-1 pt-6 lg:pt-0">
                <span className="text-gray-900 bg-green-300 px-3 py-1 rounded-full border-2 border-gray-900 font-bold tracking-widest uppercase text-xs shadow-brutal">
                  Step 03
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Share & Analyze
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Drop the link in your bio. Every click is recorded as a
                  discrete event giving you granular, professional-grade
                  analytics.
                </p>
              </div>
              <div className="hidden lg:flex w-2/12 justify-center z-10 order-2">
                <div className="w-16 h-16 rounded-full bg-green-300 border-4 border-gray-900 flex items-center justify-center text-gray-900 text-2xl font-black shadow-brutal">
                  3
                </div>
              </div>
              <div className="w-full lg:w-5/12 order-1 lg:order-3">
                <Card className="p-3 overflow-hidden">
                  <img
                    src="/images/influencer2.jpg"
                    alt="Analyze"
                    className="w-full h-auto rounded-2xl object-cover border border-gray-200"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
