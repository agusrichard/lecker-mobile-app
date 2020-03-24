import React, { Component } from 'react'
import PublicNavigator from './PublicNavigator'
import PrivateNavigator from './PrivateNavigator'

class MainNavigator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return <PublicNavigator />
    } else {
      return <PrivateNavigator />
    }
  }
}

export default MainNavigator