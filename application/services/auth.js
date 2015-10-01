application.factory('Auth', ['$http', '$location', '$q', '$window', 'API', 'Settings',
    function($http, $location, $q, $window, API, Settings)
    {
        var auth = {};

        auth.forget = function()
        {
            var deferred = $q.defer();

            $window.localStorage.removeItem('expires_in');
            $window.localStorage.removeItem('access_token');
            $window.localStorage.removeItem('refresh_token');
            $window.localStorage.removeItem('token_type');
            $window.localStorage.removeItem('id');
            $window.localStorage.removeItem('type');
            $window.localStorage.removeItem('scopes');
            $location.path('/login');

            deferred.resolve();

            return deferred.promise;
        };

        auth.handler = function(response)
        {
            $window.localStorage.expires_in      = response.data.expires_in;
            $window.localStorage.access_token    = response.data.access_token;
            $window.localStorage.refresh_token   = response.data.refresh_token;
            $window.localStorage.token_type      = response.data.token_type;
            return response;
        };

        auth.id = function()
        {
            if (!$window.localStorage.hasOwnProperty('id')) {
                return false;
            }

            return angular.fromJson($window.localStorage.id);
        };

        auth.isGuest = function()
        {
            var deferred = $q.defer();

            auth.isLogged()
                .then(function()
                {
                    deferred.reject('auth.is_guest');
                })
                .catch(function()
                {
                    deferred.resolve(true);
                });

            return deferred.promise;
        };

        auth.isLogged = function()
        {
            var deferred = $q.defer();

            if ($window.localStorage.hasOwnProperty('expires_in') &&
                $window.localStorage.hasOwnProperty('access_token') &&
                $window.localStorage.hasOwnProperty('refresh_token') &&
                $window.localStorage.hasOwnProperty('token_type')) {
                deferred.resolve(true);
            } else {
                deferred.reject('auth.is_logged');
            }

            return deferred.promise;
        };

        auth.refresh = function()
        {
            var data = {
                grant_type: 'refresh_token',
                user_id: Settings.user_id,
                user_secret: Settings.user_secret,
                scope: Settings.scopes.join(),
                refresh_token: $window.localStorage.refresh_token,
            };

            return $http.post(API.get('access_token'), data)
                .then(auth.handler);
        };

        auth.scopes = function()
        {
            if (!$window.localStorage.hasOwnProperty('scopes')) {
                return false;
            }

            return angular.fromJson($window.localStorage.scopes);
        };

        auth.session = function()
        {
            return $http.get(API.get('session'))
                .then(function(session)
                {
                    console.info(session);
                    $window.localStorage.id = angular.toJson(session.data.id);
                    $window.localStorage.type = angular.toJson(session.data.type);
                    $window.localStorage.scopes = angular.toJson(session.data.scopes);
                });
        };

        auth.type = function()
        {
            if (!$window.localStorage.hasOwnProperty('type')) {
                return false;
            }

            return angular.fromJson($window.localStorage.type);
        };

        auth.verify = function(credentials)
        {
            var data = {
                grant_type: 'password',
                user_id: Settings.user_id,
                user_secret: Settings.user_secret,
                scope: Settings.scopes.join(),
                username: credentials['username'],
                password: credentials['password'],
            };

            return $http.post(API.get('access_token'), data)
                .then(auth.handler);
        };

        return auth;
    }]);

