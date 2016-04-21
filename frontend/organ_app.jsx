var React = require('react'),
    ReactDOM = require('react-dom');
var Organ = require('./components/organ');
var KeyListener = require('./util/KeyListener');


window.Note = require('./util/Note');

document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById('root');
  ReactDOM.render(<Organ/>, root);
});
