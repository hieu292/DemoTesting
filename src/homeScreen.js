import React from 'react'
import { Button, Text, View } from 'react-native'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title={"Pay"}
          onPress={() => this.props.navigation.navigate("Pay")}
        />
      </View>
    );
  }
}

export default HomeScreen;