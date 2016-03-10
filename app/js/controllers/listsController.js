githubProfile.controller('GithubProfileCtrl', ['$http', function($http) {
  var self = this;
  
  $http.get('https://api.github.com/orgs/makersacademy/members').success(function(data) {
    self.userData = data;
  });

}]);
