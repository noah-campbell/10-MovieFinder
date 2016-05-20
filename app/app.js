(function() {
    'use strict'

    // define top-level module container
    var app = angular.module('app', ['ui.router']);

    // additional configuration goes here

    app.config(function($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");

        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "app/partial/home.html",
                controller: "MovieController as movieController"
            })
            .state('home.searchHistory', {
                url: "/searchHistory",
                templateUrl: "app/partial/searchHistory.html"
                controller: "DetailCtrl"

            })
            .state('home.searchHistory.list', {
                url: "/list",
                templateUrl: "app/partial/searchHistory.list.html",
                controller: function($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            });


            controller('DetailCtrl', function ($scope) {
                    vm.detail
                }])
    });
})();
