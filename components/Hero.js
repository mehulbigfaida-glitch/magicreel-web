// components/Hero.js
export default function Hero() {
  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero_loop.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">MagicReel</h1>
        <p className="text-xl md:text-2xl mb-6">
          Turn your moments into cinematic reels.
        </p>
        <p className="max-w-2xl mx-auto mb-8 text-gray-200">
          MagicReel uses AI to weave your photos into short cinematic memories —
          effortless, beautiful, and shareable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition">
            Create My Reel
          </button>
          <button
            onClick={scrollToHowItWorks}
            className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            How It Works
          </button>
        </div>

        <p className="mt-6 text-gray-300 text-sm">10s Free Reel – 720p</p>
      </div>
    </section>
  );
}
