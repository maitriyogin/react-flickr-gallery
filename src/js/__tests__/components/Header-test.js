var HeaderPath = '../../components/Header.js';
var SearchPath = '../../components/Search.js';
jest.dontMock(HeaderPath);
jest.dontMock(SearchPath);

import React from 'react/addons';
const Header = require(HeaderPath);

var TestUtils = React.addons.TestUtils;

describe('Header', function () {
  it('filter on search text', function () {

    var HeaderComp = TestUtils.renderIntoDocument(<Header />);

    // make sure we have an element
    var search = TestUtils.
      findRenderedDOMComponentWithClass(HeaderComp, 'search');

    expect(search).toBeDefined();

  });
});
