import BlogHero from "@/components/blog/BlogHero";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogLatest from "@/components/blog/BlogLatest";

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogFeatured />
      <BlogLatest />
    </main>
  );
}