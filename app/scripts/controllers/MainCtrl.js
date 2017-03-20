(function() {
    function MainCtrl($scope, $cookies, Room, Message){
        this.room = Room;
        this.messages = [];
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.selectRoom = function(room){
            Room.setActiveRoom(room);
            this.messages = Message.getByRoomId(roomId);
            console.log(this.currentUser);
        }
        
        this.send = function(newMessage){
            
            Message.send(newMessage, roomId);
            console.log(newMessage);
            console.log(roomId);   
        }
//        this.roomList = Room.all;
//        this.addRoom = Room.addRoom;
//        this.activeRoom = Room.activeRoom;
//        this.setActiveRoom = Room.setActiveRoom;
    }
    angular
        .module('blocChat')
        .controller('MainCtrl', ['$scope', '$cookies', 'Room', 'Message', MainCtrl]);
    
})();