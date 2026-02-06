import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "蜗牛爬得慢",
  description: "聚焦前沿前端、跨端与AI结合的实践记录",
  base: '/zj-tech-blog/',  // 关键：设置仓库名作为基础路径
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/2026-01-first-post' },
      // { text: '归档', link: '/archive' },
      { text: '关于', link: '/about' }
    ],

   sidebar: {
      '/posts/': [
        {
          text: '2026年',
          items: [
            { text: '第一篇：启航', link: '/posts/2026-01-first-post' }
          ]
        },
        {
          text: '技术栈学习',
          items: [
            { text: '理解Angular', link: '/posts/angular' }
          ]
        },
        {
          text: '其他',
          items: [
            { text: 'markdown语法', link: '/posts/example' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: '掘金', link: 'https://juejin.cn/spost/7601688752806395939' }
    ]
  }
})
