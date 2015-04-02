addressBook.controller('UserDetailController', [ 
    '$scope', '$stateParams', 'usersService',
function (
    $scope, $stateParams, usersService
){
    $scope.userId = $stateParams.id;

    $scope.user = usersService.getUser($scope.userId);
}]);