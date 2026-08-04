import BlogPosts from "@/components/blog-posts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const revalidate = 0; // Sin caché, siempre datos frescos

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        <BlogPosts />
      </main>
      <Footer />
    </>
  );
}
