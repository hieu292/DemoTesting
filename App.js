import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from './src/homeScreen'
import PayWebViewScreen from './src/payWebViewScreen'

const AppNavigator = createStackNavigator({
        Home: HomeScreen,
        PayWebView: PayWebViewScreen,
    },
    {
        initialRouteName: "Home"
    });

export default AppNavigator;
