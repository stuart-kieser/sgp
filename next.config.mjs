import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
}

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
  allowedDevOrigins: ['http://localhost:3000', 'http://13.244.67.175'], // ← add your domain(s) here
})
