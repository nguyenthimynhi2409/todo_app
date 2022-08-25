import Vue from "vue";
import Vuex from "vuex";
import index from "./modules/todo/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos: index,
  },
});
