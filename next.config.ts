import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ["next-international", "international-types"],
  output: 'standalone' as const,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  typescript: {
    // TODO: Re-enable once Next.js App Router types are fixed
    // See: https://github.com/vercel/next.js/issues/48022
    ignoreBuildErrors: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:locale/login',
        destination: '/:locale',
        permanent: true,
      },
    ]
  },
}

export default withMDX(nextConfig)
