import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../../Containers/LaunchScreen/LaunchScreen'

import styles from './NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
