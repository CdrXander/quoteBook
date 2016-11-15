angular.module('quoteBook').controller('MainController', function($scope, quoteService){
	

	$scope.getQuotes = function() {
		$scope.quotes = quoteService.getQuotes();
	}();

	$scope.addQuote = quoteService.addQuote;
	$scope.removeQuote = quoteService.removeQuote;



})