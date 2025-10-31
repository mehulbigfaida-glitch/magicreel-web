import Link from "next/link";

export default function Hero() {
return (
<header className="relative h-screen flex items-center justify-center overflow-hidden">
{/* Hero Video */}
<video
className="absolute inset-0 w-full h-full object-cover opacity-60"
src="/videos/hero_loop.mp4"
autoPlay
muted
loop
playsInline
/>
{/* Overlay */}
<div className="absolute inset-0 hero-overlay"></div>

{/* Content */}
<div className="relative z-20 text-center px-6 max-w-3xl">
<div className="mb-6">
<img src="/logo.svg" alt="MagicReel" className="mx-auto w-40 h-auto" />
</div>

<h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-4">
Turn your moments into cinematic reels.
</h1>

<p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
MagicReel uses AI to weave your photos into short cinematic memories — effortless, beautiful, and shareable.
</p>

<div className="flex items-center justify-center gap-4">
<a
href="#upload"
className="glow-btn inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-royal to-cyanGlow text-black font-medium"
>
Create My Reel ✨
</a>

<Link href="#how">
<a className="inline-block px-5 py-3 rounded-lg border border-white/20 text-white/90">How it works</a>
</Link>
</div>

<div className="mt-6 text-sm text-gray-300">
<span className="inline-block bg-black/30 px-3 py-1 rounded-full">10s free reel • 720p</span>
</div>
</div>

{/* subtle vignette */}
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
</header>
);
}
