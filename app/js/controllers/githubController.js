var githubProfileControllers = angular.module('githubProfileControllers', []);

githubProfileControllers.controller('GithubProfileCtrl', ['$http', function($http) {
  var self = this;
  
  $http.get('https://api.github.com/orgs/makersacademy/members').success(function(data) {
    self.userData = data;
    self.followers = [];

    self.userData.forEach(function(obj) {
        self.userDetails(obj, obj.login);
    });
  });

   self.userDetails = function(user, login) {
        $http.get('https://api.github.com/users/' + login).success(function(data) {
            user.followers = data.followers;
            user.repos = data.public_repos;
        });
   }; 
}]);

githubProfileControllers.controller('UserDetailCtrl', ['$routeParams',
  function($routeParams) {
      this.userLogin = $routeParams.userLogin;
      console.log($routeParams.userLogin)
}]);
