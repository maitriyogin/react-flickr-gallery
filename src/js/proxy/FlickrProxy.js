import $ from 'jquery';
import { FLICKR, ActionTypes } from '../Constants';
import ServerActionCreators from '../actions/ServerActionCreators';
import assign from 'object-assign';

var _searchApi = function(api){
	return `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api.key}&user_id=${api.userId}&per_page=${api.perPage}&page=${api.page}&text=${api.text}&format=json&nojsoncallback=1`;
};

var FlickrProxy = {
	loadPhotos : function(text = '', perPage = 6, page = 1){
		var api = {text:text, perPage:perPage, page:page};
		assign(api, FLICKR);
		var searchApi = _searchApi(api);
		$.ajax({
	      url: searchApi,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        ServerActionCreators.loadedPhotos(data, text);
	      },
	      error: function(xhr, status, err) {
	        console.log(api, status, err.toString());
	      }
	    });
	}
};

module.exports = FlickrProxy;