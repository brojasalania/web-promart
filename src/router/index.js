import Vue from "vue";
import Router from "vue-router";
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      props: true,
    },
   
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      props: true,
      
    }
  

  ],
});


export default router;
