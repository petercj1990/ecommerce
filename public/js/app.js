var app = angular.module('swagShop', ['ui.router']);

//console.log("its ya boi")

app.config(function ($urlRouterProvider, $stateProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
			url:'/',
			controller: 'mainCtrl',
			templateUrl: "../views/mainView.html",
			resolve: {
                BUBBIE: function () {
                    console.log('im getting here yo')
                    return 'kjDHSFKJ';
                }
            }
		   })
	.state('login', {
			url:'/login',
			controller: 'loginCtrl',
			templateUrl: "../views/loginView.html"
		   })
	.state('shop', {
			url:'/shop',
			controller: 'shopCtrl',
			templateUrl: "../views/shopView.html"
		   })
	.state('cart', {
			url:'/cart',
			controller: 'cartCtrl',
			templateUrl: "../views/cartView.html"
	  	  })
	.state('admin', {
			url:'/admin',
			controller: 'adminCtrl',
			templateUrl: "../views/adminView.html"
		  })
})