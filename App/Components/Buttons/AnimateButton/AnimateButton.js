import React from 'react'
import { Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import styles from './AnimatableStyle'

const AnimatableButton = () => (
  <View>
    <Animatable.View
      animation='fadeIn'
      iterationCount='infinite'
      direction='alternate'
      style={[styles.button, styles.fadeInButton]}
    >
      <Text style={styles.fadeInButtonText}>Faaaaaddddeeeeddd</Text>
    </Animatable.View>
    <Animatable.View
      style={[styles.button, styles.jelloButton]}
      animation='jello'
      iterationCount='infinite'>
      <Text style={styles.jelloButtonText}>Jelloo00000000</Text>
    </Animatable.View>
    <Animatable.View
      animation='pulse'
      iterationCount='infinite'
      style={[styles.button, styles.pulseButton]}>
      <Text style={styles.pulseButtonText}>puLsepuLsepuLse</Text>
    </Animatable.View>
  </View>
)

export default AnimatableButton
