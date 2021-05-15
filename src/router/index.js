import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/login/login.vue";
import Register from "@/views/register/register.vue";
import Home from "@/views/home/home.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    }
  ]
});
