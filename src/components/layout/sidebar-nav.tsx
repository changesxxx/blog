import React, { useState } from 'react'
import { HiChevronRight, HiChevronDown } from 'react-icons/hi'
import { cn } from '@/lib/utils' // 保持 cn 的导入方式

type SidebarNavItem = {
  title: string
  href?: string
  external?: boolean
  disabled?: boolean
  items?: SidebarNavItem[]
  open?: boolean
}

type Props = {
  items: SidebarNavItem[]
  pathname?: string
}

const SidebarNav = ({ items, pathname }: Props) => {
  const [menu, setMenu] = useState<SidebarNavItem[]>(items)

  function handleToggle(index: number) {
    setMenu(
      menu.map((m, i) => {
        if (i === index) {
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
      {items.length
        ? items.map((item, index) => (
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
              {/* <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium flex justify-between">
                <span>{item.title}</span>

                {item.items && (
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    {menu[index].open ? <HiChevronDown /> : <HiChevronRight />}
                  </div>
                )}
              </h4> */}

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
                            'bg-muted': pathname === subItem.href,
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
}

export default SidebarNav
