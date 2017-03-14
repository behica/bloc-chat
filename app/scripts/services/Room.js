(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        /* This return statement makes the expressions within public and accessible */
        return {
            all: rooms,
            addRoom: addRoom
        }
        
        function addRoom(name) {
            rooms.$add(name);
            console.log("added " + name);
        };
        
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();