// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const secret = url.searchParams.get('secret')
  const path = url.searchParams.get('path')

  if (secret !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }
  if (!path) {
    return NextResponse.json({ message: 'Missing path' }, { status: 400 })
  }

  try {
    // This tells Next.js to invalidate the cache for that path
    revalidatePath(path)
    return NextResponse.json({ revalidated: true })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: String(err) }, { status: 500 })
  }
}
