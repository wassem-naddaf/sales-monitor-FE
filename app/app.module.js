import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
// vue components
import PerformancePageComponent from './pages/performance-page.vue';
import NotFoundPageComponent from './pages/not-found-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import TextFilterComponent from './components/vue-components/common/text-filter.vue';
// vuex
import store from './store';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]).config(($ngVueProvider) => {
  $ngVueProvider.setRootVueInstanceProps({
    store: store,
  });
});

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vTextFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('textFilterComponent', TextFilterComponent));
});

angular.module('appModule').directive('vNotFoundPage', (createVueComponent) => {
  return createVueComponent(Vue.component('notFoundPageComponent', NotFoundPageComponent));
});
