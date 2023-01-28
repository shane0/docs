// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "shane0";
const projectName = "docs";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "shane0",
  tagline: "dosaurus experiments",
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  // onBrokenLinks: "throw",
  // onBrokenMarkdownLinks: "throw",
  // favicon: "img/favicon.ico",
  // GitHub Pages adds a trailing slash by default that I don't want
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // navbar: {
      //   title: "shane0",
      //   logo: {
      //     alt: "Logo",
      //     src: "img/logo.svg",
      //   },
      //   items: [
      //     {
      //       type: "doc",
      //       docId: "intro",
      //       position: "left",
      //       label: "",
      //     },
      //     { to: "/blog", label: "Blog", position: "left" },
      //     {
      //       href: `https://github.com/${organizationName}/${projectName}`,
      //       label: "GitHub",
      //       position: "right",
      //     },
      //   ],
      // },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "",
      //       items: [
      //         {
      //           label: "",
      //           to: "/docs/intro",
      //         },
      //       ],
      //     },
      //     {
      //       title: "",
      //       items: [
      //         {
      //           label: "",
      //           to: "/blog",
      //         },
      //         {
      //           label: "GitHub",
      //           href: `https://github.com/${organizationName}/${projectName}`,
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `${new Date().getFullYear()}`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultMode: "dark",
      },
    }),
};

module.exports = config;
