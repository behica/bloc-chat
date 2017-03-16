(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var activeRoom = "Select a room";
        
        function addRoom(name) {
            rooms.$add(name);
            console.log("added " + name);
        };
        
        function setActiveRoom(room) { //why is room working here?
            activeRoom = room.$value;
            console.log(activeRoom);
        };
        
         /* This return statement makes the expressions within public and accessible */
        return {
            all: rooms,
            addRoom: addRoom,
            activeRoom: activeRoom,
            setActiveRoom: setActiveRoom
        }
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();