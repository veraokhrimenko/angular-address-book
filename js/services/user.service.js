addressBook.service('usersService', [
    '$firebase',
function (
    $firebase
) {
    var ref = new Firebase("https://luminous-fire-8067.firebaseio.com/users");
    var sync = $firebase(ref);
    var users = sync.$asArray();

    this.getUserList = function() {
        return users.$loaded();
    };

    this.addUser = function(user) {
        return users.$add(user);
    };

    this.getUser = function(id) {
        return users.$getRecord(id);
    };

    this.updateUser = function(data) {
        return users.$save(data);
    };

    this.removeUser = function(index) {
        return users.$remove(index);
    };
}]);;