import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { userLogout } from '../../redux/actions/auth'

class Home extends Component {

  render() {
    return (
      <View>
        <Text>Home screen</Text>
        <Button
          title="Sign Out"
          onPress={this.props.userLogout}
        />
      </View>
    )
  }
}

export default connect(null, { userLogout })(Home)