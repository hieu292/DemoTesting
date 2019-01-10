import { BraintreePayment} from '../lib'
import React from 'react'
import { Button, Text, View } from 'react-native';

class HomeScreen extends React.Component {
  paySdk = async () => {
    try {
      const data = await BraintreePayment.pay({
        tokenServerUrl: "http://192.168.10.115:8000/api/braintree/v1/getToken/",
        nonceServerUrl: "http://192.168.10.115:8000/api/braintree/v1/sandbox"
      });
      console.log("data response: ", JSON.parse(data));
    } catch (error) {
      console.log("error response: ", error);
    }
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
      </View>
    );
  }
}

export default HomeScreen;
