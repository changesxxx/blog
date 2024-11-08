import React, { memo, useState } from 'react'
import { motion } from 'framer-motion'

let tabs = [{ id: 'html' }, { id: 'js' }, { id: 'react' }, { id: 'vue' }]

// 图片路径的基本前缀
const basePath = '/assets/img/'

const AnimatedTabs = memo(() => {
  let [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div
      className=" h-[32rem] py-6 px-6 "
      // style={{ backgroundImage: `url('/assets/img/blue_sky.jpg')` }}
    >
      <div className="flex space-x-1 h-20 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            // hover:text-white/60 overflow-hidden
            className={`${
              activeTab === tab.id ? '' : ''
            } w-20 relative  px-3 py-3    flex justify-center `}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
            // rounded-lg
          >
            {activeTab === tab.id && (
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
                  className="absolute inset-0 z-10 active"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              </>
            )}
            <img
              className="w-8 h-8"
              src={`${basePath}${tab.id}.svg`}
              alt={tab.id}
            />
          </button>
        ))}
      </div>
    </div>
  )
})

export default AnimatedTabs
