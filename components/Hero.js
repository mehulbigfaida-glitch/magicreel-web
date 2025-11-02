"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero_loop.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Turn Your Memories into Magic Reels ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl mb-8"
        >
          Upload a photo or clip — let AI craft your cinematic moment in seconds.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#upload"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Try MagicReel Now
          </a>

          <a
            href="#how-it-works"
            className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            How It Works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
