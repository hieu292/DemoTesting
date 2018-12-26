import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from './src/homeScreen'
import PayScreen from './src/payScreen'
import TestScreen from './src/testScreen'

const AppNavigator = createStackNavigator({
        Home: HomeScreen,
        Pay: PayScreen,
        Test: TestScreen
    },
    {
        initialRouteName: "Test"
    });

export default AppNavigator;