addressBook.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
        url: "/home",
        views: {
            "list": { templateUrl: "templates/list.html" },
            "detail": { }
        }
    })
    .state('home.detail', {
        url: "/user/:id",
        views: {
            "detail": { templateUrl: "templates/detail.html" }
        }
    })
});