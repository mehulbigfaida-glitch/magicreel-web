export default function Footer(){
return (
<footer className="py-10 text-center text-gray-300">
<div className="max-w-4xl mx-auto">
<div className="mb-3">© {new Date().getFullYear()} MagicReel</div>
<div className="flex items-center justify-center gap-4 text-sm">
<a href="/privacy" className="hover:underline">Privacy</a>
<a href="/terms" className="hover:underline">Terms</a>
<a href="/contact" className="hover:underline">Contact</a>
</div>
</div>
</footer>
);
}
