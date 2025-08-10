// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import PhotoBarGlobalConf from './globals/PhotoBarGlobal'
import BrandsConf from './globals/BrandGlobal'
import GalleryGlobalConf from './globals/GalleryGlobal'
import VehiclesGlobalConf from './globals/VehilcesGlobal'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  cors: {
    origins: ['http://localhost:3000'],
  },
  collections: [Users, Media],
  globals: [PhotoBarGlobalConf, BrandsConf, GalleryGlobalConf, VehiclesGlobalConf],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.PAYLOAD_PUBLIC_DATABASE_URI,
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
