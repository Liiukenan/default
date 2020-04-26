import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import 'lib-flexible/flexible';
import './assets/css/reset.css';
import Scroll from 'vue-slim-better-scroll';
Vue.use(Scroll)
Vue.prototype.http = axios;
Vue.config.productionTip = false;

/*第一层if判断生产环境和开发环境*/
if (process.env.NODE_ENV === 'production') {
  /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
  if (process.env.VUE_APP_FLAG === 'pro') {
    //production 生产环境
    axios.defaults.baseURL = 'https://wzapi.suapp.mobi'; //路径
  } else {
    //test 测试环境
    axios.defaults.baseURL = 'https://tycs.suapp.mobi'; //路径
  }
} else { //dev 开发环境 axios.defaults.baseURL = 'http://192.168.0.152:8102';//路径
  axios.defaults.baseURL = 'https://tycs.suapp.mobi'
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");