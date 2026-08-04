import BlogPost from "@/components/blog-post";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const revalidate = 0; // Sin caché, siempre datos frescos

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <Navbar variant="page" />
      <main className="min-h-screen bg-white dark:bg-slate-950">
        <BlogPost slug={slug} />
      </main>
    </>
  );
}
