'use strict';

/* Services */

var fruitsServices = angular.module('fruitsServices', ['ngResource']);

fruitsServices.factory('Serie', ['$resource',
  function($resource){
    return $resource('http://ntag/fruits/api/series/:id', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);
fruitsServices.factory('Saison', ['$resource',
  function($resource){
    return $resource('http://ntag/fruits/api/series/saison/:id');
  }]);
