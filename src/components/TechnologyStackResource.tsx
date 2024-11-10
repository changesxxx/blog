import React, { memo } from 'react'

import ResourceItemV1 from '@/components/ResourceItemV1'

interface Resource {
  explain: string
  icon: string
  link: string
  title: string
}

interface ResourceListProps {
  resourceList: Resource[]
}

const TechnologyStackResource = memo(({ resourceList }: ResourceListProps) => {
  return (
    <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4'>
      {
        resourceList.map(resource => <ResourceItemV1 resource={resource} key={resource.title}></ResourceItemV1>)
      }
    </div>
  )
})

export default TechnologyStackResource