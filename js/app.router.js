addressBook.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider.state('addressBook', {
        abstract: true,
        url: '',
        templateUrl: 'templates/layout.html'
    });

    $stateProvider.state('addressBook.home', {
        url: "/home",
        views: {
            "list": { 
                templateUrl: "templates/list.html" 
            }
        }
    });

    $stateProvider.state('addressBook.home.detail', {
        url: "/user/:id",
        views: {
            "detail": { 
                templateUrl: "templates/detail.html" 
            }
        }
    });

    $stateProvider.state('addressBook.home.add', {
        url: "/add",
        views: {
            "addForm": { 
                templateUrl: "templates/add_user.html" 
            }
        }
    });
});