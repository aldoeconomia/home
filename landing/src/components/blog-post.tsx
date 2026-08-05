import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, urlFor } from "@/lib/sanity";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPost({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold">Post no encontrado</h1>
        <p className="text-black mt-4">
          Lo sentimos, no pudimos encontrar el post que buscabas.
        </p>
      </div>
    );
  }

  const imageUrl = post.image ? urlFor(post.image) : null;
  const formattedDate = formatDate(post.publishedAt);

  if (imageUrl) {
    return (
      <article className="max-w-4xl mx-auto">
        {/* Header with Title and Date */}
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-8 sm:pt-32 sm:pb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <time className="text-base text-brand">
            {formattedDate}
          </time>
        </div>

        {/* Image Below Title */}
        <div className="max-w-4xl mx-auto px-6 mb-8 sm:mb-12">
          <div className="relative w-full h-80">
            <Image
              alt={post.title}
              fill
              className="object-contain"
              src={imageUrl}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 pb-20 sm:pb-24">
          {post.body && (
            <div className="prose prose-sm max-w-none prose-headings:font-bold prose-headings:text-lg prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-p:text-sm prose-p:leading-relaxed">
              <PortableText value={post.body} />
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-20 sm:py-24 md:py-28">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          {post.title}
        </h1>
        <time className="text-sm text-black">{formattedDate}</time>
      </div>

      {/* Content */}
      {post.body && (
        <div className="prose prose-sm max-w-none prose-headings:font-bold prose-headings:text-lg prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:text-sm prose-p:leading-relaxed">
          <PortableText value={post.body} />
        </div>
      )}
    </article>
  );
}
