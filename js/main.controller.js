var addressBook = angular.module('addressBook', ['ui.router', 'firebase']);

addressBook.controller('UsersController', [ 
    '$scope', '$state', 'usersService',
function (
    $scope, $state, usersService
){
    $scope.users = usersService.getUserList();

    $scope.showDetailContact = function(id) {
        $state.go('addressBook.home.detail', { id: id });
    };

    $scope.newUser = {};
}]);


addressBook.controller('UserDetailController', function ($scope, $http, $stateParams) {

});



addressBook.controller('addUserController', [ 
    '$scope', '$state', 'usersService',
function (
    $scope, $state, usersService
){
    $scope.newUser = {};

    $scope.addUser = function(text) {
        usersService.addUser($scope.newUser);

        $scope.newUser = {};
    };
}]);