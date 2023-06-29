// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const VeauryVuePlugin = require('./plugins/vueuary-vue')

const projectPath = 'four-dimensional-space-bag'
const projectName = '四次元口袋'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: projectName,
  tagline: '互联网开发，运营的各种内容。如同哆啦A梦的四次元口袋。',
  url: 'https://github.com',
  baseUrl: `/${projectPath}/site/build`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('@arco-design/web-react/dist/css/arco.css'),
          ],
        },
        gtag: {
          trackingID: 'G-37H5PXD0DP',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themes: [
    // local search: https://github.com/easyops-cn/docusaurus-search-local
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        language: 'zh',
        indexBlog: false,
        indexPages: true,
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: projectName,
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'frontend/overview',
            position: 'left',
            label: '前端',
          },
          {
            type: 'doc',
            docId: 'libs/overview',
            position: 'left',
            label: '库',
          },
          {
            type: 'doc',
            docId: 'tools/overview',
            position: 'left',
            label: '工具',
          },
          {
            type: 'doc',
            docId: 'backend/overview',
            position: 'left',
            label: '后端',
          },
          {
            type: 'doc',
            docId: 'ai/overview',
            position: 'left',
            label: 'AI',
          },
          {
            type: 'doc',
            docId: 'basic/overview',
            position: 'left',
            label: '基础',
          },
          // right
          {
            href: `https://github.com/iamjoel/${projectPath}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} ${projectName}, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    async function tailwind(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
    async function useVue(context, options) {
      return {
        name: 'use-vue',
        configureWebpack(config, isServer, utils) {
          // config.plugins.push(new VeauryVuePlugin())
          return {
            plugins: [new VeauryVuePlugin()],
          }
        },
      }
    },
  ],
}

module.exports = config
