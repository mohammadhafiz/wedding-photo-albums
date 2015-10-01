application.factory('API', ['Settings',
    function(Settings)
    {
        var api = {};

        //api.access_token    = '/api/access_token';
        //api.session         = '/api/session';
        //api.users           = '/api/users/:user_id';
        
        api.get = function(endpoint)
        {
            return Settings.host.concat(api[endpoint]);
        };

        return api;
    }]);
