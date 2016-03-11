describe('listsController', function() {
    var ctrl, $httpBackend;

    beforeEach(function(){
        module("githubProfile");
        inject(function(_$httpBackend_, $controller){
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('https://api.github.com/orgs/makersacademy/members')
                 .respond([{login: 'Adrian1707'}]);
            ctrl = $controller('GithubProfileCtrl');
        });
    });

    it('should create userData model with github users', function(){
        expect(ctrl.userData).toBeUndefined();
        $httpBackend.flush();
        expect(ctrl.userData).toEqual([{login: 'Adrian1707'}]);
    });

    // I don't think this test will work
    // Haven't had chance to try it as I have been blocked from making
    // any more API calls tonight
    it('should get the number of followers', function() {
        $httpBackend.expectGET('https://api.github.com/users/Adrian1707')
            .respond([{followers: 24}]);
        $httpBackend.flush();
        expect(ctrl.userDetails).toEqual([{followers: 24}]);
    });
});
