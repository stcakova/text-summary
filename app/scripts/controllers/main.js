'use strict';

/**
 * @ngdoc function
 * @name textSummaryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the textSummaryApp
 */
angular.module('textSummaryApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.search = ""

	$scope.onSubmit = function() {
		var search = $scope.search.split(' ').join('+');
    	var naRaliUrla = "http://localhost:8080/find-summarized-article?searchText=" + search;
   		$scope.summary = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    	$http.get(naRaliUrla)
    	.then(function(response) {
    		$scope.summary = response.summary;
    	}, function(error) {
    		console.log(error);
    	});
	}
  });
