(function() {
  var app = angular.module('test', []);

  app.controller('testCtrl', ['$scope', '$http', function($scope, $http){
  	this.yeah = "Kenneth";

  	this.pindot = function(){

  		$http({
		    method : "POST",
		    url : "test.php",
		    data : {
		    	name : "Kenneth",
		    	age : "23",
		    	address : "7A Sct. Torillo Brgy Sacred Heart QC",
		    	phoneNumber : "09951725477"
		    },
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(function mySuccess(response) {
		    console.log(response);
		    $("#testDiv").append('<a href="test2.csv" id="dlCSV" download>Example 3</a>');
		    $("#dlCSV").click();
		}, function myError(response) {
		    console.log("error e");
		});

		/*$http({
        method : "GET",
        url : "test.php"
	    }).then(function mySuccess(response) {
	        console.log(response.data);
	    }, function myError(response) {
	         console.log("wribg");
	    });*/

  	};

  }]);
  
})();