module.exports = function () {
  this.When(/^I search Google for "([^"]*)"$/, function (searchQuery) {
    return helpers.loadPage('http://www.google.com').then(function () {
      // use a method on the page object which also returns a promise
      return page.googleSearch.performSearch(searchQuery)
    })
  })
}
