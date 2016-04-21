var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');

var KeyStore = new Store(AppDispatcher);

var _playedKeys = [];

var addKeys = function (key) {
  if (_playedKeys.indexOf(key) === -1){
    _playedKeys.push(key);
    KeyStore.__emitChange();
  }
};

KeyStore.all = function() {
  return _playedKeys.slice();
};

var removeKeys = function (key) {
  var index = _playedKeys.indexOf(key);
  delete _playedKeys[index];
  KeyStore.__emitChange();
};

KeyStore.hasKey = function (noteName) {
  if (_playedKeys.indexOf(noteName) !== -1){
    return true;
  } else {
    return false;
  }
};

KeyStore.__onDispatch = function (payload){
  switch(payload.actionType) {
  case "ADD_KEY":
    addKeys(payload.key);
    break;
  case "REMOVE_KEY":
    removeKeys(payload.key);
    break;
  }

};

module.exports = KeyStore;
