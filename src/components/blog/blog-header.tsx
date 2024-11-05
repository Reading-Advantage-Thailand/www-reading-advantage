import { BlogHeaderProps } from '@/types/blog'

export function BlogHeader({ title, date, author, readingTime }: BlogHeaderProps) {
  return (
    <div className="space-y-4 pb-8 pt-6 md:space-y-6">
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{date}</span>
          <span>•</span>
          <span>{readingTime}</span>
          <span>•</span>
          <span>By {author}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      </div>
    </div>
  )
}
