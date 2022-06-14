angular.module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
    });
  })
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state({
        name: 'app',
        url: '/',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state('404', {
        url: '/path',
        template: '<v-not-found-page></v-not-found-page>',
      });
    // show a not found error if route is unkown
    $urlRouterProvider.otherwise(function ($injector) {
      $injector.invoke(function ($state) {
        $state.transitionTo('404', {}, false);
      });
    });
  });
