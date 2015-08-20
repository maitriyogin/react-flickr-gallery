import  AppDispatcher from '../AppDispatcher';
import {EventEmitter} from 'events';
import {ActionTypes, PAGING} from '../Constants';
import assign from 'object-assign';

var events = new EventEmitter();
var CHANGE_EVENT = 'CHANGE';

var state = {
  photos: {},
  loaded: false,
  errorMessage : null,
  selectedPhoto : null,
  showShare : false,
  page : {
  	index : 0,
  	page : 1,
  	perpage : 6,
  	total : -1,
  	maxPages : 4,
  	totalPages : 0,
  	text : ''
  }
  
};

function setState(newState) {
  assign(state, newState);
  events.emit(CHANGE_EVENT);
}

var PhotoStore = {
  addChangeListener: function (fn) {
    events.addListener(CHANGE_EVENT, fn);
  },

  removeChangeListener: function (fn) {
    events.removeListener(CHANGE_EVENT, fn);
  },

  getState: function () {
    return state;
  }
};

function copyPage(statePage, index, text){
	var page = {};
	page.page = statePage.page;
  	page.perpage = statePage.perpage;
  	page.total = Number(statePage.total);
  	page.index = index;
  	page.maxPages = state.page.maxPages;
  	page.text = text
  	return page;
}

PhotoStore.dispatchToken = AppDispatcher.register(function (payload) {
  var { action } = payload;
  
  if (action.type === ActionTypes.PHOTOS_LOADED) {	
    setState({
      loaded: true,
      photos: action.photos,
      errorMessage : null,
      selectedPhoto : action.photos.photos.photo[0],
      page : copyPage(action.photos.photos, state.page.index, action.text)
    });
  }

  if (action.type === ActionTypes.SELECT_PHOTO) {
  	var i = state.photos.photos.photo.indexOf(state.selectedPhoto);
  	if(action.direction != null){
  		// find element and go back or forward
  		var length = state.photos.photos.photo.length;
  		if(action.direction == PAGING.LEFT){
  			i--;
  			if(i < 0){
  				i = length -1;
  			}
  		} else if(action.direction == PAGING.RIGHT){
  			i++;
  			if(i >= length){
  				i = 0;
  			}
  		}
  		action.selectedPhoto = state.photos.photos.photo[i];
  	}
    setState({
      loaded: true,
      selectedPhoto: action.selectedPhoto,
      page : copyPage(state.page, i, state.page.text)
    });
  }

  if (action.type === ActionTypes.SHOW_SHARE) {  
    var newState = {}
    assign(newState,state)
    newState.showShare = action.showShare;
    setState(newState);
  }

});

module.exports = PhotoStore;