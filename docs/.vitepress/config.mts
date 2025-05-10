import { defineConfig } from 'vitepress'
//import { enConfig } from './locales/en.ts'
import { zhConfig } from './locales/zh.ts'
import { base } from './meta.ts'

export default defineConfig({
  base: base + '/',
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/Survivor-icon-small.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rwmoddingch/RainWorld-Modding-Docs' }
    ],
    search: { provider: 'local' },
  },
  locales: {
    root: { label: '简体中文', lang: 'zh', ...zhConfig }
    //en: { label: 'English', lang: 'en', ...enConfig }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: base + '/Survivor-icon-small.png' }]
  ]
})
