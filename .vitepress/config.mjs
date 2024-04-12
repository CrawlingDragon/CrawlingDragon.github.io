import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-start/',
  title: '菜的抠脚 文档站点 ',
  description: 'A VitePress Site for seo',
  logo: '/lu.svg',
  head: [['link', { rel: 'icon', href: '/lu.svg' }]], // .ico
  themeConfig: {
    outlineTitle: 'right bar title',
    outline: [2, 5],

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/markdown-examples' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CrawlingDragon' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    // 设置搜索框样式
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
    sidebar: [
      {
        text: 'react',
        items: [
          { text: 'Item reactA', link: '/markdown-examples' },
          { text: 'Item react B', link: '/api-examples' },
        ],
      },
      {
        text: 'vue',
        items: [
          { text: 'Item vue A', link: '/markdown-examples' },
          { text: 'Item vueB', link: '/api-examples' },
        ],
      },
    ],
    footer: {
      copyright: 'MIT Licensed | Copyright © 2021-present wu',
    },
  },
});
