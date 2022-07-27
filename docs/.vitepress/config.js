import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ohbug',
  description: 'An open source application information monitoring platform.',
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/api/': sidebarAPI(),
    },

    editLink: {
      pattern: 'https://github.com/ohbug-org/ohbug-website/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ohbug-org/ohbug' },
      { icon: 'discord', link: 'https://discord.gg/FmxaBSBumM' },
    ],

    footer: {
      message: 'Released under the Apache License 2.0 License.',
      copyright: 'Copyright © 2022-present ohbug-org',
    },
  },
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-ohbug', activeMatch: '/guide/' },
    { text: 'API', link: '/api/api', activeMatch: '/api/' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is Ohbug?', link: '/guide/what-is-ohbug' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Deploying', link: '/guide/deploying' },
      ],
    },
    {
      text: 'Integration',
      collapsible: true,
      items: [
        { text: 'Installation', link: '/guide/installation' },
        { text: 'Basic Configuration', link: '/guide/basic-configuration' },
        { text: 'Reporting Unhandled Errors', link: '/guide/reporting-unhandled-errors' },
        { text: 'Reporting Handled Errors', link: '/guide/reporting-handled-errors' },
        { text: 'Metrics', link: '/guide/metrics' },
      ],
    },
    {
      text: 'Concept',
      collapsible: true,
      items: [
        { text: 'Event', link: '/guide/event' },
        { text: 'Action', link: '/guide/action' },
        { text: 'MetaData', link: '/guide/meta-data' },
        { text: 'User', link: '/guide/user' },
        { text: 'SourceMap', link: '/guide/source-map' },
        { text: 'Extension', link: '/guide/extension' },
      ],
    },
    {
      text: 'Framework',
      collapsible: true,
      items: [
        { text: 'React', link: '/guide/react' },
        { text: 'Vue', link: '/guide/vue' },
        { text: 'Angular', link: '/guide/angular' },
        { text: '小程序', link: '/guide/mini-app' },
      ],
    },
  ]
}

function sidebarAPI() {
  return [
    {
      text: 'API',
      items: [{ text: 'API Reference', link: '/api/api' }],
    },
  ]
}
