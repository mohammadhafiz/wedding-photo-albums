application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/friends', {
                controller: 'FriendsController',
                templateUrl: 'messages/friends.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
