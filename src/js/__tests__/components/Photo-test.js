var PhotoPath = '../../components/Photo.js';
var PhotoHelperPath = '../../helpers/PhotoHelper.js';
var ViewActionCreatorsPath = '../../actions/ViewActionCreators';

jest.dontMock(PhotoPath);
jest.dontMock(PhotoHelperPath);

import React from 'react/addons';
const Photo = require(PhotoPath);

const ViewActionCreatorsMock = require(ViewActionCreatorsPath);

var TestUtils = React.addons.TestUtils;

describe('Photo', function() {
  it('creates the img src from a photo', function() {
    
    var testPhoto = {
        "id": "20178241195",
        "owner": "133394042@N02",
        "secret": "53e4abe8f5",
        "server": "3761",
        "farm": 4,
        "title": "Space rocket",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0,
        "description": {
          "_content": "Alfies space rocket"
        },
        "iconserver": "0",
        "iconfarm": 0
      };

    var PhotoComp = TestUtils.renderIntoDocument(<Photo photo={testPhoto} size='z' />);

    // make sure we have an element
    var element = TestUtils.findRenderedDOMComponentWithClass(PhotoComp, 'photo-z');
    expect(element).toBeDefined();

	// make sure the state is reflected in the src
    var img = TestUtils.findRenderedDOMComponentWithTag( PhotoComp, 'img'); 
    expect(img.getDOMNode().src).toEqual('http://farm4.staticflickr.com/3761/20178241195_53e4abe8f5_z.jpg');

    // simulate the click
    var node = element.getDOMNode();

    TestUtils.Simulate.click(node);
    expect(ViewActionCreatorsMock.selectPhoto.mock.calls.length).toEqual(1);
  });
});
