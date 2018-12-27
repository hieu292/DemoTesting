/** @format */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';

// Disable warning box on development mode
// console.disableYellowBox = true;

// Spy debugging
if (false) {
  const logSpy = (info) => {
    const fromTo = info.type === 0 ? 'TO JS: ' : 'TO ANDROID: ';
    const methodSignature = info.module + '.' + info.method + '(' + JSON.stringify(info.args) + ')';
    console.log('spy: ', fromTo + methodSignature);
  };
  MessageQueue.spy(logSpy);
}

YellowBox.ignoreWarnings(['unknown call: "relay:check"']);

AppRegistry.registerComponent(appName, () => App);
