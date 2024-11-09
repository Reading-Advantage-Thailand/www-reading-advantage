import { getBlogPost } from "@/lib/blog";
import { BlogHeader } from "@/components/blog/blog-header";
import { BlogTags } from "@/components/blog/blog-tags";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: { 
    slug: string;
    locale: string;
  }
}

export async function generateMetadata({ params }: Props) {
  const post = await getBlogPost(params.slug, params.locale);
  if (!post) return {};

  return {
    title: `${post.title} | Reading Advantage Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Reading Advantage Blog`,
      description: post.excerpt,
      url: `https://reading-advantage.com/${params.locale}/blog/${params.slug}`
    }
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getBlogPost(params.slug, params.locale);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <BlogHeader 
        title={post.title} 
        date={post.date} 
        author={post.author} 
        readingTime={post.readingTime} 
      />
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          width={1200}
          height={400}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <BlogTags tags={post.tags} />
    </article>
  );
}
