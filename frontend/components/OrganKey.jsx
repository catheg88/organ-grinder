var React = require('react');
var KeyStore = require('../stores/keystore');
var Note = require('../util/Note');
var TONES = require('../constants/Tones');


var OrganKey = React.createClass ({
  getInitialState: function(){
    return {note: new Note(TONES[this.props.note]),
            noteName: this.props.note,
            playing: false
          };
  },

  _keypressChanged: function() {
    if (KeyStore.hasKey(this.state.noteName)){
      this.setState({playing: true});
    } else {
      this.setState({playing: false});
    }
  },

  componentDidMount: function() {
    KeyStore.addListener(this._keypressChanged);
  },

  render: function() {

    if(this.state.playing) {
      var className = "selected";
      this.state.note.start();
    } else {
      this.state.note.stop();
      className = "";
    }

    if (this.state.noteName[1]==='b'){
      className += " sharp";
    }

    return (
      <div className={className}>{this.state.noteName}</div>
    );
  }


});

module.exports = OrganKey;
