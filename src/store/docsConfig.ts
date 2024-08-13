import { createContext } from 'react'

import type { DocsConfig } from '@/types'

import { docsConfig as defaultDocsConfig } from '@/config/docs'

export const docsConfigContext = createContext<DocsConfig>(defaultDocsConfig)
