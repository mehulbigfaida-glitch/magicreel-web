// components/Showcase.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Showcase() {
  const showcases = [
    {
      image: "/assets/showcase1.jpg",
      title: "From Memories to Magic",
      description:
        "Upload your favorite photos or clips — our AI transforms them into cinematic moments you’ll love.",
    },
    {
      image: "/assets/showcase2.jpg",
      title: "Your Story, Your Style",
      description:
        "Choose from multiple cinematic styles and let MagicReel enhance your visuals automatically.",
    },
    {
      image: "/assets/showcase3.jpg",
      title: "Share Instantly",
      description:
        "Download and share your creation directly to Instagram, YouTube Shorts, or WhatsApp.",
    },
  ];

  return (
    <section id="showcase" className="bg-white py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Experience the Magic
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {showcases.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
