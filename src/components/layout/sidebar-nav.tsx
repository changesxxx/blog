import React, { useState, memo, useMemo, useContext } from 'react'

import { HiChevronRight, HiChevronDown } from 'react-icons/hi'
import { cn } from '@/lib/utils' // 保持 cn 的导入方式

// import { docsConfig } from '@/config/docs'

import { docsConfigContext } from '@/store/docsConfig'

type SidebarNavItem = {
  title: string
  href?: string
  external?: boolean
  disabled?: boolean
  items?: SidebarNavItem[]
  open?: boolean
}

//({ items, pathname }: Props

const SidebarNav = memo(() => {
  const docsConfig = useContext(docsConfigContext)

  const [menu, setMenu] = useState<SidebarNavItem[]>(docsConfig.sidebarNav)

  console.log('子页面重新渲染')

  function handleToggle(index: number) {
    setMenu(
      menu.map((m, i) => {
        if (i === index) {
          docsConfig.sidebarNav[i].open = !menu[index].open
          return {
            ...menu[index],
            open: !menu[index].open,
          }
        } else {
          return m
        }
      }),
    )
  }

  return (
    <div className="w-full">
      {menu.length
        ? menu.map((item, index) => (
            <div key={index} className="pb-8">
              {item.items ? (
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium flex justify-between">
                  <span>{item.title}</span>
                  <span
                    className="flex items-center cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    {menu[index].open ? <HiChevronDown /> : <HiChevronRight />}
                  </span>
                </h4>
              ) : (
                <a
                  href={item.href}
                  className="mb-1 rounded-md px-2 py-1 text-sm font-medium"
                >
                  {item.title}
                </a>
              )}

              {/* 列表 */}
              {menu[index].open && item.items?.length ? (
                <div
                  className={`grid grid-flow-row auto-rows-max text-sm pl-4`}
                >
                  {item.items.map((subItem, subIndex) =>
                    !subItem.disabled && subItem.href ? (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className={cn(
                          'flex w-full items-center rounded-md p-2 hover:underline',
                          {
                            // 'bg-muted': pathname === subItem.href,
                          },
                        )}
                        target={subItem.external ? '_blank' : ''}
                        rel={subItem.external ? 'noreferrer' : ''}
                      >
                        {subItem.title}
                      </a>
                    ) : (
                      <span
                        key={subIndex}
                        className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60"
                      >
                        {subItem.title}
                      </span>
                    ),
                  )}
                </div>
              ) : null}
            </div>
          ))
        : null}
    </div>
  )
})

export default SidebarNav
