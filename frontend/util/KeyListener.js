var KeyAction = require('../actions/keyActions');

var Mapping = {
  16: "A4",
  65: "Bb4",
  83: "B4",
  68: "C5",
  70: "Db5",
  71: "D5",
  72: "Eb5",
  74: "E5",
  75: "F5",
  76: "Gb5",
  186: "G5",
  222: "Ab5",
  13: "A5"
};

$(document).on("keydown", function(e) {
  e.preventDefault();
  KeyAction.addKey(Mapping[(e.keyCode)]);
});

$(document).on("keyup", function(e) {
  e.preventDefault();
  KeyAction.removeKey(Mapping[(e.keyCode)]);
});
