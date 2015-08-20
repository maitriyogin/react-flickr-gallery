var ThumbnailsPath = '../../components/Thumbnails.js';
var PhotoPath = '../../components/Photo.js';
jest.dontMock(ThumbnailsPath);
jest.dontMock(PhotoPath);

import React from 'react/addons';
const Thumbnails = require(ThumbnailsPath);
const Photo = require(PhotoPath);
var TestUtils = React.addons.TestUtils;

describe('Thumbnails', function() {


    it('can build x number of photos', function() {
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
                    }]
            }
        };
        var selectedPhoto = photos.photos.photo[0];

        var ThumbnailsComp = TestUtils.renderIntoDocument(
            <Thumbnails photos={photos} selectedPhoto={selectedPhoto} />);

        // make sure we have an element
        var photos = TestUtils.
            scryRenderedComponentsWithType(ThumbnailsComp, Photo);

        expect(photos.length).toBe(2);

    });
});
