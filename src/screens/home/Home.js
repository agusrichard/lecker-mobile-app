import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { logoutUser } from '../../redux/actions/auth'
import { getUserProfile } from '../../redux/actions/user'

class Home extends Component {

  componentDidMount() {
    this.props.getUserProfile(this.props.loginToken)
  }

  render() {
    console.log('Home')
    return (
      <View>
        <Text>Username: {this.props.userProfile.username}</Text>
        <Button
          title="Sign Out"
          onPress={this.props.logoutUser}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({ 
  loginToken: state.auth.loginToken,
  userProfile: state.user.userProfile
})

export default connect(mapStateToProps, { getUserProfile, logoutUser })(Home)