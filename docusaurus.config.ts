import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Javascript: The First 20 Years",
  tagline: "Javascript의 20년 이야기",
  favicon: "img/logo.svg",

  // Set the production url of your site here
  // 여기로 배포할 거다
  url: "https://js-history.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "witch-factory", // Usually your GitHub org/user name.
  projectName: "javascript-the-first-20-years", // Usually your repo name.
  deploymentBranch: "main",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/witch-factory/javascript-the-first-20-years/blob/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Javascript: The First 20 Years",
      logo: {
        alt: "Javascript 20 years Logo",
        src: "img/logo.svg",
        width: 32,
        height: 32,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "paperSidebar",
          position: "left",
          label: "Paper",
        },
        {
          type: "docSidebar",
          sidebarId: "appendixSidebar",
          position: "left",
          label: "Appendix",
        },
        {
          href: "https://github.com/witch-factory/javascript-the-first-20-years",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "목차",
          items: [
            {
              label: "초록",
              to: "/docs/abstract",
            },
            {
              label: "소개",
              to: "/docs/introduction",
            },
            {
              label: "1부: Javascript의 기원",
              to: "/docs/part-1",
            },
            {
              label: "2부: 표준 만들기",
              to: "/docs/part-2",
            },
            {
              label: "3부: 실패한 개혁, ES4",
              to: "/docs/part-3",
            },
            {
              label: "4부: Javascript 현대화",
              to: "/docs/part-4",
            },
          ],
        },
        {
          title: "정보",
          items: [
            {
              label: "원본 논문",
              href: "https://dl.acm.org/doi/10.1145/3386327",
            },
            {
              label: "번역자 GitHub",
              href: "https://github.com/witch-factory",
            },
            {
              label: "번역자 블로그",
              href: "https://witch.work/",
            },
          ],
        },
      ],
      copyright: `Copyright
      Original work: © Allen Wirfs-Brock, Brendan Eich, 2020.
      Translation: © Sung Hyun Kim, 2024.
      Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
