import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import { BlogPost, BlogListItem } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts')

interface BlogFrontmatter {
  title: string
  date: string
  excerpt: string
  author: string
  tags: string[]
  readingTime?: string
  coverImage?: string
}

function validateFrontmatter(data: any): BlogFrontmatter {
  if (!data.title || typeof data.title !== 'string') {
    throw new Error('Invalid or missing title in frontmatter')
  }
  if (!data.date || typeof data.date !== 'string') {
    throw new Error('Invalid or missing date in frontmatter')
  }
  if (!data.excerpt || typeof data.excerpt !== 'string') {
    throw new Error('Invalid or missing excerpt in frontmatter')
  }
  if (!data.author || typeof data.author !== 'string') {
    throw new Error('Invalid or missing author in frontmatter')
  }
  if (!Array.isArray(data.tags)) {
    data.tags = []
  }

  return {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    author: data.author,
    tags: data.tags.map(String),
    readingTime: typeof data.readingTime === 'string' ? data.readingTime : undefined,
    coverImage: typeof data.coverImage === 'string' ? data.coverImage : undefined,
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const frontmatter = validateFrontmatter(data)
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkHtml)
      .process(content)

    const htmlContent = processedContent.toString()
    const readingTime = frontmatter.readingTime || calculateReadingTime(content)

    return {
      slug,
      content: htmlContent,
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: frontmatter.excerpt,
      author: frontmatter.author,
      tags: frontmatter.tags,
      readingTime,
      coverImage: frontmatter.coverImage,
    }
  } catch (error) {
    console.error(`Error getting blog post ${slug}:`, error)
    return null
  }
}

// Alias for getAllBlogPosts to maintain compatibility
export const getAllPosts = getAllBlogPosts

export async function getAllBlogPosts(): Promise<BlogListItem[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const post = await getBlogPost(slug)
        if (!post) throw new Error(`Failed to load post ${slug}`)
        return post
      })
  )

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getAllBlogTags(): Promise<string[]> {
  const posts = await getAllBlogPosts()
  const tags = new Set<string>()
  
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })

  return Array.from(tags)
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}
