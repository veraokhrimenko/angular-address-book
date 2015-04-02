addressBook.controller('UserListController', [ 
    '$scope', '$state', 'usersService',
function (
    $scope, $state, usersService
){
    $scope.isRequestInProcess = false;
    $scope.users = [];

    $scope.init = function() {
        $scope.isRequestInProcess = true;
        usersService.getUserList().then($scope.onGetUserListSuccess, $scope.onGetUserListError);
    };

    $scope.onGetUserListSuccess = function(data) {
        $scope.users = data;
        $scope.isRequestInProcess = false;
    };

    $scope.onGetUserListError = function() {
        $scope.isRequestInProcess = false;
    }

    $scope.showDetailContact = function(id) {
        $state.go('addressBook.home.detail', { id: id });
    };

    $scope.removeUser = function(user) {
        $scope.isRequestInProcess = true;

        usersService.removeUser(user).then($scope.onRequestSuccess, $scope.onRequestError);
    };

    $scope.onRequestSuccess = function() {
        $scope.isRequestInProcess = false;
    };

    $scope.onRequestError = function() {
        $scope.isRequestInProcess = false;
    };
}]);