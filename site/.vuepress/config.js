module.exports = {
    // dest: 'vuepress',
    ga: 'UA-123260924-1',
    locales: {
        '/': {
            lang: 'en-US',
            title: "lbert's blog",
            description: "Albert's blog"
        },
        // '/zh/': {
        //     lang: 'zh-CN',
        //     title: "lbert's 博客",
        //     description: 'Albert Ge 博客'
        // }
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
    serviceWorker: true,
    themeConfig: {
        repo: 'lbertge/lbertge2.github.io',
        editLinks: true,
        excludeSearchPath: [
            'drafts/'
        ],
        docsDir: 'site',
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                nav: [
                    { text: 'Blog', link: '/post/' },
                    { text: 'About', link: '/about/' },
                    { text: 'Books', link: '/books/' }
                ],
                sidebar: {
                    '/post/': genSidebarConfig('Blog')
                }
            },
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用",
                        buttonText: "刷新"
                    }
                },
                nav: [
                    { text: '博客', link: '/zh/post/' },
                    { text: '关于', link: '/zh/about/' },
                    { text: '书', link: '/zh/books/' }
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
            collapsable: false,
            children: [
                // '',
                'blog-setup'
            ]
        }
    ]
}