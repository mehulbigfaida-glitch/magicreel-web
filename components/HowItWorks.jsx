import React from "react";

const HowItWorks = () => {
return (
<section
id="how-it-works"
className="how-it-works py-20 bg-gray-100 text-center"
>
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold mb-8 text-gray-800">
How MagicReel Works
</h2>

<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-lg shadow-md">
<h3 className="text-xl font-semibold mb-3">Step 1: Upload</h3>
<p className="text-gray-600">
Upload your favorite photos that capture your special memories.
</p>
</div>

<div className="bg-white p-6 rounded-lg shadow-md">
<h3 className="text-xl font-semibold mb-3">Step 2: AI Magic</h3>
<p className="text-gray-600">
Our AI transforms your photos into cinematic, story-like reels.
</p>
</div>

<div className="bg-white p-6 rounded-lg shadow-md">
<h3 className="text-xl font-semibold mb-3">Step 3: Share</h3>
<p className="text-gray-600">
Download and share your personalized short film in seconds.
</p>
</div>
</div>
</div>
</section>
);
};

export default HowItWorks;
