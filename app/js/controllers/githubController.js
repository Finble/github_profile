var githubProfileControllers = angular.module('githubProfileControllers', []);

githubProfileControllers.controller('GithubProfileCtrl', ['$http', function($http) {
  var self = this;
  
  $http.get('https://api.github.com/orgs/makersacademy/members').success(function(data) {
    self.userData = data;
  });

}]);

githubProfileControllers.controller('UserDetailCtrl', ['$routeParams',
  function($routeParams) {
      this.userLogin = $routeParams.userLogin;
      console.log($routeParams.userLogin)
}]);
