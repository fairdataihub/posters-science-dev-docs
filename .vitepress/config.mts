import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "Developer Documentation",
    description: "Developer documenation for the Posters.science project",

    head: [
      ["link", { rel: "icon", href: "/favicon.ico" }],
      ["meta", { name: "theme-color", content: "#3eaf7c" }],
      ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
      [
        "meta",
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
      ],
    ],

    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: "Home", link: "/" },
        { text: "Architecture", link: "/architecture/" },
        { text: "Submission", link: "/submission/" },
        { text: "Discovery", link: "/discovery/" },
        { text: "Monitoring", link: "/monitoring/" },
      ],

      sidebar: {
        "/architecture": sidebarGuide(),
        "/submission": sidebarGuide(),
        "/discovery": sidebarGuide(),
        "/monitoring": sidebarGuide(),
      },

      footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2021-present | FAIR Data Innovations Hub",
      },

      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/fairdataihub/posters-science",
        },
        { icon: "twitter", link: "https://twitter.com/fairdataihub" },
      ],
    },
  })
);

function sidebarGuide() {
  return [
    {
      text: "Architecture",
      collapsible: true,
      items: [
        { text: "Overview", link: "/architecture/" },
        {
          text: "Overall Architecture",
          link: "/architecture/overall",
        },
        {
          text: "Technology Stack",
          link: "/architecture/tech-stack",
        },
      ],
    },

    {
      text: "Submission",
      collapsible: true,
      items: [
        { text: "Overview", link: "/submission/" },
        { text: "Workflow", link: "/submission/workflow" },
        { text: "Metadata Processing", link: "/submission/metadata" },
      ],
    },

    {
      text: "Discovery",
      collapsible: true,
      items: [
        { text: "Overview", link: "/discovery/" },
        { text: "Search Functionality", link: "/discovery/search" },
        { text: "LLM Search Integration", link: "/discovery/llm" },
      ],
    },

    {
      text: "Monitoring",
      collapsible: true,
      items: [
        { text: "Overview", link: "/monitoring/" },
        { text: "Application Monitoring", link: "/monitoring/application" },
        { text: "Logging", link: "/monitoring/logging" },
        { text: "Error Tracking", link: "/monitoring/errors" },
        { text: "Analytics", link: "/monitoring/analytics" },
        { text: "Backups", link: "/monitoring/backups" },
      ],
    },
  ];
}
