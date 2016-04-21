var React = require('react');
var TONES = require('../constants/Tones');
var OrganKey = require('./OrganKey');
var Recorder = require('./Recorder');


var Organ = React.createClass({

  render: function() {
    var noteName = Object.keys(TONES);

    return (
      <div>
        {
          noteName.map(function(tone){
            return <OrganKey note={tone} key={tone}/>;
          })
        }
        <Recorder/>
      </div>
      );
  }
});

module.exports = Organ;
