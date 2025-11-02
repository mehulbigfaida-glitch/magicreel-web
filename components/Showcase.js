"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Showcase() {
  return (
    <section className="relative py-24 overflow-hidden bg-black text-white">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        src="/videos/showcase_loop.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Featured Reels</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { src: "/assets/showcase1.png", caption: "Old photo to cinematic memory" },
            { src: "/assets/showcase2.png", caption: "Vacation clip turned reel" },
            { src: "/assets/showcase3.png", caption: "Birthday captured beautifully" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md"
            >
              <Image
                src={item.src}
                alt={item.caption}
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <p className="p-4 text-lg">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
