"use client";

import { BlogCard } from "@/components/blog/blog-card";
import { BlogListItem } from "@/types/blog";
import { useScopedI18n } from "@/locales/client";

interface RelatedPostsProps {
  posts: BlogListItem[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  const t = useScopedI18n("blog");

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">{t("relatedPosts")}</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
