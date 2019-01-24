import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import styles from './DrawerButtonStyles'

// Note that this file (AppNavigation/Components/DrawerButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */

class DrawerButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
  }

  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

export default DrawerButton
