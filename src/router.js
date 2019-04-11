import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AppNavigation from "@/components/AppNavigation";
import HomeView from "@/components/HomeView";
import BottomNav from "@/components/BottomNav";


import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
   
  ]
});
