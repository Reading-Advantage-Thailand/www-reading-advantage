import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
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
  typescript: {
    // TODO: Re-enable once Next.js App Router types are fixed
    // See: https://github.com/vercel/next.js/issues/48022
    ignoreBuildErrors: true,
  },
}

export default withMDX(nextConfig)
