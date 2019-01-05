import { ImagePicker, BraintreePayment, CookieManager, CalendarManager } from '../lib'
import React from 'react'
import { Button, Text, View } from 'react-native';

class HomeScreen extends React.Component {
  paySdk = () => {
    BraintreePayment.pay({
      tokenServerUrl: "http://192.168.10.59:8000/api/braintree/v1/getToken/",
      nonceServerUrl: "http://192.168.10.59:8000/api/braintree/v1/sandbox"
    }).then(data => {
      console.log("data response: ", JSON.parse(data));
    }).catch(error => {
      console.log("error response: ", error);
    })
  }
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title={"Pay Web View"}
          onPress={() => this.props.navigation.navigate("PayWebView")}
        />
        <Button
          title={"Pay Native SDK"}
          onPress={this.paySdk}
        />
        <Button
          title={"Audio Player Android"}
          onPress={() => this.props.navigation.navigate("Player")}
        />
        <Button
          title={"Show Image Picker Android"}
          onPress={() => ImagePicker.openSelectDialog(
            {}, // no config yet
            (uri) => { console.log(uri) },
            (error) => { console.log(error) })}
        />
        <Button
          title={"Clear Cookie Ios"}
          onPress={() => CookieManager.clearCookies()}
        />
        <Button
          title={"Log Calendar Ios"}
          onPress={() => CalendarManager.addEvent("One", "Two", 3, function(o) {
            console.log('In Callback', o);
          })}
        />
      </View>
    );
  }
}

export default HomeScreen;
