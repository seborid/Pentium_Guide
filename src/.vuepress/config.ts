import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Pentium_Guide/",

  lang: "zh-CN",
  title: "cumt奔腾特勤队指南",
  description: "",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
