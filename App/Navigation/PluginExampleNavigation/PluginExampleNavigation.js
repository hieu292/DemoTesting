import { createAppContainer, createStackNavigator } from 'react-navigation'
import PluginExamplesScreen from '../../Containers/PluginExamplesScreen/PluginExamplesScreen'

const stackNavigator = createStackNavigator({
  PluginExamplesScreen: {screen: PluginExamplesScreen}
}, {
  cardStyle: {
    opacity: 1,
    backgroundColor: '#3e243f'
  },
  headerMode: 'none',
  initialRouteName: 'PluginExamplesScreen'
})

export default createAppContainer(stackNavigator)
