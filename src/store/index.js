import Vue from "vue";
import Vuex from "vuex";
import { setCookie, getCookie } from "../assets/js/cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    isAdmin: getCookie("ifAdmin") || null,
    isAdmin2: null || getCookie("ifAdmin")
  },
  mutations: {
    adminLogin: (state, status) => {
      let a = getCookie("ifAdmin");
      console.log(a);
      console.log("我丢类老牟" + status);
      // state.isAdmin = status;
      setCookie("ifAdmin", status, 1000 * 60);
    }
  },
  actions: {},
  modules: {}
});
