import React from 'react'
import { View, Modal } from 'react-native'
import DebugConfig from '../../../Config/DebugConfig'
import RoundedButton from '../RoundedButton/RoundedButton'
import PresentationNavigation from '../../../Navigation/PresentationNavigation/PresentationNavigation'

export default class DevscreensButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    if (DebugConfig.showDevScreens) {
      return (
        <View>
          <RoundedButton onPress={this.toggleModal}>
            Open DevScreens
          </RoundedButton>
          <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <PresentationNavigation screenProps={{ toggle: this.toggleModal }} />
          </Modal>
        </View>
      )
    } else {
      return <View />
    }
  }
}
