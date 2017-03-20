(function() {
    function Message($firebaseArray, Room) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function (roomId) {
                $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            }
        };
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', 'Room', Message]);
})();