import { CodeTabs } from "H:/personal_data/demo/vuepress/test/my-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "H:/personal_data/demo/vuepress/test/my-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "H:/personal_data/demo/vuepress/test/my-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
