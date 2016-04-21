var React = require('react');
var Track = require('../util/Track');
var KeyStore = require('../stores/keystore');

var Recorder = React.createClass({
  getInitialState: function(){
    return {isRecording: false, track: new Track({"name": "testTrack"})};
  },

  _handleNoteChange: function () {

    if (this.state.isRecording === true){
      this.state.track.addNotes(KeyStore.all());
    }
  },

  componentDidMount: function() {
    KeyStore.addListener(this._handleNoteChange);
  },

  startRecClick: function() {
    this.state.track.startRecording();
    this.setState({isRecording: true});
  },

  stopRecClick: function() {
    this.state.track.stopRecording();
    this.setState({isRecording: false});
  },

  render: function (){
    return (
      <div>
        <button onClick={this.startRecClick}>
          Start Recording
        </button>
        <button onClick={this.stopRecClick}>
          Stop Recording
        </button>
      </div>
    );
  }

});

module.exports = Recorder;
