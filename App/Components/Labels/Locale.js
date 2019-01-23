import React from 'react'
import { Text, View } from 'react-native'
import I18n from 'react-native-i18n'

const LocaleLabel = () => (
  <View>
    <Text style={{color: '#ffffff'}}>Locale: {I18n.defaultLocale}</Text>
  </View>
)

export default LocaleLabel
