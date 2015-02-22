(function (){
	
var app = angular.module('store', ['store-products']);


// app.controller('StoreController', function(){
// 	this.products = gems;
// });

app.controller('StoreController', ['$http',function($http){
	var store = this;
	store.products=[];
	$http.get('https://raw.githubusercontent.com/suryatech/codeschool-shaping-up-with-angular/master/store-products.json')
	.success(function(data){
		store.products = data;
	})
	.error(function (argument) {
	});
}]);


// app.controller("PanelController",function () {
// 	this.tab = 1;

// 	this.selectTab=function (argument) {
// 		this.tab = argument;
// 	};

// 	this.isSelected=function (argument) {
// 		return this.tab === argument;
// 	};
// });

app.controller("ReviewController", function(){
	this.review = {};
	this.addReview = function(product) {
		product.images[0].full="http://lorempixel.com/400/200/";
		product.reviews.push(this.review);
	};
});



var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, nonummy mollis nullam sodales etiam, purus curabitur nulla sodales, nec massa. Arcu tellus, et at facilisis augue erat placerat sit, at consectetuer neque turpis bibendum cursus, laoreet sed vestibulum, augue interdum duis nec a.',
		canPurchase: true,
		images:[
			{
				full:'http://lorempixel.com/400/200/',
				thumd:'http://lorempixel.com/200/100/'
			},
			{
				full:'http://lorempixel.com/400/200/',
				thumd:'http://lorempixel.com/200/100/'
			},
			{
				full:'http://lorempixel.com/400/200/',
				thumd:'http://lorempixel.com/200/100/'
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",author:"joe@thomas.com"
			},
			{
				stars: 1,
				body: "This product sucks",author: "tim@hater.com"
			}
		]
	},
	{
		name: 'Dodecahedron2',
		price: 3.95,
		description: 'Lorem ipsum dolor sit amet, nonummy mollis nullam sodales etiam, purus curabitur nulla sodales, nec massa. Arcu tellus, et at facilisis augue erat placerat sit, at consectetuer neque turpis bibendum cursus, laoreet sed vestibulum, augue interdum duis nec a.',
		canPurchase: true,
		images:[
			{
				full:'http://lorempixel.com/400/200/',
				thumd:'http://lorempixel.com/200/100/'
			},
			{
				full:'http://lorempixel.com/400/200/',
				thumd:'http://lorempixel.com/200/100/'
			},
			{
				full:'http://lorempixel.com/400/200/',
				thumd:'http://lorempixel.com/200/100/'
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",author:"joe@thomas.com"
			},
			{
				stars: 1,
				body: "This product sucks",author: "tim@hater.com"
			}
		]
	},
	{
		name: 'Dodecahedron3',
		price: 5.95,
		description: 'Lorem ipsum dolor sit amet, nonummy mollis nullam sodales etiam, purus curabitur nulla sodales, nec massa. Arcu tellus, et at facilisis augue erat placerat sit, at consectetuer neque turpis bibendum cursus, laoreet sed vestibulum, augue interdum duis nec a.',
		canPurchase: false,
		images:[
			{
				full:'http://lorempixel.com/400/200/',
				thumd:'http://lorempixel.com/200/100/'
			},
			{
				full:'http://lorempixel.com/400/200/',
				thumd:'http://lorempixel.com/200/100/'
			},
			{
				full:'http://lorempixel.com/400/200/',
				thumd:'http://lorempixel.com/200/100/'
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",author:"joe@thomas.com"
			},
			{
				stars: 1,
				body: "This product sucks",author: "tim@hater.com"
			}
		]
	},
	{
		name: 'Dodecahedron4',
		price: 4.95,
		description:'Lorem ipsum dolor sit amet, nonummy mollis nullam sodales etiam, purus curabitur nulla sodales, nec massa. Arcu tellus, et at facilisis augue erat placerat sit, at consectetuer neque turpis bibendum cursus, laoreet sed vestibulum, augue interdum duis nec a.',
		canPurchase: true,
		images:[
			{
				full:'http://lorempixel.com/400/200/',
				thumd:'http://lorempixel.com/200/100/'
			},
			{
				full:'http://lorempixel.com/400/200/',
				thumd:'http://lorempixel.com/200/100/'
			},
			{
				full:'http://lorempixel.com/400/200/',
				thumd:'http://lorempixel.com/200/100/'
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",author:"joe@thomas.com"
			},
			{
				stars: 1,
				body: "This product sucks",author: "tim@hater.com"
			}
		]
	}];
})();
