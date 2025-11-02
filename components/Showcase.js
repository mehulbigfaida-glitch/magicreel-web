// components/Showcase.js
import Image from "next/image";
import { motion } from "framer-motion";

export default function Showcase() {
  const showcaseItems = [
    {
      title: "Summer Evening",
      description: "Soft golden light, laughter, and warmth — captured forever.",
      image: "/assets/showcase1.jpg",
    },
    {
      title: "Wedding Memory",
      description: "Relive the emotion and elegance of your special day.",
      image: "/assets/showcase2.jpg",
    },
    {
      title: "Road Trip",
      description: "Your adventures, your friends, your story — made cinematic.",
      image: "/assets/showcase3.jpg",
    },
  ];

  return (
    <section id="showcase" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Cinematic Showcase
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg bg-gray-50 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
