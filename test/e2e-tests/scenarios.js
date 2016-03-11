'use strict';

describe('githubProfile', function() {
    beforeEach(function() {
        browser.get('index.html');
    });

    it("should show a list of Maker's github users", function() {
        var name = $('.name');
        expect(name.getText()).toEqual('Adrian1707');
    });

    describe('searching user and user properties', function() {
        var query;

        beforeEach(function() {
            query = element(by.model('query'));
        });

        it("should filter the user list", function() {
            var userList = element.all(by.repeater('user in github.userData'));
            expect(userList.count()).toBeGreaterThan(5);
            query.sendKeys('tochman');
            expect(userList.count()).toBe(1);
        });

        it("should show an avatar for a user", function(){
            query.sendKeys('Adrian1707');
            var image = $('img');
            var imageUrl = image.getAttribute('src');
            expect(imageUrl).toEqual("https://avatars.githubusercontent.com/u/10603440?v=3");
        });

        describe('showing the user', function() {
            var query;

            beforeEach(function() {
                query = element(by.model('query'));
                query.sendKeys('Adrian1707');
                element.all(by.css('a')).click();
            });

            it("it should change the url", function() {
                browser.getLocationAbsUrl().then(function(url) {
                    expect(url).toBe('/users/Adrian1707');
                });
            });

            it('should show the user profile', function() {
                expect(element(by.binding('userLogin')).getText()).toBe('Adrian1707')
            });
        });
    });
});
