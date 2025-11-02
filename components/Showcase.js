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
    <section className="relative py-20 text-white overflow-hidden">
      {/* 🔹 Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30 blur-sm"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/showcase_loop.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-0"></div>

      {/* 🔹 Foreground content */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Magic in Motion</h2>
        <p className="text-gray-300 text-lg">
          Watch how MagicReel turns your uploads into cinematic reels
        </p>
      </div>

      {/* 🔹 Showcase grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {showcases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.25 }}
            className="rounded-2xl overflow-hidden shadow-xl bg-zinc-900/70 backdrop-blur-md hover:scale-105 transition-transform"
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
