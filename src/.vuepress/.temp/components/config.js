import { hasGlobalComponent } from "H:/personal_data/demo/vuepress/test/my-docs/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "H:/personal_data/demo/vuepress/test/my-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "H:/personal_data/demo/vuepress/test/my-docs/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
