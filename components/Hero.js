import React from "react";

const Hero = () => {
const scrollToHowItWorks = () => {
const element = document.getElementById("how-it-works");
if (element) {
element.scrollIntoView({ behavior: "smooth" });
}
};

return (
<section className="hero">
<video className="hero-video" autoPlay loop muted playsInline>
<source src="/hero-bg.mp4" type="video/mp4" />
</video>

<div className="hero-overlay">
<div className="hero-content">
<img src="/logo.png" alt="MagicReel Logo" className="logo" />
<h1>MagicReel</h1>

<p className="tagline">Turn your moments into cinematic reels.</p>
<p className="subtext">
MagicReel uses AI to weave your photos into short cinematic
memories — effortless, beautiful, and shareable.
</p>

<div className="hero-buttons">
<button className="primary-btn">Create My Reel</button>
<button className="secondary-btn" onClick={scrollToHowItWorks}>
How It Works
</button>
</div>

<p className="offer-text">🎥 10s free reel — 720p</p>
</div>
</div>
</section>
);
};

export default Hero;
