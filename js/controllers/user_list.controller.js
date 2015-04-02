addressBook.controller('UserListController', [ 
    '$scope', '$state', 'usersService',
function (
    $scope, $state, usersService
){
    $scope.users = usersService.getUserList();

    $scope.showDetailContact = function(id) {
        $state.go('addressBook.home.detail', { id: id });
    };

    $scope.removeUser = function(index) {
        // TODO then
        usersService.removeUser(index);
    };
}]);