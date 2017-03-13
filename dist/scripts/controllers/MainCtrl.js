(function() {
    function MainCtrl(Room){
         this.roomList = Room;
    }
    
    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', MainCtrl]);
    
})();