import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native'
import { Item, Label, Input } from 'native-base'
import { Button } from 'galio-framework'
import MainStyle from '../../assets/styles/MainStyle'
import { userLogin } from '../../redux/actions/auth'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = () => {
    this.props.userLogin(this.state.username, this.state.password)
  }

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
        </View>
      </View>
    )
  }
}

export default connect(null, { userLogin })(Login)