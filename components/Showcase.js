// src/components/Showcase.js
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/assets/showcase1.jpg",
    title: "Turn your memories into cinematic reels",
    caption: "MagicReel transforms your old photos and moments into timeless stories.",
  },
  {
    id: 2,
    image: "/assets/showcase2.jpg",
    title: "AI-crafted nostalgia at your fingertips",
    caption: "Upload your memories — we’ll make them shine like movie scenes.",
  },
  {
    id: 3,
    image: "/assets/showcase3.jpg",
    title: "Relive emotions. Reimagine the past.",
    caption: "Every reel is a piece of your heart — brought back to life.",
  },
];

export default function Showcase() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={slides[index].image}
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-3">
              {slides[index].title}
            </h2>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
              {slides[index].caption}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-pink-400 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
