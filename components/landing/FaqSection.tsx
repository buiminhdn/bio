import { Container } from "@/components/ui/Container";

const faqs = [
  {
    question: "Do I need technical skills to use BioLinks?",
    answer:
      "Absolutely zero coding required. If you can fill out a form and drag an image, you can build a stunning optimized profile page in under two minutes.",
  },
  {
    question: "How does the server-side tracking actually help me?",
    answer:
      "Client-side tracking gets blocked by ad-blockers and privacy browsers, losing you up to 30% of your click data. Our server-side redirect ensures every single click is logged before handing off to the affiliate link. Accurate data means better negotiation power with brands.",
  },
  {
    question: "Can I use custom domains?",
    answer:
      "Yes, premium users can map their own domain (like links.yourname.com) directly to their BioLinks page for a seamless, fully branded experience.",
  },
  {
    question: "What happens if an affiliate product goes out of stock?",
    answer:
      "You can simply unpublish the product or swap the link in seconds. Your audience will instantly see the updated list without needing an app update or page refresh.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 p-10 pointer-events-none opacity-[0.03]">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-2h-2v2h2zm0-4V7h-2v6h2z" />
        </svg>
      </div>

      <Container className="max-w-4xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-4">
            You asked. <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900">
              We answered.
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-gray-50 rounded-[2rem] border-2 border-transparent hover:border-gray-900 transition-colors shadow-sm open:bg-white open:border-gray-900 open:shadow-brutal"
            >
              <summary className="flex items-center gap-6 p-8 cursor-pointer select-none">
                <div className="text-3xl font-black text-gray-300 group-open:text-yellow-400 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex-1 pr-4">
                  {faq.question}
                </h3>
                <div className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center bg-white group-open:bg-gray-900 group-open:text-white transition-colors shrink-0">
                  <svg
                    className="w-6 h-6 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </summary>
              <div className="px-8 pb-8 pt-2 ml-[88px] text-lg text-gray-600 leading-relaxed max-w-2xl">
                <p className="animate-fade-up">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
