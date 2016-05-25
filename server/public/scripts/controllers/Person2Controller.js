myApp.controller('Person2Controller', ['$scope', '$http', function($scope, $http) {
    $scope.personInfo = {};

    $scope.getInfo = function() {
        $http({
            method: "GET",
            url: '/person'
        }).then(function(res){
            $scope.personInfo = res.data[1];
        })
    };
}]);