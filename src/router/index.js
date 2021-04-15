import Vue from "vue";
import Router from "vue-router";
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Proyection from '../views/Proyection.vue'
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
      
    },
    {
      path: "/proyeccion",
      name: "Proyection",
      component: Proyection,
      props: true,
      
    }
  

  ],
});


export default router;
