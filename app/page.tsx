import Hero from "@/app/components/Hero";
import Intro from "@/app/components/Intro";
import ServiceTimes from "@/app/components/ServiceTimes";
import NewsAndGallery from "@/app/components/NewsAndGallery";
import Ministries from "@/app/components/Ministries";
import FAQ from "@/app/components/FAQ";
import Contact from "@/app/components/Contact";

export default function JaejadlePage() {
  return (
    <div>
      <Hero />
      <ServiceTimes />
      <Intro />
      <NewsAndGallery /> {/* csr */}
      <FAQ />
      <Ministries />
      <Contact />
    </div>
  );
}

