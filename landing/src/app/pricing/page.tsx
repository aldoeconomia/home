import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export const metadata = {
    title: "Pricing - The Qontrol",
    description: "Planes de precios de The Qontrol",
};

export default function PricingPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20 md:pt-28 lg:pt-32">
                <Pricing />
            </main>
            <div className="mt-12 md:mt-16 lg:mt-20">
                <Footer />
            </div>
        </>
    );
}