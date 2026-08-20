import { PortableText, type SanityDocument } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Montserrat } from "next/font/google";

// Tipografía Montserrat
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    display: "swap",
});

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const options = {
    next: { revalidate: 30 }
};

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? createImageUrlBuilder({ projectId, dataset }).image(source)
        : null;

// Personalización de estilos para el contenido enriquecido de Sanity (PortableText)
const portableTextComponents = {
    block: {
        // Párrafos con texto justificado y espaciado amplio
        normal: ({ children }: any) => (
            <p className="mb-6 text-base sm:text-lg leading-relaxed text-gray-800 text-justify">
                {children}
            </p>
        ),
        h1: ({ children }: any) => (
            <h1 className="text-3xl sm:text-4xl font-monsterrat font-bold text-gray-900 mt-10 mb-4 tracking-tight">
                {children}
            </h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-10 mb-4 border-b-2 border-gray-900 pb-2 tracking-tight">
                {children}
            </h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-3">
                {children}
            </h3>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-brand bg-back p-6 my-8 italic text-gray-800 text-justify">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800 text-justify text-base sm:text-lg">
                {children}
            </ul>
        ),
        number: ({ children }: any) => (
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-800 text-justify text-base sm:text-lg">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }: any) => <li className="pl-1">{children}</li>,
        number: ({ children }: any) => <li className="pl-1">{children}</li>,
    },
    marks: {
        strong: ({ children }: any) => (
            <strong className="font-extrabold text-gray-900">{children}</strong>
        ),
        em: ({ children }: any) => <em className="italic">{children}</em>,
        link: ({ value, children }: any) => {
            const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
            return (
                <a
                    href={value?.href}
                    target={target}
                    rel={target === "_blank" ? "noopener noreferrer" : undefined}
                    className="text-brand font-bold underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                    {children}
                </a>
            );
        },
    },
};

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await client.fetch<SanityDocument>(
        POST_QUERY,
        { slug },
        options
    );

    if (!post) return {};

    const imageSource = post.image || post.mainImage;

    return {
        title: `${post.title} | QONTROL`,
        description:
            post.excerpt ||
            "Noticias, Comunicados Oficiales, eventos y novedades, innovación y tecnología aplicada a la seguridad industrial.",
        openGraph: {
            title: post.title,
            description:
                post.excerpt ||
                "Comunicados oficiales, eventos y novedades de QONTROL.",
            url: `https://www.theqontrol.com/blog/${slug}`,
            siteName: "QONTROL",
            type: "article",
            images: imageSource
                ? [
                    {
                        url:
                            urlFor(imageSource)
                                ?.width(1200)
                                ?.height(630)
                                ?.url() || "",
                        width: 1200,
                        height: 630,
                        alt: post.title,
                    },
                ]
                : [],
        },
    };
}

export default async function PostPage({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await client.fetch<SanityDocument>(
        POST_QUERY,
        { slug },
        options
    );

    if (!post) {
        return (
            <main className="container mx-auto min-h-screen pt-32 px-8 text-center">
                <h1 className="text-2xl font-bold">Artículo no encontrado</h1>
                <Link href="/blog" className="text-brand underline mt-4 block">
                    ← Volver al blog
                </Link>
            </main>
        );
    }

    const imageSource = post.image || post.mainImage;
    // Carga de la imagen en alta definición sin forzar el recorte (width 1200)
    const postImageUrl = imageSource
        ? urlFor(imageSource)?.width(1200).url()
        : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": post.title,
                        "author": {
                            "@type": "Organization",
                            "name": "QONTROL"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Grupo Codiaz",
                            "url": "https://www.theqontrol.com"
                        },
                        "datePublished": post.publishedAt,
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://www.theqontrol.com/blog/${post.slug.current}`
                        }
                    })
                }}
            />

            <Navbar />

            <main className={`${montserrat.className} container mx-auto min-h-screen max-w-4xl px-4 sm:px-8 pt-32 pb-20`}>

                {/* Enlace de regreso */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand hover:underline mb-8"
                >
                    ← Volver a publicaciones
                </Link>

                {/* Título de la entrada */}
                <h1 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-4">
                    {post.title}
                </h1>

                {/* Fecha de publicación */}
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8 border-b border-gray-200 pb-4">
                    Publicado el{" "}
                    {new Date(post.publishedAt).toLocaleDateString("es-MX", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>

                {/* Imagen Principal Ajustada (sin deformarse/recortarse y sin bordes redondeados) */}
                {postImageUrl && (
                    <div className="w-full h-72 sm:h-[450px] bg-back overflow-hidden rounded-none my-8 flex items-center justify-center p-4">
                        <img
                            src={postImageUrl}
                            alt={post.title}
                            className="w-full h-full object-contain"
                        />
                    </div>
                )}

                {/* Cuerpo del Artículo con PortableText Formateado y Justificado */}
                <article className="w-full mt-8">
                    {Array.isArray(post.body) && (
                        <PortableText
                            value={post.body}
                            components={portableTextComponents}
                        />
                    )}
                </article>

            </main>

            <Footer />
        </>
    );
}