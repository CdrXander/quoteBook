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

/*{"cookies":
	{
		"Tasty Chocolate Chip Cookie":4,
		"Delicious Butter Pecan Cookie":3,
		"Delectable Fortune Cookie":27,
		"Delicious Macaroon Cookie":4,
		"Delectable Chocolate Chip Cookie":3,
		"Flavorful Butter Pecan Cookie":6,
		"Tasty Macaroon Cookie":34
	}
}*/