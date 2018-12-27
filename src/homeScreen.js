import { ImagePicker, BraintreePayment } from '../lib'
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
          title={"Audio Player"}
          onPress={() => this.props.navigation.navigate("Player")}
        />
        <Button
          title={"Show Image Picker"}
          onPress={() => ImagePicker.openSelectDialog(
            {}, // no config yet
            (uri) => { console.log(uri) },
            (error) => { console.log(error) })}
        />
      </View>
    );
  }
}

export default HomeScreen;