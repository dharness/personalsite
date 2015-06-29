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


.controller('ProfiteroleController', ['$scope', '$http', 'Project',

	function($scope, $http, Project)
	{
		$scope.Math = window.Math;

		var h = $http.get('./assets/data/projects.json').success(function(res)
		{
			$scope.projects = res.projects;

		}).error(function(error)
		{
			console.log(error);
		})

	}
]);