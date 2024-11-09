import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogListItem } from "@/types/blog";

interface Props {
  params: { locale: string }
}

export default async function BlogPage({ params: { locale } }: Props) {
  const posts: BlogListItem[] = await getAllPosts(locale);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
