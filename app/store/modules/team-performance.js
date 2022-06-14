import axios from 'axios';
import { filterByDateRange } from '../../utils/filters.js';
export default {
  namespaced: true,
  state: {
    performanceData: [],
  },
  mutations: {
    SET_PERFORMANCE_DATA(state, data) {
      state.performanceData = data;
    },
  },
  getters: {
    getPerformanceData: (state) => state.performanceData,
    getFilteredPerformanceData: (state) => (dateRange) => {
      return state.performanceData.filter(
        item => filterByDateRange(dateRange.start, dateRange.end, item.date_ms),
      );
    },
  },
  actions: {
    async fetchPerformanceData({ commit }) {
      try {
        const { data } = await axios('https://fe-task.getsandbox.com/performance');
        commit('SET_PERFORMANCE_DATA', data);
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
