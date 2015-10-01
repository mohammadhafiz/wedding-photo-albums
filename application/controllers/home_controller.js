application.controller('HomeController', ['$mdSidenav', '$scope',
    function($mdSidenav, $scope)
    {
        $scope.theme = 'teal';

        $scope.close = function()
        {
            $mdSidenav('menu').close();
        };

        $scope.menu = function()
        {
            $mdSidenav('menu').open();
        };

        $scope.query = {
            username: '',
        };

        $scope.reset = function()
        {
            $scope.query.$ = '';
        };
    }]);