'use strict';

/**
 * @ngdoc function
 * @name textSummaryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the textSummaryApp
 */

angular.module('textSummaryApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
    $scope.search = ""

	var initCrawlerUrl="http://localhost:8080/start-crawler";

	$http.get(initCrawlerUrl)
	.then(function(response) {
		console.log(response);
	}, function(error) {
		console.log(error);
	});

	$scope.onSubmit = function() {
		var search = $scope.search.split(' ').join('+');
    	var naRaliUrla = "http://localhost:8080/find-summarized-article?searchText=" + search;
   		$scope.summary = ""

    	$http({
		    method: 'GET',
		    url: naRaliUrla,
		    data: {},
		    transformResponse: function (data, headersGetter, status) {
		    	$scope.summary = data;
		        return {data: data};
		    }
		})
	}
  });
