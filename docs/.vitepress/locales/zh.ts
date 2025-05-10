import { defineConfig, type DefaultTheme } from 'vitepress'
import fs from 'fs'
import path from 'path'

function getDirsAsSidebarItems(dirPath: string, baseLink: string): DefaultTheme.SidebarItem[] {
  const items: DefaultTheme.SidebarItem[] = []
  
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })
    
    entries.forEach(entry => {
      if (entry.isDirectory()) {
        const dirName = entry.name
        const dirFullPath = path.join(dirPath, dirName)
        const dirLink = path.join(baseLink, dirName, 'start').replace(/\\/g, '/')
        
        const hasStartFile = fs.existsSync(path.join(dirFullPath, 'start.md'))
        
        const sidebarItem: DefaultTheme.SidebarItem = {
          text: dirName,
          link: hasStartFile ? dirLink : '',
          collapsed: true,
          items: []
        }
        
        const subItems = getDirsAsSidebarItems(dirFullPath, path.join(baseLink, dirName))
        if (subItems.length > 0) {
          sidebarItem.items = subItems
        }
        
        items.push(sidebarItem)
      }
    })
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error)
  }
  
  return items
}

export const zhConfig = defineConfig({  
  title: "RainWorld Modding",
  description: "RainWorld的非官方ModAPI页面",
  themeConfig: {
    nav: [
      {
        text: 'Docs',
        link: '/Docs/start',
        activeMatch: '/Docs/'
      },
      {
        text: 'Tool',
        link: '/Tool/start',
        activeMatch: '/Tool/'
      },
      {
        text: 'Guide',
        link: '/Guide/start',
        activeMatch: '/Guide/'
      }
    ],
    sidebar: {
      '/Docs/': {
        base: '/Docs/',
        items: sidebarDocs() 
       },
      '/Guide/': {
        base: '/Guide/',
        items: sidebarGuide() 
       },
      '/Tool/': {
        base: '/Tool/',
        items: sidebarTool()
      }
    },
    editLink: {
      pattern: 'https://github.com/rwmoddingch/RainWorld-Modding-Docs/edit/main/docs/:path',
      text: '在GitHub上编辑这个页面'
    },
    footer: {
      message: ""
    }
  }
})

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  const currentDir = path.dirname(__filename)
  const docsDir = path.join(currentDir, '../../Docs')
  const interfaceDir = path.join(docsDir, 'interface')
  const mainDir = path.join(interfaceDir, 'Main')
  const mainItems = getDirsAsSidebarItems(mainDir, 'interface/Main')
  const hudDir = path.join(interfaceDir, 'HUD')
  const hudItems = getDirsAsSidebarItems(hudDir, 'interface/HUD')

  return [
    {
      text: '介绍',
      link: 'start'
    },
    {
      text: 'ModAPI',
      items: [
        {
          text: '接口',
          collapsed: false,
          items: [
            { text: 'API索引', link: 'interface/start' },
            { 
              text: 'Main', 
              collapsed: true,
              items: mainItems
            },
            { 
              text: 'HUD', 
              collapsed: true,
              items: hudItems
            }
          ]
        }
      ]
    }
  ]
}
  
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '引导',
      link: 'start',
      collapsed: false,
      items: [
        {
          text: '从零开始自定义蛞蝓猫',
          items: [
            { text: '准备工作', link: 'CustomSlugCat/start' }
          ]
        }
      ]
    }
  ]
}

function sidebarTool(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '前置工具',
      items: [
        { text: '介绍', link: 'start' },
        { text: '前置Mod', link: 'prerequisite' },
        { text: '模组工具', link: 'utilities' },
        { text: '模板资源', link: 'resources' }
      ]
    }
  ]
}
  