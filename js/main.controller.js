var addressBook = angular.module('addressBook', ['ui.router']);

addressBook.controller('UsersController', function ($scope, $http, $state) {
    // TODO move to service
    $http.get('data/users.json').success(function(data) {
        $scope.users = data.users;
    });

    $scope.showDetailContact = function(id) {
        console.log(id)

        $state.go('addressBook.home.detail', { id: id });
    }
});

addressBook.controller('UserDetailController', function ($scope) {
    // TODO move to service
    $http.get('data/users.json').success(function(data) {
        $scope.users = data.users;
    });
});