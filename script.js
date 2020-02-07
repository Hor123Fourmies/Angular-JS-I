var app = angular.module("monAppli", [ngRoute]);


app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "index.html"
        })
        .when("/films", {
            templateUrl : "films.html",
            controller : "monControlleur"
        })
        .when("/livres", {
            templateUrl : "livres.html",
            controller : "livresControlleur"
        })
        .when("/jeuxvideos", {
            templateUrl : "jeuxvideos.html",
            controller : "jeuxvideosControlleur"
        });
});

/*
app.controller('monControlleur', function($scope) {
    $scope.film1 = "The big lebowsky";
    $scope.film2 = "Fargo";
});
*/
/*
app.controller('monControlleur', function($scope) {
    $scope.films = ["The big Lebowsky","Fargo","O'Brother","The Barber"];

    $scope.ajouterFilm = function()
    {
        $scope.films.push($scope.ajoutFilm);
    }
});
*/
app.controller('monControlleur', function($scope,$http) {
    $http({
        method:"POST",
        url:"test.php",
        data:{nouveauFilm : $scope.ajoutFilm}
    }).then(function Success(response)
        {
            alert(response.data);
        },
        function Error(response)
        {
            alert(response.statusText);
        });
});