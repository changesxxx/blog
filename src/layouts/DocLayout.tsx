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

type Props = {
  children: any
}

const DocLayout = memo(({ children }: Props) => {
  const [currentMenu, setCurrentMenu] = useState<string>(firstMenu)

  console.log('children:', children.props.value)

  function currentMenuHandle(menu: string) {
    setCurrentMenu(menu)
  }

  return (
    <div className="container flex-1">
      <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebarNav
              menuItems={docsConfig.sidebarNav}
              menuHandle={currentMenuHandle}
            ></DocsSidebarNav>
          </ScrollArea>
        </aside>

        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <div className="truncate">Notes</div>
              <FaChevronRight size={10} />
              <div className="font-medium text-foreground">
                {/* {doc.data.title} */}
              </div>
            </div>

            {/*  <DocsPageHeader
              heading={doc.data.title}
              text={doc.data.description}
            />  */}

            <DocsPageHeader heading="测试" text="测试" />

            {/* <DocContent docSlug={currentMenu}></DocContent> */}

            <hr className="my-4 md:my-6" />
            {/* <DocsPager slug={doc.slug} /> */}
          </div>
          <div className="hidden text-sm xl:block">
            <div className="sticky top-18 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
              {/* <DashboardTableOfContents toc={toc} client:load /> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
})

export default DocLayout
