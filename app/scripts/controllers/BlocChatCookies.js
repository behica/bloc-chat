(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
        currentUser = prompt("Please enter your user name:");
        while(currentUser === "" || currentUser === null){
            currentUser = prompt("You did not enter a valid user name. Please try again.");
        }
    $cookies.put('blocChatCurrentUser', currentUser);
    }
      console.log(currentUser);
  }

  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();

