module.exports = {
    markdown: {
        config: md => {
            md.use(require("markdown-it-katex"))
        }
    },
    locales: {
        '/': {
            lang: 'en-US',
            title: "lbert's blog",
            description: "Albert's blog"
          },
          '/zh/': {
            lang: 'zh-CN',
            title: "lbert's 博客",
            description: 'Albert Ge 博客'
          }
    },
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    title: "lbert's blog",
    themeConfig: {
        repo: 'lbertge/lbertge2.github.io',
        sidebarDepth: 0,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                lastUpdated: 'Last Updated',
                nav: [
                    { text: 'Blog', link: '/post/' },
                    { text: 'About', link: '/about/' }
                ],
                sidebar: {
                    '/post/': genSidebarConfig('Blog')
                }
            },
            '/zh/': {
                label: '简单中文',
                selectText: '选择语言',
                lastUpdated: '上次更新',
                nav: [
                    { text: '博客', link: '/zh/post/' },
                    { text: '关于', link: '/zh/about/' }
                ],
                sidebar: {
                    '/zh/post/': genSidebarConfig('博客')
                }
            }
        }
    }
}

function genSidebarConfig(title) {
    return [
        {
            title,
            children: [
                'xor-toy-problem'
            ]
        }
    ]
}