application.controller('AddFriendsController', ['$location', '$scope',
    function($location, $scope)
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
            $location.path('/messages');
        };
    }]);