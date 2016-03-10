'use strict';

describe('githubProfile', function() {

  it("should show a list of Maker's github users", function() {
    browser.get('index.html');
    var name = $('.name');
    expect(name.getText()).toEqual('Adrian1707');
  });

});
