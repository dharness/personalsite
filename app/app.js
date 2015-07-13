(function(angular, undefined)
{
	"use strict";
	angular.module('dharness', ['ngMaterial', "ngRoute", 'dharness-project-card'])
		.config(["$routeProvider", "$mdThemingProvider",
			function($routeProvider, $mdThemingProvider)
			{
				$routeProvider.when("/techtips",
				{
					templateUrl: "app/views/techtips/techtips.html"
				});
				$routeProvider.when("/mission",
				{
					templateUrl: "app/views/mission/mission.html"
				});
				$routeProvider.when("/portfolio",
				{
					templateUrl: "app/views/portfolio/portfolio.html"
				});
				$routeProvider.when("/quotebot",
				{
					templateUrl: "app/views/quotebot/quotebot.html"
				});
				$routeProvider.otherwise(
				{
					redirectTo: "/techtips"
				});


				$mdThemingProvider.theme('default')
					.primaryPalette('grey')
					.accentPalette('amber');

			}
		])
	/**
	 *  Simple controller to build a `user` data model
	 *  that will be used to databinding with `<tf-float>` directives
	 */
	.controller('MainController', function($rootScope, $scope, $location, $http)
	{
		$rootScope.hideSplash = false;
		$scope.projects = [];
		var allProjects = [];

		$scope.toggleSplash = function()
		{
			$rootScope.hideSplash = !$rootScope.hideSplash;
			document.body.style.overflow = 'auto';

		}

		$scope.relocate = function(url)
		{
			alert(url);

		}

		// PORTFOLIO
		$http.get('./assets/data/projects.json').success(function(res)
		{
			allProjects = res.projects;
			$scope.projects = allProjects;

		}).error(function(error)
		{
			console.log(error);
		});

		$scope.searchTerms = ['one', 'two'];

		$scope.$watch('searchTerms', function() {

		}, true);

		$("#project-content > .row .dh-tech-scroll ").niceScroll();

	});

})(angular);