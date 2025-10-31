export default function HowItWorks() {
const steps = [
{ title: "Upload a photo", desc: "Choose a single photo or short clip to begin." },
{ title: "AI crafts your reel", desc: "Music, motion, and mood — instantly generated." },
{ title: "Share or upgrade", desc: "Share the watermarked free reel or upgrade for HD & voice." }
];

return (
<section id="how" className="py-20 px-6 bg-gradient-to-b from-black/40 to-transparent">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-3xl font-semibold mb-6">How MagicReel Works</h2>
<div className="grid md:grid-cols-3 gap-6">
{steps.map((s, i) => (
<div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5">
<div className="text-xl font-semibold mb-2">Step {i + 1}: {s.title}</div>
<p className="text-gray-300">{s.desc}</p>
</div>
))}
</div>
</div>
</section>
);
}
