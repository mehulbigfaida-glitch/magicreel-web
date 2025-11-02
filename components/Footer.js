export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        <h3 className="text-2xl font-semibold text-white">
          <span className="text-yellow-400">MagicReel</span> — Relive Your Moments
        </h3>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Turn memories into cinematic reels powered by AI.  
          Share them effortlessly with the world.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            YouTube
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        <p className="text-sm text-gray-600 mt-6">
          © {new Date().getFullYear()} MagicReel.in — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
