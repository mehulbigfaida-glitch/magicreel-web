"use client";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: "🎬",
      title: "1. Upload",
      desc: "Upload your memory — photo or short clip — straight from your device.",
    },
    {
      icon: "✨",
      title: "2. Transform",
      desc: "Our AI automatically turns your moment into a cinematic reel within seconds.",
    },
    {
      icon: "📲",
      title: "3. Share",
      desc: "Instantly download and share your reel on Instagram, YouTube Shorts, or WhatsApp.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 py-24 text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 bg-[url('/videos/showcase_loop.mp4')] bg-cover bg-center"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-14"
        >
          How <span className="text-yellow-400">MagicReel</span> Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-yellow-400 transition-all"
            >
              <div className="text-6xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
