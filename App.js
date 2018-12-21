import React from "react";
import { View, Text, Button, WebView } from "react-native";
import { createStackNavigator } from "react-navigation";

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

const AppNavigator = createStackNavigator({
        Home: HomeScreen,
        Pay: PayScreen
    },
    {
        initialRouteName: "Home"
    });

export default AppNavigator;