import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-international", "international-types"],
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
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
}

export default withMDX(nextConfig)
