import React, { memo, useCallback, useState } from 'react'


import technologyStackResource from '@/data/technologyStackResource'

import AnimatedTabs from '@/components/AnimatedTabs'
import TechnologyStackResource from '@/components/TechnologyStackResource'

// /assets/images/page/home/line.svg
const TechnologyStack = memo(() => {


  const technologyStack = technologyStackResource.map(technologyStack => ({ name: technologyStack.name, icon: technologyStack.icon }))

  const [activeTab, setActiveTab] = useState(technologyStack[0].name)

  const resource = technologyStackResource.find(technologyStack => technologyStack.name == activeTab)!.resource


  const tabClickHandle = useCallback(function (tab: string) {
    setActiveTab(tab)
  }, [])



  return (
    <div>

      <div className="flex flex-col w-full md:items-center md:text-center">


        <div className='flex px-20 lg:gap-6 relative'>

          <img src="/assets/images/page/home/small_circle.svg" alt="" style={{ width: '22px' }} className='inline-block  fill-current  hidden sm:block self-end mb-3 mr-[1.9375rem] text-primary-500' />

          <div className='flex'>
            <div className='flex justify-center items-center mb-4'>
              <h3 className="font-semibold heading-3xl !font-bold text-1xl text-center  sm:text-2xl lg:text-4xl md:mb-4">
                技术栈/
              </h3>

            </div>

            <div className='flex justify-center items-center mb-4 relative'>
              <h3 className="font-semibold heading-3xl !font-bold text-1xl text-center  sm:text-2xl lg:text-4xl md:mb-4">
                最佳资料
              </h3>
              <img src="/assets/images/page/home/line.svg" alt="" className='absolute bottom-0' />
            </div>
          </div>



          <img src="/assets/images/page/home/small_circle1.svg" alt="" style={{ width: '22px' }} className='absolute top-0 right-0' />


        </div>

        <div className="text-lg text-grey-500 mb-12 text-center">
          这是我目前掌握的技术栈,以及在我的学习过程寻找到还不错的学习资料.
        </div>

      </div>
      <AnimatedTabs tabs={technologyStack} activeTab={activeTab} tabClickHandle={tabClickHandle}></AnimatedTabs>

      <TechnologyStackResource resourceList={resource}></TechnologyStackResource>


    </div>

  )
})

export default TechnologyStack