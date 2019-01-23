import React from 'react'
import Icon from '../../Services/RegistryService/vectorExample'
import { View } from 'react-native'

const VectorIcons = () => (
  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
    <Icon name='rocket' size={40} color='white' />
    <Icon name='send' size={40} color='white' />
    <Icon name='star' size={40} color='white' />
    <Icon name='trophy' size={40} color='white' />
    <Icon name='warning' size={40} color='white' />
  </View>
)

export default VectorIcons
