import Link from 'next/link'

import { Media } from '@/components/Media'
import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { TeamGridBlock as TeamGridBlockProps } from '@/payload-types'

export const TeamGridBlock: React.FC<TeamGridBlockProps> = ({ eyebrow, intro, members, motion, title }) => {
  return (
    <section className="container">
      <SectionHeader
        className="mb-10"
        eyebrow={eyebrow}
        intro={intro}
        motion={resolveMotionPreset(motion?.introAnimation)}
        title={title}
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {(members || []).map((member, index) => (
          <article
            className="overflow-hidden rounded-[2rem] border border-border bg-card/75 shadow-sm"
            data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
            key={index}
            style={motionDelayStyle(index, motion?.stagger ?? 100)}
          >
            {member.photo && typeof member.photo === 'object' ? (
              <Media imgClassName="aspect-[4/5] w-full object-cover" resource={member.photo} />
            ) : (
              <div className="flex aspect-[4/5] items-center justify-center bg-muted text-4xl font-semibold">
                {member.name?.[0]}
              </div>
            )}
            <div className="space-y-3 p-5">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">{member.role}</p>
              {member.bio ? <p className="text-sm leading-7 text-muted-foreground">{member.bio}</p> : null}
              {member.links?.length ? (
                <div className="flex flex-wrap gap-3 text-sm">
                  {member.links.map(({ link }, linkIndex) =>
                    link.url ? (
                      <Link className="underline underline-offset-4" href={link.url} key={linkIndex}>
                        {link.label}
                      </Link>
                    ) : null,
                  )}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
