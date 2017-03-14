(function() {
    function MainCtrl(Room){
        this.roomList = Room.all;
        this.addRoom = Room.addRoom;
    }
    
    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', MainCtrl]);
    
})();