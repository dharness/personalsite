angular.module('dharness-project-card', [])


// directive for organization of component
.directive('projectCard', [

	function()
	{
		'use strict';

		return {
			templateUrl: 'app/shared/components/project-card-template.html',
			controller: function($scope)
			{
				$scope.$watch('projects', function()
				{

					// loop thru all projects
					for (var i = 0; i < $scope.projects.length; i++)
					{
						//clear each projects stack
						$('#project-' + i + '-tech').html("");
						$('#project-' + i + '-tech').niceScroll();;
						//add the stack back
						$scope.projects[i].techStack.sort().reverse();
						for (var p = 0; p < $scope.projects[i].techStack.length; p++)
						{
							var techItem = $scope.projects[i].techStack[p];

							$('#project-' + i + '-tech').html($('#project-' + i + '-tech').html() +
								"<div class='col-lg-3'><img class='dh-tech-img' src='./assets/images/projects/tech_logos/" +
								techItem + ".png'/></div>"
							)
						}

					}


				});

			}
		};
	}
]);