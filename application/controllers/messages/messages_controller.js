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
    }]);