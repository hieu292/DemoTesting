import { Toaster, ImagePicker } from '../lib'
import React from 'react'
import { Button, Text, View } from 'react-native'

class TestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Test Screen</Text>
        <Button
          title={"Show Toaster"}
          onPress={() => Toaster.show("Okay paid!", Toaster.SHORT)}
        />
        <Button
          title={"Show Picker"}
          onPress={() => ImagePicker.openSelectDialog(
            {}, // no config yet
            (uri) => { console.log(uri) },
            (error) => { console.log(error) })}
        />
      </View>
    );
  }
}

export default TestScreen;