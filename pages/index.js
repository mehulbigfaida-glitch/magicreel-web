// pages/index.js
import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <HowItWorks />
      <Footer />
    </>
  );
}
