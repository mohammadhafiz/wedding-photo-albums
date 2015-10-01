application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/messages', {
                controller: 'MessagesController',
                templateUrl: 'messages/messages.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
