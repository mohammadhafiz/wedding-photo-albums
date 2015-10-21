application.controller('LoginController', ['$location', '$scope', 'pouchDB',
    function($location, $scope, pouchDB)
    {
        
        $scope.register = function()
        {
            $location.path('/register');
        };
}]);
