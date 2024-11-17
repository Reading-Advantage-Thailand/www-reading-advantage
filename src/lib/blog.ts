import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { BlogPost, BlogListItem } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'src/app/[locale]/(marketing)/blog/posts')

interface BlogFrontmatter {
  title: string
  date: string
  excerpt: string
  author: string
  tags: string[]
  readingTime?: string
  coverImage?: string
}

function validateFrontmatter(data: unknown): BlogFrontmatter {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid frontmatter data')
  }

  const d = data as Record<string, unknown>

  if (!d.title || typeof d.title !== 'string') {
    throw new Error('Invalid or missing title in frontmatter')
  }
  if (!d.date || typeof d.date !== 'string') {
    throw new Error('Invalid or missing date in frontmatter')
  }
  if (!d.excerpt || typeof d.excerpt !== 'string') {
    throw new Error('Invalid or missing excerpt in frontmatter')
  }
  if (!d.author || typeof d.author !== 'string') {
    throw new Error('Invalid or missing author in frontmatter')
  }

  const tags = Array.isArray(d.tags) ? d.tags : []

  return {
    title: d.title,
    date: d.date,
    excerpt: d.excerpt,
    author: d.author,
    tags: tags.map(String),
    readingTime: typeof d.readingTime === 'string' ? d.readingTime : undefined,
    coverImage: typeof d.coverImage === 'string' ? d.coverImage : undefined,
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
      .use(remarkGfm) // Add GitHub Flavored Markdown support
      .use(remarkHtml, { sanitize: false }) // Disable sanitization to allow custom HTML
      .use(rehypeSlug) // Add IDs to headings
      .use(rehypeAutolinkHeadings) // Add anchor links to headings
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
