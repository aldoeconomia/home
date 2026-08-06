import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "../../sanity/lib/client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Qontrol | Seguridad industrial y tecnología",
    description:
        "Noticias, Comunicados Oficiales, eventos y novedades, innovación y tecnología aplicada a la seguridad industrial.",
};

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
    const posts = await client.fetch<SanityDocument[]>(
        POSTS_QUERY,
        {},
        options
    );

    return (
        <>
            <Navbar/>

            <main className="container mx-auto min-h-screen max-w-5xl px-8 pt-32">

                <h1 className="text-4xl font-bold mb-8">
                    Blog Qontrol
                </h1>

                <p className="mt-4 text-gray-600 mb-10">
                    Noticias, Comunicados Oficiales, eventos y novedades, innovación y tecnología aplicada a la seguridad industrial.
                </p>

                <ul className="flex flex-col gap-y-6">
                    {posts.map((post) => (
                        <li key={post._id}>
                            <Link href={`/blog/${post.slug.current}`}>
                                <h2 className="text-xl font-semibold hover:underline">
                                    {post.title}
                                </h2>

                                <p className="text-sm text-gray-500">
                                    {new Date(post.publishedAt)
                                        .toLocaleDateString("es-MX")}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>

            </main>

            <Footer/>
        </>
    );

}