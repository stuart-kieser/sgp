// app/vehicles/[id]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Vehicle } from '@/payload-types'

export const dynamic = 'force-dynamic'

type VehicleResponse = Vehicle & {
  photos?: {
    id: number
    alt: string | null
    updatedAt: string
    createdAt: string
    url: string
    thumbnailURL: string | null
    filename: string
    mimeType: string
    filesize: number
    width: number
    height: number
    focalX: number
    focalY: number
  } | null
}

async function getVehicle(id: string): Promise<VehicleResponse> {
  const res = await fetch(`${process.env.PAYLOAD_PUBLIC_API_URL}/api/vehicles/${id}`, {
    cache: 'no-store',
    next: { revalidate: 0 },
  })
  if (!res.ok) throw new Error(`Failed to fetch vehicle ${id}`)
  return res.json()
}

function fmt(date?: string | null) {
  if (!date) return ''
  try {
    return new Date(date).toLocaleString()
  } catch {
    return date
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params

  let vehicle: VehicleResponse | null = null
  try {
    vehicle = await getVehicle(id)
  } catch {
    notFound()
  }
  if (!vehicle) notFound()

  const {
    make,
    model,
    year,
    engineType,
    transmission,
    drivetrain,
    modifications = [],
    notes,
    photos,
    createdAt,
    updatedAt,
  } = vehicle

  const imgSrc = photos?.url ?? ''
  const imgAlt = photos?.alt ?? ([make, model, year].filter(Boolean).join(' ') || 'Vehicle photo')
  const imgWidth = photos?.width ?? 960
  const imgHeight = photos?.height ?? 540

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6">
      {/* Page header sits above the two-column layout so it appears first on mobile too */}
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          {make} {model} {year ? `(${year})` : ''}
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500">
          Created: {fmt(createdAt)} • Updated: {fmt(updatedAt)}
        </p>
      </header>

      {/* Responsive: single column by default, two columns on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* LEFT: Image (sticks to the left on desktop) */}
        <aside className="lg:col-span-5">
          {imgSrc ? (
            <div className="relative bg-neutral-100 rounded-2xl overflow-hidden shadow lg:sticky lg:top-6">
              <Image
                src={imgSrc}
                alt={imgAlt}
                width={imgWidth}
                height={imgHeight}
                className="w-full h-auto object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              {/* Optional file meta */}
              <div className="px-4 py-3 text-xs text-neutral-600 border-t">
                {photos?.filename ? photos.filename : null}
                {photos?.mimeType ? ` • ${photos.mimeType}` : null}
                {photos?.filesize ? ` • ${photos.filesize} bytes` : null}
              </div>
            </div>
          ) : (
            <div className="h-64 bg-neutral-100 rounded-2xl grid place-items-center text-neutral-400">
              No photo
            </div>
          )}
        </aside>

        {/* RIGHT: Content */}
        <main className="lg:col-span-7 space-y-8">
          {/* Specs */}
          <section>
            <h2 className="text-lg sm:text-xl font-medium mb-3">Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Spec label="Make" value={make} />
              <Spec label="Model" value={model} />
              <Spec label="Year" value={year?.toString()} />
              <Spec label="Engine Type" value={engineType} />
              <Spec label="Transmission" value={transmission} />
              <Spec label="Drivetrain" value={drivetrain?.toUpperCase()} />
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-lg sm:text-xl font-medium mb-3">Modifications</h2>
            {modifications!.length === 0 ? (
              <p className="text-neutral-500">No modifications listed yet.</p>
            ) : (
              <ul className="space-y-3">
                {modifications!.map((mod: any, i: number) => (
                  <li key={i} className="border rounded-xl p-4">
                    <div className="font-medium">{mod.type}</div>
                    {mod.description ? (
                      <p className="text-sm text-neutral-600 mt-1">{mod.description}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Notes */}
          <section>
            <h2 className="text-lg sm:text-xl font-medium mb-3">Build Notes</h2>
            {notes ? (
              <div className="prose max-w-none">{notes}</div>
            ) : (
              <p className="text-neutral-500">No notes yet.</p>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}

function Spec({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null
  return (
    <div className="border rounded-2xl p-4">
      <div className="text-[10px] sm:text-xs uppercase tracking-wide text-neutral-500">{label}</div>
      <div className="mt-1 text-sm sm:text-base">{value}</div>
    </div>
  )
}
