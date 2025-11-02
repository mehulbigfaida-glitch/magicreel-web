// components/Showcase.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Showcase() {
  const showcases = [
    {
      image: "/assets/showcase1.png",
      title: "From Memories to Magic",
      text: "Upload photos or clips — our AI crafts them into cinematic reels.",
    },
    {
      image: "/assets/showcase2.png",
      title: "AI-crafted Nostalgia",
      text: "Automatic color grading, smooth edits and emotional pacing.",
    },
    {
      image: "/assets/showcase3.png",
      title: "Share Instantly",
      text: "Download or share directly to Instagram, YouTube Shorts or WhatsApp.",
    },
  ];

  return (
    <motion.section
      id="showcase"
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background video (from /public/videos) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/showcase_loop.mp4" type="video/mp4" />
      </video>

      {/* dark overlay to improve contrast */}
      <div className="absolute inset-0 bg-black/65 z-10" />

      {/* foreground content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Experience the Magic
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white/6 backdrop-blur-md rounded-2xl overflow-hidden p-4 shadow-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18, duration: 0.6 }}
            >
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-200">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
