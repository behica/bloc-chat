(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var activeRoom = "Select a room";
        
        function addRoom(name) {
            rooms.$add(name);
            console.log(rooms);
            console.log("added " + name);
        }
        
        function setActiveRoom(room) { //why is room working here?
            activeRoom = room.$value;
            roomId = room.$id;
            console.log(activeRoom);
            // trying to get roomId accessible
            console.log(roomId);
        }
        
        function getActiveRoom() {
            return activeRoom
        }
        
         /* This return statement makes the expressions within public and accessible */
        return {
            all: rooms,
            addRoom: addRoom,
            activeRoom: activeRoom,
            setActiveRoom: setActiveRoom,
            getActiveRoom: getActiveRoom
        }
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();