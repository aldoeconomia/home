import Navbar from "@/components/navbar";
import NotFound from "@/components/not-found";
import Footer from "@/components/footer";

export const metadata = {
    title: "404 - The Qontrol",
    description: "Página no encontrada en The Qontrol",
};

export default function NotFound404() {
    return (
        <>
            <Navbar />
            <main className="pt-20 md:pt-28 lg:pt-32">
                <NotFound />
            </main>
            <div className="mt-12 md:mt-16 lg:mt-20">
                <Footer />
            </div>
        </>
    );
}