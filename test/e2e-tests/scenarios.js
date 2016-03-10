'use strict';

describe('githubProfile', function() {
  beforeEach(function() {
    browser.get('index.html');
  });

  it("should show a list of Maker's github users", function() {
    var name = $('.name');
    expect(name.getText()).toEqual('Adrian1707');
  });

  it("should filter the user list", function() {
    var userList = element.all(by.repeater('user in github.userData'));
    var query = element(by.model('query'));

    expect(userList.count()).toBeGreaterThan(5);

    query.sendKeys('tochman');
    expect(userList.count()).toBe(1);
  });
});
