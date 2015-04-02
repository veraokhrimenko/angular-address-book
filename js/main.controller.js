var addressBook = angular.module('addressBook', ['ui.router', 'firebase']);

addressBook.controller('UsersController', [ 
    '$scope', '$http', '$state', '$firebase', 'usersService',
function (
    $scope, $http, $state, $firebase, usersService
){
    $scope.users = usersService.getUserList();

    $scope.addUser = function(text) {
        $scope.users.$add($scope.newUser);
    };

    $scope.showDetailContact = function(id) {
        $state.go('addressBook.home.detail', { id: id });
    };

    $scope.newUser = {};
}]);

addressBook.controller('UserDetailController', function ($scope, $http, $stateParams) {
    // TODO move to service
    $scope.userId = $stateParams.id;

    $http.get('data/users.json').success(function(data) {
        $scope.users = data.users;
        $scope.user = _.findWhere($scope.users, { id: +$scope.userId });
    });

    $scope.removeUser = function() {
        $scope.users = _.without($scope.users, $scope.user);
    }
});
