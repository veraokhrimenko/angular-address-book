addressBook.controller('addUserController', [ 
    '$scope', 'usersService',
function (
    $scope, usersService
){
    $scope.isRequestInProcess = false;

    $scope.newUser = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: ''
    };

    $scope.addUser = function() {
        $scope.isRequestInProcess = true;
        usersService.addUser($scope.newUser).then($scope.onRequestSuccess, $scope.onRequestError);;
    };

    $scope.onRequestSuccess = function() {
        $scope.newUser = {};
        $scope.isRequestInProcess = false;
    };

    $scope.onRequestError = function() {
        $scope.isRequestInProcess = false;
    };
}]);