// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueResource from "vue-resource";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./static/iconfont/iconfont.css";
import axios from "axios";
//插件注册
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.prototype.$axios = axios;
//vue-resource库参数配置
Vue.config.productionTip = false;
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;
if (module.hot) {
  module.hot.accept();
}
/* eslint-disable no-new */
new Vue({
  router,
  VueResource,
  render: h => h(App)
}).$mount("#app");
