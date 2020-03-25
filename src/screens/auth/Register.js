import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native'
import { Item, Label, Input } from 'native-base'
import { Button } from 'galio-framework'
import MainStyle from '../../assets/styles/MainStyle'
import { registerUser } from '../../redux/actions/auth'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registerSuccess: false,
      name: '',
      email: '',
      username: '',
      password: ''
    }
  }

  handleSubmit = () => {
    this.props.registerUser(
      this.state.name,
      this.state.email,
      this.state.username, 
      this.state.password
    )
  }

  render() {
    return (
      <View style={[MainStyle.container, {alignContent: 'center'}]}>
        <Text style={MainStyle.headerText}>Sign Up</Text>
        <View style={{alignContent: 'center'}}>
          <Item floatingLabel style={MainStyle.formGroup}>
            <Label>Fullname</Label>
            <Input 
              style={MainStyle.inputText}
              onChangeText={(name) => this.setState({name})}
            />
          </Item>
          <Item floatingLabel style={MainStyle.formGroup}>
            <Label>Email</Label>
            <Input 
              style={MainStyle.inputText}
              onChangeText={(email) => this.setState({email})}
            />
          </Item>
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
        </View>
      </View>
    )
  }
}

export default connect(null, { registerUser })(Login)