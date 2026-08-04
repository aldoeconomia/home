import Hero from "@/components/hero";
import { ComparisonTable } from "@/components/table";
import { ImageBuilding } from "@/components/imagebuilding";
import { CallToAction } from "@/components/calltoaction";
import Stats from "@/components/stats";
import { HoverCardSection } from "@/components/cards";
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
