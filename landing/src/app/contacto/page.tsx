import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FrequentlyAskedQuestions } from "@/components/faq";
import Contact from "@/components/contact";

export default function Contacto() {
    return (
        <>
            <Navbar />
            <main className="w-full pt-20">
                <Contact />
                <FrequentlyAskedQuestions />
            </main>
            <Footer />
        </>
    );
}
