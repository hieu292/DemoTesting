import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { Toaster, AudioPlayer } from '../lib';


var buttonStyles = { marginTop: 8, backgroundColor: '#dddddd', padding: 10 };
var statStyle = { flex: 0.5, backgroundColor: '#cccccc', padding: 8, borderColor: '#ffffff', borderWidth: 1, margin: 2 };

class PlayerScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      mp3Url: 'https://ccrma.stanford.edu/~jos/mp3/bachfugue.mp3',
      prepared: false,
      playing: false,
      duration: 0
    };
  }
  
  componentDidMount(){
    AudioPlayer.preparePlayer(this.state.mp3Url);
    AudioPlayer.setOnPreparedCallback((duration) => {
      this.setState({ prepared: true, duration: duration });
      Toaster.show('Audio prepared', Toaster.LONG);
    });
  }
  
  playSound(){
    if (this.state.prepared === true) {
      this.setState({ playing: true });
      AudioPlayer.play();
      return true;
    }
    return false;
  }
  
  pauseSound(){
    if (this.state.prepared === true && this.state.playing === true) {
      AudioPlayer.pause();
      this.setState({ playing: false })
      return true;
    }
    return false;
  }
  
  render() {
    return (
      <View style={{ flex:1, alignItems: 'stretch', backgroundColor: '#F5FCFF' }}>
        <View style={{ padding: 10, backgroundColor: '#939cb0' }}>
          <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 24 }}>Audio Player</Text>
        </View>
        <View style={{ alignItems: 'flex-start', flexDirection: 'row', marginTop: 8 }}>
          <View style={statStyle}><Text style={{ textAlign: 'center' }}>Prepared : {(this.state.prepared) ? 'Yes' : 'No'}</Text></View>
          <View style={statStyle}><Text style={{ textAlign: 'center' }}>Playing : {(this.state.playing) ? 'Yes' : 'No'}</Text></View>
          <View style={statStyle}><Text style={{ textAlign: 'center' }}>Duration : {this.state.duration}</Text></View>
        </View>
        <View style={{ padding: 5 }}>
          <TouchableHighlight
            style={buttonStyles}
            onPress={this.playSound.bind(this)}>
            <Text style={{ textAlign: 'center' }}>Play</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={buttonStyles}
            onPress={this.pauseSound.bind(this)}>
            <Text style={{ textAlign: 'center' }}>Pause</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default PlayerScreen;