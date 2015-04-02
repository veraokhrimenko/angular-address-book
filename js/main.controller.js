var phonecatApp = angular.module('addressBook', ['ui.router']);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
	// TODO move to service
    $http.get('data/users.json').success(function(data) {
        $scope.users = data.users;
    });

    $scope.showDetailContact = function(id) {
        console.log(id)
    }
});