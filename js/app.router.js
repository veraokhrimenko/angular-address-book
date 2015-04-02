addressBook.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "index.html"
    })
    .state('state1.list', {
        url: "/list",
        templateUrl: "partials/state1.list.html"
    })
    .state('state2', {
        url: "/state2",
        templateUrl: "partials/state2.html"
    })
    .state('state2.list', {
        url: "/list",
        templateUrl: "partials/state2.list.html"
    });
});