angular.module('dharness-blog', [])


.controller('BlogController', ['$rootScope', '$location',

	function($rootScope, $location)
	{
		$rootScope.hasNav = false;
		$rootScope.pageTitle = "Bla Bla Blog"
	}
]);