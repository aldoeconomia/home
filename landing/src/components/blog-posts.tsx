"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, Grid3x3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPosts, urlFor } from "@/lib/sanity";

function calculateReadTime(blocks: any[]): string {
  if (!blocks) return "1 min read";
  const text = blocks
    .map((block) => {
      if (block._type === "block") {
        return block.children.map((child: any) => child.text).join(" ");
      }
      return "";
    })
    .join(" ");
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        const validPosts =
          data?.filter((post: any) => post.slug?.current) || [];
        setPosts(validPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="mx-auto max-w-6xl px-6 py-16">Cargando...</div>;
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-6 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">No hay posts aún</h2>
          <p className="text-muted-foreground text-lg">
            Vuelve pronto para leer nuevos artículos
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 pb-32 md:pb-16">
      <BlogView posts={posts} />
    </div>
  );
}

function BlogView({ posts }: { posts: any[] }) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    // Set initial view mode based on screen size
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setViewMode("list");
    }
  }, []);

  return (
    <div>
      {/* View Toggle */}
      <div className="flex gap-2 mb-8">
        <Button
          variant={viewMode === "grid" ? "default" : "outline"}
          size="sm"
          onClick={() => setViewMode("grid")}
          className={`gap-2 font-medium ${
            viewMode === "grid"
              ? "bg-primary text-white"
              : "bg-white text-black border border-black hover:bg-gray-50"
          }`}
        >
          <Grid3x3 className="h-4 w-4" />
          Cards
        </Button>
        <Button
          variant={viewMode === "list" ? "default" : "outline"}
          size="sm"
          onClick={() => setViewMode("list")}
          className={`gap-2 font-medium ${
            viewMode === "list"
              ? "bg-primary text-white"
              : "bg-white text-black border border-black hover:bg-gray-50"
          }`}
        >
          <List className="h-4 w-4" />
          Lista
        </Button>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post: any) => {
            const imageUrl = post.image ? urlFor(post.image) : null;
            const readTime = calculateReadTime(post.body);
            const formattedDate = formatDate(post.publishedAt);

            return (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group"
              >
                <div
                  className={`flex flex-col overflow-hidden border border-border/50 bg-card backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/50 cursor-pointer ${
                    imageUrl ? "h-full" : ""
                  }`}
                >
                  {imageUrl && (
                    <div className="relative overflow-hidden bg-muted aspect-video">
                      <Image
                        alt={post.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        src={imageUrl}
                      />
                    </div>
                  )}
                  <div
                    className={`flex flex-col justify-between flex-1 ${
                      imageUrl ? "p-4" : "p-3"
                    }`}
                  >
                    <div>
                      <div className="mb-2 flex items-center gap-2 flex-wrap">
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary border-0 text-xs"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-1"></span>
                          Blog
                        </Badge>
                        <span className="text-xs text-muted-foreground font-semibold">
                          {readTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground pt-3 border-t border-border/30">
                      <Calendar className="h-3 w-3 text-primary" />
                      <time>{formattedDate}</time>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <div className="space-y-2">
          {posts.map((post: any) => {
            const formattedDate = formatDate(post.publishedAt);

            return (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="flex items-center justify-between p-3 border hover:bg-muted/50 transition-colors group"
              >
                <h3 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1 flex-1">
                  {post.title}
                </h3>
                <time className="text-xs text-muted-foreground ml-4 flex-shrink-0">
                  {formattedDate}
                </time>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
