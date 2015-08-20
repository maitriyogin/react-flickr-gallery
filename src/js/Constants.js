import keyMirror from 'react/lib/keyMirror';

module.exports = {
  
  FLICKR : {
    key : 'ff639636f37f3df7ba22db16a450d211',
    userId : '133394042@N02',
    secret : '9b5e5f7aeee109a6'
  },

  PHOTOSIZE : {
    THUMBNAIL : 'm',
    LARGE : 'z'
  },

  ENTER_KEY : 13,

  PAGING: keyMirror({
    PAGE: null,
    LEFT: null,
    RIGHT: null,
    START: null,
    END: null
  }),

  ActionTypes: keyMirror({
    //------
    LOAD_PHOTOS:null,
    PHOTOS_LOADED:null,
    SELECT_PHOTO:null,
    SHOW_SHARE:null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
