app.config(function($routeProvider)
{
	$routeProvider

	.when('/',
	{
		templateUrl: 'app/views/main/main-view.html',
		controller: 'MainController'
	})

	.when('/technical-profiterole',
	{
		templateUrl: 'app/views/portfolio/portfolio.html',
		controller: 'ProfiteroleController'
	})

	.when('/aboot',
	{
		templateUrl: 'app/views/about/about-view.html'
	})

	.when('/art',
	{
		templateUrl: 'app/views/art/art-view.html',
		controller: 'ArtController'
	})

	.when('/bla-bla-blog',
	{
		templateUrl: 'app/views/blog/blog-view.html',
		controller: 'BlogController'
	})


});