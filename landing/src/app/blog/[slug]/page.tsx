import { PortableText, type SanityDocument } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const options = {
    next: { revalidate: 30 }
};


const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? createImageUrlBuilder({ projectId, dataset }).image(source)
        : null;



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

            url: `https://theqontrol.com/blog/${slug}`,

            siteName: "QONTROL",

            type: "article",

            images: post.image
                ? [
                    {
                        url:
                            urlFor(post.image)
                                ?.width(1200)
                                .height(630)
                                .url() || "",

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

    const post = await client.fetch<SanityDocument>(
        POST_QUERY,
        await params,
        options
    );


    const postImageUrl = post.image
        ? urlFor(post.image)?.width(550).height(310).url()
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
                            "url": "https://theqontrol.com"
                        },

                        "datePublished": post.publishedAt,

                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id":
                                `https://theqontrol.com/blog/${post.slug.current}`
                        }
                    })
                }}
            />


            <Navbar />

            <main className="container mx-auto min-h-screen max-w-3xl px-8 pt-32 flex flex-col gap-4">

                <Link href="/blog" className="hover:underline">
                    ← Volver al blog
                </Link>


                {postImageUrl && (
                    <img
                        src={postImageUrl}
                        alt={post.title}
                        className="aspect-video rounded-xl"
                        width="550"
                        height="310"
                    />
                )}


                <h1 className="text-4xl font-bold mb-8">
                    {post.title}
                </h1>


                <div className="prose">

                    <p>
                        Publicado:{" "}
                        {new Date(post.publishedAt).toLocaleDateString("es-MX")}
                    </p>


                    {Array.isArray(post.body) && (
                        <PortableText value={post.body} />
                    )}

                </div>

            </main>

            <Footer />

        </>
    );
}