import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '[NGE]幸存者文档站',
  description: '一个服务器的文档站，拥有完整的指令！',

  theme: defaultTheme({
    logo: 'https://img.skyxk.cn/images/2023/06/08/ggkRt.png',
    colorMode: 'dark',
    repo: 'Aikkes-xk/NGE_ServerCommand_Docs',
    docsBranch: 'docs',
    editLink: true,
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
        navbar: [
		  {
            text: '服务器指令',
            link: '/Commands',
            activeMatch: '/Commands'
          },
          {
            text: '游戏问题',
            link: '/issue',
            activeMatch: '/issue'
          },
          {
            text: '机器人指令',
            link: '/BotCommands',
            activeMatch: '/BotCommands'
          },
          {
            text: '加入频道',
            link: '/GoGuild/Index.md',
          },
          {
            text: '社区',
            link: 'https://www.ngeyx.cn',
          },
        ],
        sidebar: {
          '/Commands': [
            {
              text: '指令说明',
              children: [
                '/Commands/Index.md',
                '/Commands/faq.md'

              ],
            },
            {
              text: '基础指令',
              children: [
                '/Commands/default.md',
              ],
            },
          ],
          '/GoGuild': [
            {
              text: 'QQ频道',
              children: [
                '/GoGuild/Index.md',
                '/GoGuild/Inaccessible.md',
              ],
            },
          ],
          '/issue': [
            {
              text: '游戏问题',
              children: [
                '/issue/Index.md',
              ],
            },
          ],
        },
        
      }
    }
  })
})
