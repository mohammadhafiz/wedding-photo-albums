application.controller('RegisterController', ['$location', '$scope', 'pouchDB',
    function($location, $scope, pouchDB)
    {
        
        $scope.register = function()
        {
            $location.path('/register');
        };
        
    var db = new PouchDB('http://192.168.1.155:5984/chat');
    
    function register(text) 
    {
      var chat = {
        _id: new Date().toISOString(),
        title: text,
        email: text,
        password: text,
        completed: false
    };
      
    db.put(chat, function callback(err, result) 
    {
      if (!err) {
        console.log('Registration successfull!');
      }
    });
    }
    
    db.info().then(function (info) {
      console.log(info);
    })
    
    db.get('2015-10-19T03:57:53.013Z', function (error, doc) {
      if (error) {
        // oh noes! we got an error
      } else {
        // okay, doc contains our document
      }
    });
}]);

