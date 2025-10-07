import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const favicon = "images/favicon.svg";
const logo = "images/profile.svg";
const socialCard = "images/social-card.svg";
const title = "Wonders";

const config: Config = {
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://imfsiddiqui.github.io",
  baseUrl: "/wonders/",

  favicon: favicon,
  title: title,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
    mermaid: true,
  },
  themes: [
    "@docusaurus/theme-mermaid",
    "plugin-image-zoom",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        explicitSearchResultPath: true,
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        language: "en",
        indexDocs: true,
        docsRouteBasePath: ["/attributions", "/"],
        docsDir: ["attributions", "home"],
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "home",
        path: "home",
        routeBasePath: "/",
        sidebarPath: require.resolve("./home/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "bash",
        "batch",
        "http",
        "powershell",
        "shell-session",
      ],
    },
    imageZoom: {
      selector: ".markdown img",
      options: {
        background: "#1b1b1d",
      },
    },
    image: socialCard,
    navbar: {
      title: title,
      logo: {
        alt: `${title} website logo`,
        src: logo,
      },
      items: [
        {
          type: "search",
          position: "left",
        },
        {
          position: "left",
          href: "https://github.com/imfsiddiqui/wonders",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} ${title}.<br>Made with ❤️ and <a href="/attributions"><strong>these amazing resources</strong></a>.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
