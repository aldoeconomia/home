import { client } from "@/lib/sanity";
import { NextResponse } from "next/server";

export const revalidate = 0; // Sin caché

export async function GET() {
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

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}
