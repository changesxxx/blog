import { docsConfig } from '@/config/docs'

export async function cacheDocConfig() {
  return new Promise((resolve, reject) => {
    localStorage.setItem('menu', docsConfig)
    if (localStorage.getItem('menu')) {
      resolve({ state: 1 })
    }
  })
}

export async function getMenu() {
  return new Promise((resolve, reject) => {
    const menu = localStorage.getItem('menu')
    if (menu) {
      resolve(menu)
    }
  })
}
