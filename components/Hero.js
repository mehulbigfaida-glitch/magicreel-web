// components/Hero.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import UploadModal from './UploadModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/videos/hero_loop.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-3xl px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Turn Your Memories into <span className="text-indigo-400">Magic Reels</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Upload your favorite photo or clip and let our AI create a cinematic masterpiece.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Try MagicReel Now
          </button>

          <a
            href="#how-it-works"
            className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            How It Works
          </a>
        </motion.div>
      </div>

      <UploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
