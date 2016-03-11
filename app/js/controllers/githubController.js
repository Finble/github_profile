var githubProfileControllers = angular.module('githubProfileControllers', []);

githubProfileControllers.controller('GithubProfileCtrl', ['$http', function($http) {
  var self = this;
  var repo = [];

  $http.get('https://api.github.com/orgs/makersacademy/members').success(function(data) {
    self.userData = data;


    angular.forEach(data, function(value) {
      repo.push(value.login)
        $http.get(value.repos_url).success(function(repodata){
        self.repoData = repodata.length;
        repo.push(self.repoData);
        console.log(repo);
      });
        // , value.followers_url);
      // repo.push(value.repos_url);
      // repo.push(value.followers_url);
     //  $http.get('https://api.github.com/users/'+ value.login +'/repos').success(function(repodata){
     // self.repoData = repodata;
   });
  });
    //   userName.push(value.login) });
    // userName = data[counter].login;
    // console.log(userName);
    // console.log(self.userName);
    // $http.get('https://api.github.com/users/'+self.userName+'/repos').success(function(data){
    //        self.repoData = data;
    //    });

    // console.log($);


 //  $http.get('https://api.github.com/users/'+ userName +'/repos').success(function(data){
 //   self.repoData = data;
 // });

  // $http.get(self.userData.repos_url)
  //    .success(function(data){
  //        self.repoData = data;
  //    });

}]);

githubProfileControllers.controller('UserDetailCtrl', ['$routeParams',
  function($routeParams) {
    this.userLogin = $routeParams.userLogin;
    console.log($routeParams.userLogin)
  }]);
