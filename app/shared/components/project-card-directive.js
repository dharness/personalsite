angular.module('dharness-project-card', [])



// directive for organization of component
.directive('projectCard', [

	function()
	{
		'use strict';

		return {
			templateUrl: 'app/shared/components/project-card-template.html'
		};
	}
]);