//var assign = require('object-assign');
import {Dispatcher} from 'flux';
import {PayloadSources} from './Constants';
import assign from 'object-assign';

var AppDispatcher = assign(new Dispatcher(), {
  handleServerAction: function (action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function (action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = AppDispatcher;
