application.controller('HomeController', ['$scope', '$location',
    function($scope, $location)
    {
        $scope.theme = 'teal';

        $scope.query = {
            username: '',
        };

        $scope.reset = function()
        {
            $scope.query.$ = '';
        };
        
        $scope.messages = function()
        {
            $location.path('/messages');
        };
        
        var imagePath= 'images.jpg';
            $scope.moments = [
              {
                face : imagePath,
                name: 'hafiz',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " testing"
              },
              {
                face : imagePath,
                name: 'wahab',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " nevermind la."
              },
              {
                face : imagePath,
                name: 'tira',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " stay away"
              },
              {
                face : imagePath,
                name: 'limin',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " nice to know you"
              },
              {
                face : imagePath,
                name: 'apek',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " it's time for you and me"
              },
              {
                face : imagePath,
                name: 'lina',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " rampage"
              },
              {
                face : imagePath,
                name: 'mickey',
                times: '7.45 A.M',
                dates: '2 October 2015',
                notes: " and the end"
              },
            ];
    }]);