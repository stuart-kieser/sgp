import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Normalize your public Payload base URL and helper to absolutize paths
const base = (process.env.NEXT_PUBLIC_PAYLOAD_URL || '').replace(/\/+$/, '') // strip trailing slash

export const toAbsolute = (maybePath?: string) => {
  if (!maybePath) return ''
  if (/^https?:\/\//i.test(maybePath)) return maybePath // already absolute
  // ensure single slash between base and path
  return `${base}${maybePath.startsWith('/') ? '' : '/'}${maybePath}`
}
