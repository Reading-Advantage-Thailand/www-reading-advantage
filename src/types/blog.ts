export interface BlogPost {
  slug: string
  content: string
  title: string
  date: string
  excerpt: string
  author: string
  tags: string[]
  readingTime: string
  coverImage?: string
}

// Instead of using Omit, explicitly define the interface
export interface BlogListItem {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  tags: string[]
  readingTime: string
  coverImage?: string
}

export interface BlogHeaderProps {
  title: string
  date: string
  author: string
  readingTime: string
}

export interface BlogTagsProps {
  tags: string[]
}
