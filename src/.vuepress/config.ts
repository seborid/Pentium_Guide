import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/my-docs/",

  lang: "zh-CN",
  title: "cumt奔腾特勤队指南",
  description: "",

  theme:hopeTheme({
    navbar:false,
    sidebar:false,
  }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
