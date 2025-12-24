import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
      }),
    )
    return config
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '6mb',
    },
  },
}

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
})
