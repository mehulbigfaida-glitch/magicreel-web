"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Showcase() {
  const showcases = [
    {
      src: "/assets/showcase1.png",
      alt: "AI Video Generation Demo",
      title: "Turn your memories into cinematic stories",
    },
    {
      src: "/assets/showcase2.png",
      alt: "AI Story Reel Creation",
      title: "Automatic editing and transitions",
    },
    {
      src: "/assets/showcase3.png",
      alt: "AI Face Sync Example",
      title: "Seamless lip-sync and expressions",
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Magic in Motion</h2>
        <p className="text-gray-400 text-lg">
          Watch how MagicReel turns your uploads into cinematic reels
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {showcases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-zinc-900 hover:scale-105 transition-transform"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
