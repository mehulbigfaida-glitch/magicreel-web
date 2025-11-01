import React, { useState } from "react";
import UploadModal from "./UploadModal";

export default function Hero() {
const [isModalOpen, setIsModalOpen] = useState(false);

return (
<section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
<video
autoPlay
loop
muted
playsInline
className="absolute inset-0 w-full h-full object-cover"
src="/videos/hero-bg.mp4"
></video>

<div className="absolute inset-0 bg-black/50"></div>

<div className="z-10 px-6">
<img
src="/logo.png"
alt="MagicReel Logo"
className="mx-auto mb-4 w-16 h-16"
/>
<h1 className="text-4xl md:text-6xl font-bold mb-4">
Turn your moments into cinematic reels.
</h1>
<p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
MagicReel uses AI to weave your photos into short cinematic memories —
effortless, beautiful, and shareable.
</p>

<div className="flex flex-col sm:flex-row justify-center gap-4">
<button
onClick={() => setIsModalOpen(true)}
className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition-all"
>
Create My Reel
</button>

<a
href="#how"
className="border border-white text-white hover:bg-white/20 py-3 px-8 rounded-full transition-all"
>
How It Works
</a>
</div>

<p className="text-sm mt-6 text-gray-300">🎥 10s free reel – 720p</p>
</div>

{/* Modal */}
<UploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
</section>
);
}
