/**
 * Created by king on 8/10/15.
 */

var app=angular.module("app",['ui.router','ngSanitize','ui.bootstrap','ngResource']);

app.config(['$stateProvider','$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    "viewA": {
                        templateUrl: 'templates/home.html',
                        controller: 'homeCtrl'
                    }
                }
            })

        .state('Contact', {
            url: '/Contact',
            views: {
                "viewA": {
                    templateUrl: 'templates/Contact.html',
                    controller: 'ContactCtrl'
                }
            }
        })

            .state('mywork', {
                url: '/mywork',
                views: {
                    "viewA": {
                        templateUrl: 'templates/mywork.html',
                        controller: 'myworkCtrl'
                    }
                }
            })



}]);


