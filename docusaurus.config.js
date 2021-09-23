// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config()
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ohbug - 开源应用信息监控',
  tagline:
    'Ohbug 是开源的应用信息监控套件。提供异常监控、行为采集、性能监控，帮助开发者及时发现追踪改善网站问题，提升用户体验。',
  url: 'https://ohbug.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'ohbug-org', // Usually your GitHub org/user name.
  projectName: 'ohbug-website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ohbug-org/ohbug-website/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Docs',
          },
          {
            href: 'https://discord.gg/FmxaBSBumM',
            label: 'Community',
            position: 'right',
          },
          {
            href: 'https://github.com/ohbug-org/ohbug',
            label: 'GitHub',
            position: 'right',
          },
        ],
        hideOnScroll: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        appId: process.env.ALGOLIA_APP_ID,
        indexName: 'docs',

        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},
      },
    }),
}
