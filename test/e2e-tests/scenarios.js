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

        it("should display the number of followers per user", function() {
            query.sendKeys('Adiran1707');
            var followers = $(".followers");
            expect(followers.getText()).toEqual('24');
        });

        // This test was written after I was blocked from making API
        // requests therefore it hasn't been tested,
        // also the number 52 may be completely wrong so you will have to double check
        it("should display the number of public repos per user", function() {
            query.sendKeys('Adrian1707');
            var repos = $('.Repositories');
            expect(repos.getText()).toEqual('52');
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
