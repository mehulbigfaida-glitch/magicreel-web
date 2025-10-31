import Head from "next/head";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";

export default function Home() {
return (
<>
<Head>
<title>MagicReel — Turn photos into cinematic reels</title>
<meta name="description" content="Turn your memories into cinematic reels using AI — 10s free preview." />
<meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>

<div className="min-h-screen flex flex-col">
<Hero />
<main className="flex-auto bg-gradient-to-b from-transparent to-black/80">
<HowItWorks />
<Showcase />
</main>
<Footer />
</div>
</>
);
}
