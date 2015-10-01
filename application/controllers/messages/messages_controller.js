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
    }]);