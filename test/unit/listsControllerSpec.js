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
});
