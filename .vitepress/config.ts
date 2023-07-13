import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-GB",
  title: "@medanosol",
  description:
    "Our  collection of open source projects and tools that are used to build better websites.",
  themeConfig: {
    logo: "/logo.svg",
    lastUpdated: {
      text: "Last Updated",
    },
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/medanosol" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/medanosolution/",
      },
    ],
  },
});
