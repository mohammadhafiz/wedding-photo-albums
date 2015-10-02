application.controller('MessagesController', ['$location', '$mdSidenav', '$scope',
    function($location, $mdSidenav, $scope)
    {
        $scope.theme = 'teal';

        $scope.query = {
            username: '',
        };

        $scope.reset = function()
        {
            $scope.query.$ = '';
        };
        
        $scope.back = function()
        {
            $location.path('/home');
        };
        
        $scope.add = function()
        {
            $location.path('/addFriends');
        };
        
        $scope.close = function()
        {
            $mdSidenav('friends').close();
        };        
        $scope.friends = function()
        {
            $mdSidenav('friends').open();
        };
        
        $scope.todoList = [{todoText:'Clean House', done:false}];

        $scope.todoAdd = function() {
            $scope.todoList.push({todoText:$scope.todoInput, done:false});
            $scope.todoInput = "";
        };

        $scope.remove = function() {
            var oldList = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(oldList, function(x) {
                if (!x.done) $scope.todoList.push(x);
            });
        };
        
         var imagePath = 'images.jpg';
            $scope.messages = [
              {
                face : imagePath,
                no: '0123456789',
                notes: " I'll be in your neighborhood doing errands"
              },
              {
                face : imagePath,
                no: '0132456789',
                notes: " I'll be in your neighborhood doing errands"
              },
              {
                face : imagePath,
                no: '0172345689',
                notes: " I'll be in your neighborhood doing errands"
              },
              {
                face : imagePath,
                no: '0142356789',
                notes: " I'll be in your neighborhood doing errands"
              },
              {
                face : imagePath,
                no: '0162345987',
                notes: " I'll be in your neighborhood doing errands"
              },
              {
                face : imagePath,
                no: '0123987654',
                notes: " I'll be in your neighborhood doing errands"
              },
              {
                face : imagePath,
                no: '0193265487',
                notes: " I'll be in your neighborhood doing errands"
              },
              {
                face : imagePath,
                no: '0129874563',
                notes: " I'll be in your neighborhood doing errands"
              },
              {
                face : imagePath,
                no: '0162398745',
                notes: " I'll be in your neighborhood doing errands"
              },
              {
                face : imagePath,
                no: '014327895',
                notes: " I'll be in your neighborhood doing errands"
              },
              {
                face : imagePath,
                no: '0163294578',
                notes: " I'll be in your neighborhood doing errands"
              },
            ];
    }]);