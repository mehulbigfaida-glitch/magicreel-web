import React from "react";

export default function UploadModal({ isOpen, onClose }) {
if (!isOpen) return null;

return (
<div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-11/12 max-w-md text-center border border-white/20 shadow-xl relative">
<button
onClick={onClose}
className="absolute top-3 right-4 text-white text-xl font-bold"
>
×
</button>

<h2 className="text-2xl font-semibold text-white mb-4">
✨ Upload Your Memory
</h2>
<p className="text-gray-200 mb-6">
MagicReel will weave your moments into cinematic stories.
</p>

<form className="flex flex-col gap-4">
<input
type="text"
placeholder="Your Name"
className="p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none"
/>
<input
type="email"
placeholder="Email Address"
className="p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none"
/>
<input
type="file"
multiple
accept="image/*"
className="p-3 rounded-md bg-white/20 text-white focus:outline-none"
/>

<button
type="submit"
className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-md transition-all"
>
Generate My Reel
</button>
</form>

<p className="text-xs text-gray-400 mt-4">
Your photos stay private and secure.
</p>
</div>
</div>
);
}

