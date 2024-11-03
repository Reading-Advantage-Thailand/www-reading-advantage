import { getBlogPost } from '@/lib/blog'
import { BlogHeader } from '@/components/blog/blog-header'
import { BlogTags } from '@/components/blog/blog-tags'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Reading Advantage Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: Props) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <BlogHeader title={post.title} date={post.date} author={post.author} readingTime={post.readingTime} />
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <BlogTags tags={post.tags} />
    </article>
  )
}
