// components/HowItWorks.jsx
import React from "react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 text-center scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          How MagicReel Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="text-4xl mb-3">1️⃣</div>
            <h3 className="text-xl font-semibold mb-2">Upload</h3>
            <p className="text-gray-600">Select photos or short clips from your device.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="text-4xl mb-3">2️⃣</div>
            <h3 className="text-xl font-semibold mb-2">AI Magic</h3>
            <p className="text-gray-600">We analyze, edit and compose your clips into a reel.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="text-4xl mb-3">3️⃣</div>
            <h3 className="text-xl font-semibold mb-2">Share</h3>
            <p className="text-gray-600">Download or share directly on your favourite platforms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
