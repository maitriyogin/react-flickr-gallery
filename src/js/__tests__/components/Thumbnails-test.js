var ThumbnailsPath = '../../components/Thumbnails.js';
var PhotoPath = '../../components/Photo.js';
jest.dontMock(ThumbnailsPath);
jest.dontMock(PhotoPath);

import React from 'react/addons';
import Constants from '../../Constants';
const Thumbnails = require(ThumbnailsPath);
const Photo = require(PhotoPath);
var TestUtils = React.addons.TestUtils;

describe('Thumbnails', function() {

    it('can build x number of photos and that active photo is set', function() {
        var photos = {
            photos: {
                photo: [
                    {
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
                    }, {
                        "id": "20178241196",
                        "owner": "133394042@N02",
                        "secret": "53e4abe8f5",
                        "server": "3761",
                        "farm": 4,
                        "title": "Smurf house",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0,
                        "description": {
                            "_content": "Smurf house"
                        },
                        "iconserver": "0",
                        "iconfarm": 0
                    },
                    {
                        "id": "20178241197",
                        "owner": "133394042@N02",
                        "secret": "53e4abe8f5",
                        "server": "3761",
                        "farm": 4,
                        "title": "Mount fear",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0,
                        "description": {
                            "_content": "Mount fear"
                        },
                        "iconserver": "0",
                        "iconfarm": 0
                    }]
            }
        };
        var selectedPhoto = photos.photos.photo[0];

        var ThumbnailsComp = TestUtils.renderIntoDocument(
            <Thumbnails photos={photos} selectedPhoto={selectedPhoto} />);

        // make sure we have an element
        var photos = TestUtils.
            scryRenderedComponentsWithType(ThumbnailsComp, Photo);

        expect(photos.length).toBe(3);

        // test the classes
        var p1 = React.findDOMNode(photos[0]);
        var p2 = React.findDOMNode(photos[1]);
        var p3 = React.findDOMNode(photos[2]);
        //console.log(JSON.stringify(p1.className));
        //console.log(JSON.stringify(p2.className));
        //console.log(JSON.stringify(p3.className));
        expect(p1.className.indexOf('active') > 0).toBeTruthy()
        expect(p1.className.indexOf('start') > 0).toBeTruthy();
        expect(p2.className.indexOf('start') == -1).toBeTruthy();
        expect(p2.className.indexOf('end') == -1).toBeTruthy();
        expect(p3.className.indexOf('end') > 0).toBeTruthy();

    });

    it('can build create the correct start and end class names with a row count of 4 with 6 photos', function() {
        var photos = {
            photos: {
                photo: [
                    {
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
                    }, {
                        "id": "20178241196",
                        "owner": "133394042@N02",
                        "secret": "53e4abe8f5",
                        "server": "3761",
                        "farm": 4,
                        "title": "Smurf house",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0,
                        "description": {
                            "_content": "Smurf house"
                        },
                        "iconserver": "0",
                        "iconfarm": 0
                    },
                    {
                        "id": "20178241197",
                        "owner": "133394042@N02",
                        "secret": "53e4abe8f5",
                        "server": "3761",
                        "farm": 4,
                        "title": "Mount fear",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0,
                        "description": {
                            "_content": "Mount fear"
                        },
                        "iconserver": "0",
                        "iconfarm": 0
                    },{
                        "id": "20178241198",
                        "owner": "133394042@N02",
                        "secret": "53e4abe8f5",
                        "server": "3761",
                        "farm": 4,
                        "title": "Space rocket",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0,
                        "description": {
                            "_content": "Bennys space rocket"
                        },
                        "iconserver": "0",
                        "iconfarm": 0
                    }, {
                        "id": "20178241199",
                        "owner": "133394042@N02",
                        "secret": "53e4abe8f5",
                        "server": "3761",
                        "farm": 4,
                        "title": "Smurf house",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0,
                        "description": {
                            "_content": "Smurf house of fear"
                        },
                        "iconserver": "0",
                        "iconfarm": 0
                    },
                    {
                        "id": "20178241200",
                        "owner": "133394042@N02",
                        "secret": "53e4abe8f5",
                        "server": "3761",
                        "farm": 4,
                        "title": "Mount fear",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0,
                        "description": {
                            "_content": "Hockey smurf"
                        },
                        "iconserver": "0",
                        "iconfarm": 0
                    }]
            }
        };
        var selectedPhoto = photos.photos.photo[0];

        var ThumbnailsComp = TestUtils.renderIntoDocument(
            <Thumbnails photos={photos} selectedPhoto={selectedPhoto} />);

        // make sure we have an element
        var photos = TestUtils.
            scryRenderedComponentsWithType(ThumbnailsComp, Photo);

        expect(photos.length).toBe(6);

        // test the classes
        var p1 = React.findDOMNode(photos[0]);
        var p4 = React.findDOMNode(photos[3]);
        var p5 = React.findDOMNode(photos[4]);
        var p6 = React.findDOMNode(photos[5]);
        //console.log(JSON.stringify(p1.className));
        //console.log(JSON.stringify(p2.className));
        //console.log(JSON.stringify(p5.className));
        //console.log(JSON.stringify(p6.className));
        expect(p1.className.indexOf('start') > 0).toBeTruthy();
        expect(p4.className.indexOf('end') > 0).toBeTruthy();
        expect(p5.className.indexOf('start') > 0).toBeTruthy();

    });

    it('can build create the correct start and end class names with a rowcount of 2', function() {
        var photos = {
            photos: {
                photo: [
                    {
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
                    }, {
                        "id": "20178241196",
                        "owner": "133394042@N02",
                        "secret": "53e4abe8f5",
                        "server": "3761",
                        "farm": 4,
                        "title": "Smurf house",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0,
                        "description": {
                            "_content": "Smurf house"
                        },
                        "iconserver": "0",
                        "iconfarm": 0
                    },
                    {
                        "id": "20178241197",
                        "owner": "133394042@N02",
                        "secret": "53e4abe8f5",
                        "server": "3761",
                        "farm": 4,
                        "title": "Mount fear",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0,
                        "description": {
                            "_content": "Mount fear"
                        },
                        "iconserver": "0",
                        "iconfarm": 0
                    },{
                        "id": "20178241198",
                        "owner": "133394042@N02",
                        "secret": "53e4abe8f5",
                        "server": "3761",
                        "farm": 4,
                        "title": "Space rocket",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0,
                        "description": {
                            "_content": "Bennys space rocket"
                        },
                        "iconserver": "0",
                        "iconfarm": 0
                    }, {
                        "id": "20178241199",
                        "owner": "133394042@N02",
                        "secret": "53e4abe8f5",
                        "server": "3761",
                        "farm": 4,
                        "title": "Smurf house",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0,
                        "description": {
                            "_content": "Smurf house of fear"
                        },
                        "iconserver": "0",
                        "iconfarm": 0
                    },
                    {
                        "id": "20178241200",
                        "owner": "133394042@N02",
                        "secret": "53e4abe8f5",
                        "server": "3761",
                        "farm": 4,
                        "title": "Mount fear",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0,
                        "description": {
                            "_content": "Hockey smurf"
                        },
                        "iconserver": "0",
                        "iconfarm": 0
                    }]
            }
        };
        var selectedPhoto = photos.photos.photo[0];

        Constants.ROWCOUNT = 2;

        var ThumbnailsComp = TestUtils.renderIntoDocument(
            <Thumbnails photos={photos} selectedPhoto={selectedPhoto} />);

        // make sure we have an element
        var photos = TestUtils.
            scryRenderedComponentsWithType(ThumbnailsComp, Photo);

        expect(photos.length).toBe(6);

        // test the classes
        var p1 = React.findDOMNode(photos[0]);
        var p2 = React.findDOMNode(photos[1]);
        var p3 = React.findDOMNode(photos[2]);
        var p5 = React.findDOMNode(photos[4]);
        var p6 = React.findDOMNode(photos[5]);
        //console.log(JSON.stringify(p1.className));
        //console.log(JSON.stringify(p2.className));
        //console.log(JSON.stringify(p5.className));
        //console.log(JSON.stringify(p6.className));
        expect(p1.className.indexOf('start') > 0).toBeTruthy();
        expect(p2.className.indexOf('end') > 0).toBeTruthy();
        expect(p3.className.indexOf('start') > 0).toBeTruthy();
        expect(p5.className.indexOf('start') > 0).toBeTruthy();
        expect(p6.className.indexOf('end') > 0).toBeTruthy();

    });
});
