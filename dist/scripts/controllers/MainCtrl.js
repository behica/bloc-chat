(function() {
    function MainCtrl(Room){
         this.roomList = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', MainCtrl]);
    
})();