application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
