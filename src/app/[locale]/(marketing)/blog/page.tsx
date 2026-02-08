import { Metadata } from 'next'
import { getAllPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogListItem } from "@/types/blog"
import HeroSection from "@/components/marketing/hero-section"

export const metadata: Metadata = {
  title: 'Blog | Reading Advantage',
  description: 'Educational insights, learning strategies, and updates from Reading Advantage. Explore our articles about education technology, learning methods, and teaching tips.',
  openGraph: {
    title: 'Reading Advantage Blog',
    description: 'Educational insights, learning strategies, and updates from Reading Advantage',
    type: 'website',
    images: ['/images/reading-advantage-demo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reading Advantage Blog',
    description: 'Educational insights, learning strategies, and updates from Reading Advantage',
    images: ['/images/reading-advantage-demo.png'],
  },
  metadataBase: new URL('http://localhost:3000'),
}

export default async function BlogPage() {
  const posts: BlogListItem[] = await getAllPosts()

  return (
    <main>
      <HeroSection
        title="Blog"
        description="Educational insights, learning strategies, and product updates from Reading Advantage."
        ctaButton={{
          text: "Contact Us",
          href: "/contact",
          variant: "primary",
        }}
        height="medium"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
