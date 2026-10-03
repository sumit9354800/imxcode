import { blogPosts } from "./blog";

export const featuredBlogPost =
  blogPosts.find((post) => post.featured) ?? blogPosts[0];