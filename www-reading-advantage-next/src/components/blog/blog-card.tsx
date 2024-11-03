import Link from 'next/link'
import Image from 'next/image'
import { BlogListItem } from '@/types/blog'

interface BlogCardProps {
  post: BlogListItem
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      {post.coverImage && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        <div className="flex items-center gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
