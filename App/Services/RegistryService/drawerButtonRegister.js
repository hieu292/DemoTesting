import ExamplesRegistry from './ExamplesRegistry'
import React from 'react'
import DrawerButton from '../../Components/Buttons/DrawerButton/DrawerButton'

ExamplesRegistry.addComponentExample('Drawer Button', () =>
  <DrawerButton
    text='Example left drawer button'
    onPress={() => window.alert('Your drawers are showing')}
  />
)
