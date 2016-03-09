'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('githubProfile', function() {


  it("should show a list of Maker's github users", function() {
    browser.get('index.html');
    var name = $('#name')
    expect(name.getText()).toBe("Adrian1707")
  });



});
