import React from 'react'
import { WebView } from 'react-native'

class PayScreen extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://localhost:8000/pay'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default PayScreen;