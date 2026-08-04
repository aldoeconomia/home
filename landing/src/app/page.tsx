import Hero from "@/components/hero";
import { CallToAction } from "@/components/calltoaction";
import Stats from "@/components/stats";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
