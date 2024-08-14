import React, { memo, useEffect, useRef, useState } from 'react'

import { MdxComponents } from '@/components/content/mdx-components'

// import Content from '@/content/docs/web-introduction/html.mdx'

import { getCollection, type CollectionEntry } from 'astro:content'

type Props = {
  docSlug: string
}

const DocContent = memo(({ docSlug }: Props) => {
  // const [mdxContent, setMdxContent] = useState<any>(null)

  const mdxContent = useRef<any>()

  useEffect(() => {
    const fetchDoc = async () => {
      const docs = await getCollection('docs')

      const doc = docs.find((d) => d.slug === docSlug)!

      console.log('doc:', docSlug, doc)
    }

    fetchDoc()
  }, [docSlug])

  return <>123</>
})

export default DocContent
