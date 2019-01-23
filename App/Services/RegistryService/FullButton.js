// @flow

import ExamplesRegistry from './ExamplesRegistry'
import React from 'react'
import FullButton from '../../Components/Buttons/FullButton/FullButton'

// Example
ExamplesRegistry.addComponentExample('Full Button', () =>
  <FullButton
    text='Hey there'
    onPress={() => window.alert('Full Button Pressed!')}
  />
)
