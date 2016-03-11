'use strict';

// Declare app level module which depends on views, and components
var githubProfile = angular.module('githubProfile', [
    'ngRoute',
    'githubProfileControllers'
]);

githubProfile.config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'partials/user-list.html',
                controller: 'GithubProfileCtrl'
            }).
            when('/users/:userLogin', {
                templateUrl: 'partials/user-detail.html',
                controller: 'UserDetailCtrl'
            }).
            otherwise({
                redirectTo: '/users'
            });
}]);
