(function(){
	var app = angular.module('store-products', [ ]);

	app.directive('productTitle',function () {
		return {
			restrict : 'E',//type of directive is element exemeple <product-title>...</product-title>
			templateUrl: 'template/product-title.html'
		};
	});

	app.directive('productTitle',function () {
		return {
			restrict : 'A',//type of directive is attribute exemeple < h3 product-title>...</h3>
			templateUrl: 'template/product-title.html'
		};
	});

	app.directive('productPanels',function () {
		return {
			restrict : 'E',//type of directive is attribute exemeple < h3 product-title>...</h3>
			templateUrl: 'template/product-panel.html',
			controller: function () {
				this.tab = 1;

				this.selectTab=function (argument) {
					this.tab = argument;
				};

				this.isSelected=function (argument) {
					return this.tab === argument;
				};
			},
			controllerAs:'panel'
		};
	});
})();