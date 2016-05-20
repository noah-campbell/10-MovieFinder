(function() {
    'use strict';

    angular
        .module('app')
        .controller('MovieController', MovieController);

    MovieController.$inject = ['MovieFactory'];

    /* @ngInject */
    function MovieController(MovieFactory) {
        var vm = this;

        vm.test = "hey there";

        vm.getMovie = function getMovie(movie) {
          MovieFactory.getMovie(movie).then(
            function(response) {

                vm.MovieResponse = response.data.Search;

                console.log(vm.MovieResponse);

            },

            function(error) {
                $log.error('failed to get weatherAPI', error)
            }
          );
        };
    }
})();
