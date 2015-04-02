addressBook.controller('addUserController', [ 
    '$scope', '$state', 'usersService',
function (
    $scope, $state, usersService
){
    $scope.newUser = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: ''
    };

    $scope.addUser = function(text) {
        // TODO then
        usersService.addUser($scope.newUser);

        $scope.newUser = {};
    };
}]);