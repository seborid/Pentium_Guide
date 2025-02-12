export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/1.html", { loader: () => import(/* webpackChunkName: "1.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/1.html.js"), meta: {"t":"项目主页","i":"house"} }],
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"t":"档案主页","i":"house"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":""} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"指南","i":"lightbulb"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"t":"布局与功能禁用","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"t":"密码加密的文章","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"t":"布局","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"t":"Markdown 展示","i":"fa6-brands:markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"t":"页面配置","i":"file","O":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "guide_foo_ray.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"t":"Ray","i":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "guide_foo_index.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"t":"Foo 功能","i":"lightbulb"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "guide_bar_baz.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"t":"Baz","i":"circle-info"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "guide_bar_index.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"t":"Bar 功能","i":"lightbulb"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"H:/personal_data/demo/vuepress/test/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);
