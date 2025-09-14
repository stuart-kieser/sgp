import React from 'react'

type LexicalSerialized =
  | { root: { type: 'root'; children: any[] } }
  | { root?: never; [k: string]: any } // tolerate partials
  | any[]

function safeParse(input: unknown): any {
  if (typeof input === 'string') {
    try {
      return JSON.parse(input)
    } catch {
      return input
    }
  }
  return input
}

function getChildrenArray(doc: any): any[] {
  // Accept:
  // - { root: { children: [...] } }
  // - raw array of nodes [...]
  if (Array.isArray(doc)) return doc
  if (doc?.root?.children && Array.isArray(doc.root.children)) return doc.root.children
  return []
}

// Bitmask helpers for Lexical "format" on text nodes
const F = {
  BOLD: 1,
  ITALIC: 2,
  STRIKETHROUGH: 4,
  UNDERLINE: 8,
  CODE: 16,
  SUBSCRIPT: 32,
  SUPERSCRIPT: 64,
  HIGHLIGHT: 128,
}

function renderText(node: any, key: React.Key) {
  let content: React.ReactNode = node.text ?? ''

  const fmt = Number(node.format ?? 0)

  if (fmt & F.CODE)
    content = (
      <code className="px-1 rounded bg-white/10" key={`${key}-code`}>
        {content}
      </code>
    )
  if (fmt & F.UNDERLINE) content = <u key={`${key}-u`}>{content}</u>
  if (fmt & F.STRIKETHROUGH) content = <s key={`${key}-s`}>{content}</s>
  if (fmt & F.ITALIC) content = <em key={`${key}-em`}>{content}</em>
  if (fmt & F.BOLD) content = <strong key={`${key}-strong`}>{content}</strong>
  if (fmt & F.SUBSCRIPT) content = <sub key={`${key}-sub`}>{content}</sub>
  if (fmt & F.SUPERSCRIPT) content = <sup key={`${key}-sup`}>{content}</sup>
  // HIGHLIGHT can be a background; if needed:
  if (fmt & F.HIGHLIGHT) content = <mark key={`${key}-mark`}>{content}</mark>

  return content
}

function renderNodes(nodes: any[], path = '0'): React.ReactNode {
  return nodes.map((node, i) => {
    const key = `${path}.${i}`

    // Ensure children are an array when present
    const kids: any[] = Array.isArray(node?.children) ? node.children : []

    switch (node?.type) {
      case 'paragraph': {
        // Empty paragraphs => margin but no text
        const hasText = kids?.some((k) => k?.type === 'text' && k?.text?.length)
        return (
          <p className={`whitespace-pre-wrap break-words ${hasText ? 'my-3' : 'my-2'}`} key={key}>
            {renderNodes(kids, key)}
          </p>
        )
      }
      case 'text':
        return <React.Fragment key={key}>{renderText(node, key)}</React.Fragment>

      case 'linebreak':
        return <br key={key} />

      case 'link': {
        const url = node.url || '#'
        const rel = node.rel || 'noreferrer noopener'
        const target = node.target || '_blank'
        return (
          <a href={url} rel={rel} target={target} className="underline hover:opacity-80" key={key}>
            {renderNodes(kids, key)}
          </a>
        )
      }

      case 'quote':
        return (
          <blockquote
            key={key}
            className="border-l-4 border-white/20 pl-4 my-4 italic text-white/90"
          >
            {renderNodes(kids, key)}
          </blockquote>
        )

      case 'heading': {
        // Lexical exports headings with node.tag like 'h1'...'h6'
        const allowedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
        const tagName = allowedTags.includes(node.tag) ? node.tag : 'h2'
        const size =
          tagName === 'h1'
            ? 'text-3xl sm:text-4xl'
            : tagName === 'h2'
              ? 'text-2xl sm:text-3xl'
              : tagName === 'h3'
                ? 'text-xl sm:text-2xl'
                : 'text-lg sm:text-xl'
        return React.createElement(
          tagName,
          {
            key: key,
            className: `font-sabre ${size} leading-tight tracking-tight my-3 break-words`,
          },
          renderNodes(kids, key),
        )
      }

      case 'list': {
        // Supports ordered (ol) and unordered (ul), including start offset
        const isOrdered = node.tag === 'ol' || node.listType === 'number'
        const ListTag = (isOrdered ? 'ol' : 'ul') as 'ol' | 'ul'
        const start = isOrdered && typeof node.start === 'number' ? node.start : undefined
        return (
          <ListTag
            key={key}
            start={start as number | undefined}
            className={`${isOrdered ? 'list-decimal' : 'list-disc'} pl-5 sm:pl-6 my-3 space-y-1`}
          >
            {renderNodes(kids, key)}
          </ListTag>
        )
      }

      case 'listitem':
        return <li key={key}>{renderNodes(kids, key)}</li>

      default:
        // Unknown node type: render its children to avoid dropping content
        return <React.Fragment key={key}>{renderNodes(kids, key)}</React.Fragment>
    }
  })
}

export default function TextBlock({
  block,
}: {
  block: { contentHeader: string; contentText: string | LexicalSerialized | any[]; width: string }
}) {
  const raw = safeParse(block.contentText)
  const children = getChildrenArray(raw)

  return (
    <section className="text-white">
      <h1 className="font-sabre text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight break-words">
        {block.contentHeader}
      </h1>

      <div className={`mt-3 sm:mt-4 ${block.width}`}>
        {children.length ? (
          renderNodes(children)
        ) : (
          <p className="whitespace-pre-wrap break-words opacity-80">
            {/* Fallback if nothing parsed */}
            {(typeof block.contentText === 'string' && block.contentText) || ''}
          </p>
        )}
      </div>
    </section>
  )
}
