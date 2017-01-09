(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuy = this;
	
	toBuy.items = ShoppingListCheckOffService.getTobuy();
	
	toBuy.removeItem = function(itemIndex) {
		ShoppingListCheckOffService.removeTobuy(itemIndex);
	};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var bought = this;
		
	bought.items = ShoppingListCheckOffService.getBought();
}

function ShoppingListCheckOffService() {
	var service = this;
	
	var tobuy = ["10 cookies", "5 chips"];
	var bought = [];
	
	service.removeTobuy = function(itemIndex) {
		console.log("Bought:" + tobuy[itemIndex]);
		bought.push(tobuy[itemIndex]);
		tobuy.splice(itemIndex,1);
	}
	
	service.getTobuy = function() {
		return tobuy;
	};
	
	service.getBought = function() {
		return bought;
	};
}

})();
