const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Knowledge Base",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "All Our knowledge, transparently.",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#00458f" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  dest: "docs",

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "https://github.com/actionitdev/knowledgebase/",
    logo: "/logo.svg",
    editLinks: true,
    docsDir: "src",
    editLinkText: "",
    lastUpdated: true,
    smoothScroll: true,
    nav: [
      {
        text: "Knowledge",
        link: "/knowledge/",
      },
      // {
      //   text: "Projects",
      //   link: "/projects/",
      // },
      {
        text: "Action IT",
        link: "https://actionit.dev",
      },
    ],
    sidebar: [
      "/knowledge/competencies",
      "/knowledge/terminologies",
      "/knowledge/technologies",
      "/knowledge/tickets",
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
