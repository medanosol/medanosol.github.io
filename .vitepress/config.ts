import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@medanosol",
  // I want to describe that this is a website for medanosol-os, where our open source projects docs are hosted.
  description:
    "Our  collection of open source projects and tools that are used to build better websites.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [{ icon: "github", link: "https://github.com/medanosol" }],
  },
  markdown: {
    // I want to change the default color of the title
  },
});
