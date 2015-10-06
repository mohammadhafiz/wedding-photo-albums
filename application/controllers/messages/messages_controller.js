application.controller('MessagesController', ['$location', '$mdSidenav', '$scope', 'amTimeAgoConfig',
    function($location, $mdSidenav, $scope, amTimeAgoConfig)
    {
        withoutSuffix: true
        
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
        
        $scope.todoList = [{todoText:'Clean House', created_at: Date.now()}];

        $scope.todoAdd = function() {
            $scope.todoList.push({todoText:$scope.todoInput, created_at: Date.now()});
            $scope.todoInput = "";
        };

         var imagePath = 'img/list/60.jpeg';
            $scope.messages = [
              {
                face : imagePath,
                no: '0123456789',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " testing"
              },
              {
                face : imagePath,
                no: '0132456789',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " I'll be in your neighborhood doing errands"
              },
              {
                face : imagePath,
                no: '0172345689',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " stay away"
              },
              {
                face : imagePath,
                no: '0142356789',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " nice to know you"
              },
              {
                face : imagePath,
                no: '0162345987',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " it's time for you and me"
              },
              {
                face : imagePath,
                no: '0123987654',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " rampage"
              },
              {
                face : imagePath,
                no: '0193265487',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " and the end"
              },
              {
                face : imagePath,
                no: '0129874563',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " just ok"
              },
              {
                face : imagePath,
                no: '0162398745',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " let it go"
              },
              {
                face : imagePath,
                no: '014327895',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " try to make a good atitude"
              },
              {
                face : imagePath,
                no: '0163294578',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " stanby"
              },
            ];
    }]);