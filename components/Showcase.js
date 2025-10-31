export default function Showcase() {
// placeholder clips in /public/reels/
const clips = [
{ src: "/reels/sample1.mp4", title: "Summer Evening" },
{ src: "/reels/sample2.mp4", title: "Wedding Memory" },
{ src: "/reels/sample3.mp4", title: "Road Trip" },
];

return (
<section className="py-16 px-6">
<div className="max-w-6xl mx-auto">
<h3 className="text-2xl font-semibold mb-6">Cinematic Showcase</h3>
<div className="grid md:grid-cols-3 gap-6">
{clips.map((c, idx) => (
<div key={idx} className="rounded-lg overflow-hidden bg-black/30">
<video src={c.src} className="w-full h-48 object-cover" muted loop playsInline autoPlay />
<div className="p-4">
<div className="font-medium">{c.title}</div>
<div className="text-sm text-gray-300">Preview • watermarked</div>
</div>
</div>
))}
</div>
</div>
</section>
);
}
