import {ActionTypes} from '../Constants';
import AppDispatcher from '../AppDispatcher';

var ServerActionCreators = {
  // ------------- flickr
  loadedPhotos: function (photos, text) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.PHOTOS_LOADED,
      photos: photos,
      text : text
    });
  },

};

module.exports = ServerActionCreators;
