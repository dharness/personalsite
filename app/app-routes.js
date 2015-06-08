app.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'app/views/main/main-view.html',
        controller: 'MainController'
    })

    .when('/bla-bla-blog', {
        templateUrl: 'app/views/blog/blog-view.html',
        controller: 'BlogController'
    })

});
