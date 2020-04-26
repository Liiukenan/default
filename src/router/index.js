import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/rules",
    name: "rules",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Rules.vue")
  },
  {
    path: "/composite",
    name: "composite",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Composite.vue")
  },

];

const router = new VueRouter({
  mode:'history',
  routes:routes
});

export default router;
