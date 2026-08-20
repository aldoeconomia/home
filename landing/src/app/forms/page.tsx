import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/forms";

export const metadata = {
    title: "Forms - The Qontrol",
    description: "Formulario Dinámico de The Qontrol",
};

export default function FormsPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="mt-12 md:mt-16 lg:mt-20">
                <Footer />
            </div>
        </>
    );
}