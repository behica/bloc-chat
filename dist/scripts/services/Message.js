(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        return {
            getByRoomId: function(roomId) {
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            },
            send: function(newMessage, roomId) {
                var message = {
                    roomId: roomId,
                    content: newMessage,
                    username: $cookies.get('blocChatCurrentUser')
                }
                messages.$add(message);
            }
        };
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();

// User selects room
// Current room is updated
// Messages are accessed from database using room ID