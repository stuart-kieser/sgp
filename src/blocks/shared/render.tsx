import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'

type SectionHeaderProps = {
  eyebrow?: string | null
  intro?: any
  title: string
  className?: string
  inverse?: boolean
  align?: 'left' | 'center'
  motion?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  intro,
  title,
  className,
  inverse = false,
  align = 'left',
  motion,
}) => {
  return (
    <div
      className={cn(
        'space-y-4',
        {
          'max-w-3xl': align === 'left',
          'mx-auto max-w-3xl text-center': align === 'center',
        },
        className,
      )}
      data-motion={motion}
    >
      {eyebrow ? (
        <p
          className={cn('text-sm font-medium uppercase tracking-[0.24em]', {
            'text-muted-foreground': !inverse,
            'text-background/65': inverse,
          })}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {intro ? (
        <RichText
          className={cn({
            'text-muted-foreground': !inverse,
            'text-background/75 dark:prose-invert': inverse,
          })}
          data={intro}
          enableGutter={false}
        />
      ) : null}
    </div>
  )
}
