(function() {
    'use strict';

    angular
        .module('app')
        .factory('MovieFactory', MovieFactory);

    MovieFactory.$inject = ['$http', '$q', '$log'];

    /* @ngInject */
    function MovieFactory($http, $q, $log) {
        var service = {
            getMovie: getMovie
        };
        return service;

        ////////////////



        function getMovie(movie) {
             var defer = $q.defer();
             // var url = 'http://www.omdbapi.com/?s=Batman&page=2'; 
             var api = 'http://www.omdbapi.com/?s='; 
             var url = api + movie;
        
             // console.log(url);
             // console.log(fullLink);
             $http({
               method: 'GET',
               url: url
            }).then(
              function(response) {
                if(typeof response.data === 'object'){
              defer.resolve(response);
              toastr.success('Movie search is Working!');
            } else {
              defer.reject(response);
              toastr.warning('no movie found<br/>' + response.config.url);
            }
        },
        // failure
          function(error) {
              defer.reject(error);
              $log.error(error);
              toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
          });

          return defer.promise;

        };
  
}
})();
