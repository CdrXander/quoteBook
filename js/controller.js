angular.module('quoteBook').controller('MainController', function($scope, quoteService){
	

	$scope.getQuotes = function() {
		$scope.quotes = quoteService.getQuotes();
	}();

	$scope.addQuote = function() {
		quoteService.addQuote($scope.newQuote.text, $scope.newQuote.author)		
		$scope.newQuote.text = "";
		$scope.newQuote.author = "";
	}

	$scope.removeQuote = quoteService.removeQuote;



})