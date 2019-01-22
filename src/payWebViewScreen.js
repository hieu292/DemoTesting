import React from 'react'
import { WebView } from 'react-native'

class PayWebViewScreen extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://192.168.10.11:8000'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default PayWebViewScreen;
