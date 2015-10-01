application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/addFriends', {
                controller: 'AddFriendsController',
                templateUrl: 'messages/add_friends.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
