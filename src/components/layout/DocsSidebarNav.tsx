import React, { memo } from 'react'
import { cn } from '@/lib/utils'
import type { SidebarNavItem } from '@/types'

type Props = {
  menuItems: SidebarNavItem[]
  pathname?: string
  menuHandle: (menu: string) => void
}

const DocsSidebarNav = memo(({ menuItems, pathname, menuHandle }: Props) => {
  return (
    menuItems.length && (
      <div className="w-full">
        {menuItems.map((item) => (
          <div className={cn('pb-8')} key={item.title}>
            <h4
              className="mb-1 rounded-md px-2 py-1 text-sm font-medium"
              onClick={(e) => menuHandle(item.title)}
            >
              {item.title}
            </h4>

            {item.items?.length ? (
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {item.items.map((item) =>
                  !item.disabled && item.href ? (
                    <a
                      href={item.href}
                      className={cn(
                        'flex w-full menuItems-center rounded-md p-2 hover:underline',
                        {
                          'bg-muted': pathname === item.href,
                        },
                      )}
                      target={item.external ? '_blank' : ''}
                      rel={item.external ? 'noreferrer' : ''}
                      key={item.title}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span
                      className="flex w-full cursor-not-allowed menuItems-center rounded-md p-2 opacity-60"
                      key={item.title}
                    >
                      {item.title}
                    </span>
                  ),
                )}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    )
  )
})

export default DocsSidebarNav
