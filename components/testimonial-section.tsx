"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Williams",
    role: "Startup Founder",
    feedback:
      "Working with this team transformed my business idea into a stunning product. Their UI/UX expertise is unmatched.",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "James Miller",
    role: "Marketing Director",
    feedback:
      "The website design was modern, smooth, and professional. We’ve seen a 40% increase in client engagement since launch.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Ayesha Khan",
    role: "E-commerce Owner",
    feedback:
      "They delivered exactly what I had in mind—actually, even better. The animations and details made my store feel premium.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
  },
];

export default function TestimonialSection() {
  return (
    <section className=" py-16 px-6 md:px-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 fontClass">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Real experiences from real clients who trusted us with their digital
          journey.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/40 p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-700 hover:scale-[1.02] transition-transform"
          >
            <div className="flex gap-1 text-yellow-400 mb-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
            </div>
            <p className="text-gray-200 italic mb-6 leading-relaxed">
              “{t.feedback}”
            </p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <span className="text-gray-400 text-sm">{t.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
