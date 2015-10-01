application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'home.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
