import { blogPosts } from "./blog";

export function getRelatedPosts(currentSlug: string) {
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);
}