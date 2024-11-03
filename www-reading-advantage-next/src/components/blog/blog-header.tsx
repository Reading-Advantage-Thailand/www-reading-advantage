import { BlogPost } from '@/types/blog'
import Image from 'next/image'

interface BlogHeaderProps {
  post: BlogPost
}

export function BlogHeader({ post }: BlogHeaderProps) {
  return (
    <div className="space-y-4 pb-8 pt-6 md:space-y-6">
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <p className="text-xl text-muted-foreground">{post.excerpt}</p>
      </div>
      {post.coverImage && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
    </div>
  )
}
