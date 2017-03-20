(function() {
    function MainCtrl($scope, Room, Message){
        this.room = Room;
        this.messages = [];
        this.selectRoom = function(room){
            Room.setActiveRoom(room);
            this.messages = Message.getByRoomId(room.$id);
        }
//        this.roomList = Room.all;
//        this.addRoom = Room.addRoom;
//        this.activeRoom = Room.activeRoom;
//        this.setActiveRoom = Room.setActiveRoom;
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['$scope', 'Room', 'Message', MainCtrl]);
    
})();