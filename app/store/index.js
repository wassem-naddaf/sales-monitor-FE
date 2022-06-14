import Vue from 'vue';
import Vuex from 'vuex';
import teamPerformance from './modules/team-performance';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    teamPerformance,
  },
});
