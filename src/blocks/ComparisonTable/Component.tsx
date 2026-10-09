import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { ComparisonTableBlock as ComparisonTableBlockProps } from '@/payload-types'

export const ComparisonTableBlock: React.FC<ComparisonTableBlockProps> = ({
  columns,
  eyebrow,
  intro,
  motion,
  rows,
  title,
}) => {
  return (
    <section className="container">
      <SectionHeader
        className="mb-10"
        eyebrow={eyebrow}
        intro={intro}
        motion={resolveMotionPreset(motion?.introAnimation)}
        title={title}
      />
      <div className="overflow-x-auto rounded-[2rem] border border-border bg-card/70 shadow-sm">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 text-left text-sm uppercase tracking-[0.16em] text-muted-foreground">Feature</th>
              {(columns || []).map((column, index) => (
                <th
                  className="px-6 py-4 text-left text-sm uppercase tracking-[0.16em] text-muted-foreground"
                  data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
                  key={index}
                  style={motionDelayStyle(index, motion?.stagger ?? 60)}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(rows || []).map((row, rowIndex) => (
              <tr className="border-b border-border/60 last:border-b-0" key={rowIndex}>
                <td className="px-6 py-5 font-medium">{row.label}</td>
                {(row.cells || []).map((cell, cellIndex) => (
                  <td className="px-6 py-5 text-muted-foreground" key={cellIndex}>
                    {cell.value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
