import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import APITestingScreen from '../../Containers/ApiTestingScreen/APITestingScreen'
import ComponentExamplesScreen from '../../Containers/ComponentExampleScreen/ComponentExamplesScreen'
import DeviceInfoScreen from '../../Containers/DeviceInfoScreen/DeviceInfoScreen'
import ThemeScreen from '../../Containers/ThemeScreen/ThemeScreen'
import FaqScreen from '../../Containers/FaqScreen/FaqScreen'
import PresentationScreen from '../../Containers/PresentationScreen/PresentationScreen'
import PluginExampleNavigation from '../PluginExampleNavigation/PluginExampleNavigation'
import CloseHeaderButton from '../../Components/Buttons/CloseHeaderButton/CloseHeaderButton'

const stackNavigator = createStackNavigator({
  PresentationScreen: {screen: PresentationScreen},
  APITestingScreen: {screen: APITestingScreen},
  ComponentExamplesScreen: {screen: ComponentExamplesScreen},
  DeviceInfoScreen: {screen: DeviceInfoScreen},
  PluginExamplesScreen: {screen: PluginExampleNavigation},
  ThemeScreen: {screen: ThemeScreen},
  FaqScreen: {screen: FaqScreen}
}, {
  cardStyle: {
    opacity: 1,
    backgroundColor: '#3e243f'
  },
  initialRouteName: 'PresentationScreen',
  headerMode: 'none',
  // Keeping this here for future when we can make
  navigationOptions: {
    header: {
      left: (<CloseHeaderButton />),
      style: {
        backgroundColor: '#3e243f'
      }
    }
  }
})

export default createAppContainer(stackNavigator)
