import { CMSLink } from '@/components/Link'
import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { PricingGridBlock as PricingGridBlockProps } from '@/payload-types'

export const PricingGridBlock: React.FC<PricingGridBlockProps> = ({ eyebrow, intro, motion, plans, title }) => {
  return (
    <section className="container">
      <SectionHeader
        className="mb-10"
        eyebrow={eyebrow}
        intro={intro}
        motion={resolveMotionPreset(motion?.introAnimation)}
        title={title}
        align="center"
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {(plans || []).map((plan, index) => (
          <article
            className={`rounded-[2rem] border p-6 shadow-sm ${
              plan.featured
                ? 'border-foreground bg-foreground text-background'
                : 'border-border bg-card/80 text-foreground'
            }`}
            data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
            key={index}
            style={motionDelayStyle(index, motion?.stagger ?? 120)}
          >
            <div className="space-y-3">
              <p className={`text-sm uppercase tracking-[0.2em] ${plan.featured ? 'text-background/70' : 'text-muted-foreground'}`}>
                {plan.name}
              </p>
              <p className="text-4xl font-semibold tracking-tight">{plan.price}</p>
              {plan.billingNote ? (
                <p className={`text-sm ${plan.featured ? 'text-background/70' : 'text-muted-foreground'}`}>{plan.billingNote}</p>
              ) : null}
              {plan.summary ? <p className={`text-sm leading-7 ${plan.featured ? 'text-background/80' : 'text-muted-foreground'}`}>{plan.summary}</p> : null}
            </div>
            <div className={`my-6 h-px ${plan.featured ? 'bg-background/15' : 'bg-border'}`} />
            <ul className="space-y-3 text-sm">
              {(plan.features || []).map((feature, featureIndex) => (
                <li className="flex gap-3" key={featureIndex}>
                  <span className={plan.featured ? 'text-background/70' : 'text-muted-foreground'}>•</span>
                  <span>{feature.label}</span>
                </li>
              ))}
            </ul>
            {plan.links?.[0]?.link ? (
              <div className="mt-6">
                <CMSLink
                  appearance={plan.featured ? 'outline' : plan.links[0].link.appearance === 'outline' ? 'outline' : 'default'}
                  {...plan.links[0].link}
                />
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
