import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { Item, Label, Input } from 'native-base'
import { Button } from 'galio-framework'
import MainStyle from '../../assets/styles/MainStyle'
import { loginUser } from '../../redux/actions/auth'
import { getUserProfile } from '../../redux/actions/user'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = () => {
    console.log('handleSubmit')
    const loginToken = this.props.loginUser(this.state.username, this.state.password)
    console.log('handleSubmit in Login', loginToken)
  }

  componentWillUnmount() {}

  render() {
    return (
      <View style={[MainStyle.container, {alignContent: 'center'}]}>
        <Text style={MainStyle.headerText}>Sign In</Text>
        <View style={{alignContent: 'center'}}>
          <Item floatingLabel style={MainStyle.formGroup}>
            <Label>Username</Label>
            <Input 
              style={MainStyle.inputText}
              onChangeText={(username) => this.setState({username})}
            />
          </Item>
          <Item floatingLabel style={MainStyle.formGroup}>
            <Label>Password</Label>
            <Input 
              style={MainStyle.inputText}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
          </Item>
          <Button onPress={this.handleSubmit} >Sign In</Button>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            <Text>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({ loginToken: state.auth.loginToken })

export default connect(mapStateToProps, { loginUser, getUserProfile })(Login)