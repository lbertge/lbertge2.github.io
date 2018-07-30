const spawn = require('cross-spawn')
const fs = require('fs')
const blogDir = 'site/post/'

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
        excludeSearchPath: [
            'drafts/'
        ],
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                lastUpdated: 'Last Updated',
                nav: [
                    { text: 'Blog', link: '/post/' },
                    { text: 'About', link: '/about/' },
                    { text: 'Books', link: '/books/' }
                ],
                sidebar: {
                    '/post/': genBlogPosts('Blog')
                }
            },
            '/zh/': {
                label: '简单中文',
                selectText: '选择语言',
                lastUpdated: '上次更新',
                nav: [
                    { text: '博客', link: '/zh/post/' },
                    { text: '关于', link: '/zh/about/' },
                    { text: '书', link: '/zh/books/' }
                ],
                sidebar: {
                    '/zh/post/': genBlogPosts('博客')
                }
            }
        }
    }
}

function genBlogPosts(title) {
    return [
        {
            title,
            children: getAllBlogPosts()
        }
    ]
}

function getAllBlogPosts () {
    const posts = fs.readdirSync(blogDir)
    return posts
        .map( function (post) { 
            return {
                post: post.replace('.md', ''), 
                date: getGitFirstUpdatedTimeStamp(blogDir + post)
            }
        })
        .filter( post => !post.post.includes('README') )
        .sort( (post1, post2) => post1.date < post2.date )
}

function getGitFirstUpdatedTimeStamp (filepath) {
    return parseInt(spawn.sync('git', ['log', '-1', '--format=%ct', filepath]).stdout.toString('utf-8')) * 1000
}