import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Images } from '../../../Themes'

const CloseHeaderButton = () => (
  <TouchableOpacity onPress={() => window.alert('pop')} >
    <Image source={Images.closeButton} style={{marginHorizontal: 10}} />
  </TouchableOpacity>)

export default CloseHeaderButton;
