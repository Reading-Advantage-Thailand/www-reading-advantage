import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    // Disable additional plugins for now to ensure compatibility
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone' as const,
  images: {
    domains: ['localhost'],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

export default withMDX(nextConfig)
