import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "km94b5r9";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

export const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
  token,
});

const builder = imageUrlBuilder({ projectId, dataset });

export function urlFor(source: any) {
  if (!source) return null;
  try {
    return builder.image(source).url();
  } catch (error) {
    console.error("Error building image URL:", error);
    return null;
  }
}

export async function getPosts() {
  try {
    const posts = await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        image,
        body
      }`,
    );
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        publishedAt,
        image,
        body
      }`,
      { slug },
    );
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
