export default {
  base: '/docs/',
  lang: 'zh-CN',
  title: '开放文档',
  description: '物联平台与应用系统文档',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar: [
      {
        text: '物联平台',
        collapsible: true,
        items: [
          { text: '物联平台对接', link: '/iot/iot-platform/iot-platform' },
        ],
      },
      {
        text: '应用系统',
        collapsible: true,
        items: [
          {
            text: '产品测试系统',
            collapsible: true,
            items: [
              { text: '使用说明', link: '/app/mes/usage' },
            ],
          },
          {
            text: '合同能源系统',
            collapsible: true,
            items: [
              { text: '使用说明', link: '/app/emc/usage' },
            ],
          },
          {
            text: '低碳节能系统',
            collapsible: true,
            items: [
              { text: '使用说明', link: '/app/energy/usage' },
            ],
          },
        ],
      },
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    lastUpdatedText: '最后更新',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '未找到结果',
            resetButtonTitle: '清除搜索条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    }
  }
}
