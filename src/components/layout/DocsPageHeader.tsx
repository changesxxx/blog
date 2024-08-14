import React, { memo } from 'react'

import type { HTMLAttributes } from 'astro/types'

interface Props extends React.HTMLProps<HTMLDivElement> {
  heading: string
  text?: string
  className?: string
}

const DocsPageHeader = memo(({ heading, text, className, ...attrs }: Props) => {
  return (
    <>
      <div className={`space-y-4  ${className}`} {...attrs}>
        <h1 className="inline-block font-heading text-4xl">{heading}</h1>
        {text && <p className="text-muted-foreground">{text}</p>}
      </div>
      <hr className="my-4" />
    </>
  )
})

export default DocsPageHeader
