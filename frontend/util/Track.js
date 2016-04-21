var KeyStore = require('../stores/keystore');

var Track = function(attributes) {
  this.name = attributes["name"];
  if (attributes["roll"]) {
    this.roll = attributes["roll"];
  } else {
    this.roll = [];
  }
};

Track.prototype.startRecording = function() {
  this.roll = [];
  this.time = new Date().getTime();
};

Track.prototype.addNotes = function(notes) {
  var timeSlice = new Date().getTime() - this.time;
  var noteObject = {"timeSlice": timeSlice, "notes": notes};
  this.roll.push(noteObject);
};

Track.prototype.stopRecording = function() {
  this.addNotes([]);
  debugger
};

module.exports = Track;
