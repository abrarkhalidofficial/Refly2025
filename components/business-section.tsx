import { Card, CardContent } from "@/components/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const cards = [
    {
      id: "01",
      title: "Focused Strategy",
      desc: "We help you define your vision and goals with strategic planning that drives measurable results.",
    },
    {
      id: "02",
      title: "Innovative Ideas",
      desc: "We bring fresh perspectives and creative solutions that set your brand apart from the competition.",
    },
    {
      id: "03",
      title: "Engaging Content",
      desc: "We create compelling content that resonates with your audience and drives meaningful engagement.",
    },
    {
      id: "04",
      title: "Creative Design",
      desc: "We craft beautiful, functional designs that capture your brand essence and delight users.",
    },
    {
      id: "05",
      title: "Smart Execution",
      desc: "We implement solutions with precision and attention to detail for optimal performance.",
    },
    {
      id: "06",
      title: "Lasting Impact",
      desc: "We build solutions that create sustainable growth and leave a lasting positive impact.",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8 urbanist">
      <section className="p-8 py-16 max-w-8xl mx-auto">
        <div className="mb-4">
          <span className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full border">
            Business & Approach
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How We Build Solutions That Inspire Growth
            </h1>
          </div>
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a creative studio with passion for innovation and we're on
              a journey to help you unlock the best version of your brand.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-8xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Card
              key={card.id}
              className={`relative border border-gray-200 transition-all group
                bg-transparent  hover:bg-gray-900 rounded-4xl urbanist`}
            >
              <CardContent className="pl-6 pr-6 relative z-10">
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                        ${
                          !card.id ? "" : "bg-purple-100"
                        } group-hover:bg-purple-500`}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      className="w-6 h-6 transition-colors text-black group-hover:text-white"
                    >
                      <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41M17.66 17.66l-1.41-1.41M6.34 6.34L4.93 4.93M12 8a4 4 0 100 8 4 4 0 000-8z" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl mb-4 text-gray-400 group-hover:text-gray-300">
                  {card.id}
                </div>
                <div className="pt-10">
                  <h3
                    className="text-2xl font-semibold mb-4 transition-colors
                  text-gray-900 group-hover:text-white"
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed transition-colors
                  text-gray-600 group-hover:text-gray-300"
                  >
                    {card.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
