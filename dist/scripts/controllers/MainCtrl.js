(function() {
    function MainCtrl($scope, Room){
        this.room = Room;
//        this.roomList = Room.all;
//        this.addRoom = Room.addRoom;
//        this.activeRoom = Room.activeRoom;
//        this.setActiveRoom = Room.setActiveRoom;
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['$scope', 'Room', MainCtrl]);
    
})();