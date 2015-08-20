var SearchPath = '../../components/Search.js';
var ViewActionCreatorsPath = '../../actions/ViewActionCreators';

jest.dontMock(SearchPath);

import React from 'react/addons';
const Search = require(SearchPath);

const ViewActionCreatorsMock = require(ViewActionCreatorsPath);

var TestUtils = React.addons.TestUtils;

describe('Search', function () {
  it('filter on search text', function () {

    var SearchComp = TestUtils.renderIntoDocument(<Search />);

    // make sure we have an element
    var element = TestUtils.findRenderedDOMComponentWithTag(SearchComp, 'input');
    expect(element).toBeDefined();

    // simulate text entry
    element.getDOMNode().value = 'smurf';

    // simulate enter key
    TestUtils.Simulate.keyDown(element, {which:13});

    // check that a view action has been created
    expect(ViewActionCreatorsMock.loadPhotos.mock.calls[0][0]).toBe('smurf');

    console.log(JSON.stringify(SearchComp.state));
    expect(SearchComp.state.filterText).toEqual('smurf')
  });
});
