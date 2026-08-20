import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import BlogList from "@/components/blog-list";

export const metadata: Metadata = {
    title: "Blog Qontrol | Editorial & Noticias",
    description:
        "Noticias, Comunicados Oficiales, eventos, innovación y tecnología aplicada a la seguridad industrial.",
};

// Traemos los campos necesarios para las imágenes y extractos tipo periódico
const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...20]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "imageUrl": mainImage.asset->url
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
    const posts = await client.fetch<SanityDocument[]>(
        POSTS_QUERY,
        {},
        options
    );

    return (
        <>
            <Navbar />

            {/* Extendido a 1400px para aprovechar todo el ancho de la pantalla */}
            <main className="w-full max-w-[1400px] mx-auto min-h-screen px-4 sm:px-8 pt-32 pb-20">

                {/* Cabecera Tipo Editorial / Periódico */}
                <header className="border-b-2 border-gray-900 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-monsterrat font-bold mt-1 uppercase tracking-tight">
                            Blog & News
                        </h1>
                    </div>
                    <p className="max-w-md text-sm text-gray-600 font-monsterrat-medium leading-relaxed">
                        Noticias, comunicados oficiales y novedades.
                    </p>
                </header>

                {/* Componente Interactivo con el Layout de Periódico */}
                <BlogList posts={posts} />

            </main>

            <Footer />
        </>
    );
}