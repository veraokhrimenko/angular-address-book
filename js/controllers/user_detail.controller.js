addressBook.controller('UserDetailController', [ 
    '$scope', '$state', '$stateParams', 'usersService',
function (
    $scope, $state, $stateParams, usersService
){
    $scope.userId = $stateParams.id;
    $scope.isRequestInProcess = false;

    $scope.init = function() {
        $scope.user = usersService.getUser($scope.userId);
    };

    $scope.updateUser = function() {
        $scope.isRequestInProcess = true;
        usersService.updateUser($scope.user).then($scope.onRequestSuccess, $scope.onRequestError);
    };

    $scope.removeUser = function() {
        $scope.isRequestInProcess = true;
        usersService.removeUser($scope.user).then($scope.onRequestSuccess, $scope.onRequestError);
    };

    $scope.onRequestSuccess = function() {
        $state.go('addressBook.home');
        $scope.isRequestInProcess = false;
    };

    $scope.onRequestError = function() {
        $scope.isRequestInProcess = false;
    };
}]);