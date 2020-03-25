import React, { Component } from 'react'
import { connect } from 'react-redux'
import PublicNavigator from './PublicNavigator'
import PrivateNavigator from './PrivateNavigator'

class MainNavigator extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <PrivateNavigator />
    } else {
      return <PublicNavigator />
    }
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps)(MainNavigator)