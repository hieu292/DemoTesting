import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from './src/homeScreen'
import PayWebViewScreen from './src/payWebViewScreen'
import PlayerScreen from './src/playerScreen'

const AppNavigator = createStackNavigator({
        Home: HomeScreen,
        PayWebView: PayWebViewScreen,
        Player: PlayerScreen
    },
    {
        initialRouteName: "Home"
    });

export default AppNavigator;