var githubProfileControllers = angular.module('githubProfileControllers', []);

githubProfileControllers.controller('GithubProfileCtrl', ['$http', function($http) {
  var self = this;
  
  $http.get('https://api.github.com/orgs/makersacademy/members').success(function(data) {
    self.userData = data;
    self.followers = [];

    // This loops over every object in the data array
    self.userData.forEach(function(obj) {
        // Here we call the userDetails function(seen below) for every object
        // and pass in the full obj and the login
        self.userDetails(obj, obj.login);
    });
  });

  // This is where the magic happens, we take two paramaters
   self.userDetails = function(user, login) {
       // Here we make another API request to the individual page
       // using the login we passed
        $http.get('https://api.github.com/users/' + login).success(function(data) {
            // We set user.followers to the data we get from making the request
            // The followers here is just a number
            user.followers = data.followers;
            // The same idea for repos
            user.repos = data.public_repos;
        });
   }; 
}]);

githubProfileControllers.controller('UserDetailCtrl', ['$routeParams',
  function($routeParams) {
      this.userLogin = $routeParams.userLogin;
      console.log($routeParams.userLogin)
}]);
