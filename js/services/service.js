addressBook.service('usersService', [
    '$firebase',
function (
    $firebase
) {
    var ref = new Firebase("https://luminous-fire-8067.firebaseio.com/users");
    var sync = $firebase(ref);

    this.getUserList = function() {
        return sync.$asArray();
    };

}]);;