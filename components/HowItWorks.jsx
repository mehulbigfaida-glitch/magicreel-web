// components/HowItWorks.jsx
export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="how-it-works bg-gray-50 py-20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">
          How MagicReel Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <div className="text-5xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold mb-2">1. Upload</h3>
            <p className="text-gray-600">
              Upload your memory — photo or short clip — straight from your device.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">2. Transform</h3>
            <p className="text-gray-600">
              Our AI automatically turns your moment into a cinematic reel within seconds.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md">
            <div className="text-5xl mb-4">📲</div>
            <h3 className="text-xl font-semibold mb-2">3. Share</h3>
            <p className="text-gray-600">
              Instantly download and share your reel on Instagram, YouTube Shorts, or WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
