angular.module('dharness-blog', [])


.controller('BlogController', ['$scope',

	function($scope)
	{

		$scope.oneAtATime = true;

		$scope.groups = [
		{
			title: 'Wrestling with Giants',
			content: 'Dynamic Group Body - 1'
		},
		{
			title: 'Philosophy',
			content: 'Dynamic Group Body - 2'
		}];

		$scope.items = ['Item 1', 'Item 2', 'Item 3'];

		$scope.addItem = function()
		{
			var newItemNo = $scope.items.length + 1;
			$scope.items.push('Item ' + newItemNo);
		};

		$scope.status = {
			isFirstOpen: true,
			isFirstDisabled: false
		};


	}
]);