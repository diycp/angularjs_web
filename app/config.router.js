'use strict';
app.config(
    [
        '$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider
                .otherwise('/app/index');
            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: 'views/layout.html'
                })
                .state('app.index', {
                    url: '/index',
                    templateUrl: 'views/index.html',
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    serie: true,
                                    files: [
                                        'app/controllers/index.js'
                                    ]
                                });
                            }
                        ]
                    }
                })


            $locationProvider.html5Mode(true);
        }

    ]
);
