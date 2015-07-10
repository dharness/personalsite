angular.module('dharness-profiterole', [])

.factory('Project', function()
{

	function Project(title, desc, date, live, git, imgs, stack)
	{
		this.project = {

			title: title,
			description: desc,
			date: date,
			liveLink: live,
			github: git,
			images: imgs,
			techStack: stack,
		}
	}


	return Project;
})


.controller('ProfiteroleController', ['$rootScope', '$scope', '$http',
	'Project',

	function($rootScope, $scope, $http, Project)
	{
		$rootScope.hasNav = false;
		$rootScope.pageTitle = "Techincal Profiterole"
		$scope.Math = window.Math;
		var allProjects = [];
		$scope.projects = [];
		$scope.tags = [];

		var h = $http.get('./assets/data/projects.json').success(function(res)
		{
			allProjects = res.projects;
			$scope.projects = allProjects;

		}).error(function(error)
		{
			console.log(error);
		});

		$scope.$watch('tags', function()
		{
			$scope.search();
		}, true)



		$scope.search = function()
		{
			$scope.projects = [];

			for (var t = 0; t < $scope.tags.length; t++)
			{
				for (var i = 0; i < allProjects.length; i++)
				{
					var techStack = allProjects[i].techStack;

					if (techStack.indexOf($scope.tags[t]) >= 0)
					{
						$scope.projects.push(allProjects[i]);
					}
				}
			}

		}

	}
]);