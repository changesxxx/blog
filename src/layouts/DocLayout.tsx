import React, { memo, useState } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import DocsSidebarNav from '@/components/layout/DocsSidebarNav'
import DocsPageHeader from '@/components/layout/DocsPageHeader'
import DocContent from '@/components/layout/DocContent'

import { docsConfig } from '@/config/docs'

import { FaChevronRight } from 'react-icons/fa'

function firstMenu() {
  return docsConfig.sidebarNav[0].href!
}

/* type Props = {
  children: any
}
 */
const DocLayout = memo(() => {
  const [currentMenu, setCurrentMenu] = useState<string>(firstMenu)

  function currentMenuHandle(menu: string) {
    setCurrentMenu(menu)
  }

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea className="h-full py-6 pr-6 lg:py-8">
        <DocsSidebarNav
          menuItems={docsConfig.sidebarNav}
          menuHandle={currentMenuHandle}
          currentMenu={currentMenu}
        ></DocsSidebarNav>
      </ScrollArea>
    </aside>
  )
})

export default DocLayout
