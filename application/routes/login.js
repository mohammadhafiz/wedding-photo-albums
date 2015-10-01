application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
