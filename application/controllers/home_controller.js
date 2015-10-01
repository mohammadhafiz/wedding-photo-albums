application.controller('HomeController', ['$scope', '$location',
    function($scope, $location)
    {
        $scope.theme = 'teal';

        $scope.query = {
            username: '',
        };

        $scope.reset = function()
        {
            $scope.query.$ = '';
        };
        
        $scope.messages = function()
        {
            $location.path('/messages');
        };
        
    }]);