import React, { memo, useState } from 'react'
import { motion } from 'framer-motion'


interface Tab {
  name: string
  icon: string
}
interface TabsProps {
  tabs: Tab[]
  activeTab: string
  tabClickHandle: (tab: string) => void
}

// 图片路径的基本前缀
const basePath = '/assets/images/page/home/'

const AnimatedTabs = memo(({ tabs, activeTab, tabClickHandle }: TabsProps) => {


  return (
    <div
      className=" py-6  mt-8"
    >
      <div className="flex space-x-1 h-20  justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => tabClickHandle(tab.name)}
            className="w-20 relative  px-3 py-3    flex justify-center"
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {activeTab === tab.name && (
              <>
                <motion.div
                  className="absolute top-[-67px] left-1/4 w-8 h-14 bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${basePath}guide.svg)`,
                    backgroundSize: '100% auto',
                  }}
                  initial={{ opacity: 0, x: '-50%' }}
                  animate={{ opacity: 1, x: '-25%' }} // 动画效果
                  exit={{ opacity: 0, x: '0' }} // 退出动画
                  transition={{ duration: 0.4, delay: 0.3 }} // 动画持续时间
                />
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 technology-stack-active"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              </>
            )}
            <img
              className="w-8 h-8"
              src={`${basePath}${tab.name}.svg`}
              alt={tab.name}
            />
          </button>
        ))}
      </div>
    </div>
  )
})

export default AnimatedTabs