import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Zentra Documentation',
  description: 'Clean, green, and fast documentation for the Zentra chat app',
  appearance: true, // Enables dark/light mode toggle
  cleanUrls: true,  // Optional: removes .html from URLs

  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/installation' },
      { text: 'Usage', link: '/usage' },
      { text: 'API', link: '/api' },
      { text: 'FAQ', link: '/faq' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/about' },
          { text: 'Installation', link: '/installation' },
          { text: 'Usage Guide', link: '/usage' }
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'API Reference', link: '/api' },
          { text: 'FAQ', link: '/faq' }
        ]
      }
    ]
  }
})
