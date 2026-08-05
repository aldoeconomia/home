import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function Terminos() {
    return (
        <div style={{ fontFamily: "var(--font-montserrat)" }}>
            <Navbar />
            <main className="w-full pt-28 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
                {/* Fecha fija */}
                <p className="text-center text-sm font-bold text-brand mb-2">
                    Ultima Actualización: 4 de agosto de 2026
                </p>

                {/* Título */}
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
                    Términos y Condiciones
                </h1>

                {/* Contenido centrado con texto justificado */}
                <div className="space-y-4 text-justify text-black leading-relaxed">
                    <p>
                        Bienvenido a nuestro sitio web. Al acceder y utilizar este servicio, aceptas cumplir y estar sujeto a los siguientes términos y condiciones de uso. Te recomendamos leer detenidamente esta información antes de continuar.
                    </p>
                    <p>
                        Nos reservamos el derecho de actualizar, modificar o reemplazar cualquier parte de estos Términos y Condiciones mediante la publicación de actualizaciones en nuestro sitio web. Es tu responsabilidad revisar esta página periódicamente para verificar los cambios.
                    </p>
                    <p>
                        El uso no autorizado de este sitio web puede dar lugar a una reclamación por daños y perjuicios o constituir un delito. Todos los contenidos, marcas y logotipos expuestos están protegidos por las leyes de propiedad intelectual correspondientes.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}