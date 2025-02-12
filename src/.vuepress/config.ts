import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/my-docs/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",

  theme:hopeTheme({
    navbar:false,
    sidebar:false,
  }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
