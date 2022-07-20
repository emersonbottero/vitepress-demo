import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Vitepress',
    description: 'Just playing around.',
    themeConfig: {
        siteTitle: false,
        algolia: {},
        sidebar: [
          {
            text: 'Getting started',
            collapsible: true,
            collapsed: true,    
            items: [
              { text: 'Introduction', link: '/' },
            ]
          },
          {
            text: 'Forms',
            collapsible: true,
            collapsed: true,    
            items: [
              { text: 'Get forms', link: '/forms/' },
            ]
          },
        ]
      }
})
