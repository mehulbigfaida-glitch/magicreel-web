// components/Hero.js
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById("showcase");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center bg-white text-gray-900 overflow-hidden"
    >
      {/* Soft animated background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.85 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 20%, #fff 0%, rgba(255,255,255,0.9) 30%, rgba(245,245,250,0.6) 60%)",
        }}
      />

      {/* Foreground */}
      <motion.div
        className="z-10 max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Turn your moments into cinematic reels.
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          MagicReel uses AI to weave your photos into short cinematic memories —
          effortless, beautiful, and shareable.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleScroll}
            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-shadow shadow-lg"
          >
            Try MagicReel Now
          </button>

          <a
            href="#how-it-works"
            className="border border-gray-300 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            How It Works
          </a>
        </div>

        <p className="mt-6 text-gray-500 text-sm">🎥 10s Free Reel — 720p</p>
      </motion.div>

      {/* subtle scroll hint */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center text-gray-600 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      >
        <span className="text-sm">Scroll to explore</span>
        <svg
          className="w-6 h-6 mt-2 opacity-80"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
