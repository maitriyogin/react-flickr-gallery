import {ActionTypes} from '../Constants';
import AppDispatcher from '../AppDispatcher';
import FlickrProxy from '../proxy/FlickrProxy'

var ViewActionCreators = {
  //------
  loadPhotos: function (text = '', perpage = 8, page = 1) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_PHOTOS,
      text : text,
      perPage : perpage,
      page : page
    });
    FlickrProxy.loadPhotos(text, perpage, page);
  },
  selectPhoto: function (photo, direction = null) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.SELECT_PHOTO,
      selectedPhoto : photo,
      direction : direction
    });
  },
  showShare: function(show){
    AppDispatcher.handleViewAction({
      type: ActionTypes.SHOW_SHARE,
      showShare : show
    });
  }
};

module.exports = ViewActionCreators;
