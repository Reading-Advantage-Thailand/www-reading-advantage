import { getBlogPost } from "@/lib/blog"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogTags } from "@/components/blog/blog-tags"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const post = await getBlogPost(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Reading Advantage Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.coverImage ? [post.coverImage] : [],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
    metadataBase: new URL('http://localhost:3000'),
  }
}

async function BlogPost(props: Props) {
  const { slug } = await props.params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
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
        className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:list-disc prose-ol:list-decimal"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <BlogTags tags={post.tags} />
    </article>
  )
}

export default BlogPost
