import ExamplesRegistry from './ExamplesRegistry'
import React from 'react'
import RoundedButton from '../../Components/Buttons/RoundedButton/RoundedButton'

ExamplesRegistry.addComponentExample('Rounded Button', () =>
  <RoundedButton
    text='real buttons have curves'
    onPress={() => window.alert('Rounded Button Pressed!')}
  />
)
