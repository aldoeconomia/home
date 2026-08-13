import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client"; // Ajusta la ruta a tu cliente de Sanity

interface PostSlug {
    slug: string;
    _updatedAt?: string;
    publishedAt?: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.theqontrol.com";

    // 1. Consultar a Sanity solo los slugs y fechas de los artículos
    const POSTS_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt,
    publishedAt
  }`;

    const posts = await client.fetch<PostSlug[]>(POSTS_SLUGS_QUERY);

    // 2. Mapear cada post al formato de Sitemap que espera Google
    const blogPostsSitemap: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post._updatedAt || post.publishedAt || Date.now()),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    // 3. Páginas estáticas
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contacto`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/terminos`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.5,
        },
    ];

    // 4. Retornar la unión de páginas estáticas + artículos dinámicos
    return [...staticPages, ...blogPostsSitemap];
}