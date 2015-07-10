angular.module('dharness-art', [])


.controller('ArtController', ['$rootScope', '$scope',

	function($rootScope, $scope)
	{
		$rootScope.hasNav = false;
		$rootScope.pageTitle = "Arts & Candy"
	}
]);