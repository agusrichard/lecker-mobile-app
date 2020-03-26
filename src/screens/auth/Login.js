import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import { Item, Label, Input } from 'native-base'
import { Button } from 'galio-framework'
import MainStyle from '../../assets/styles/MainStyle'
import AuthStyle from '../../assets/styles/AuthStyle'
import { loginUser } from '../../redux/actions/auth'
import { getUserProfile } from '../../redux/actions/user'
const headerImg = require('../../assets/images/loginPage/header-img.png')
const bottomImg = require('../../assets/images/loginPage/bottom-img.png')

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = () => {
    this.props.loginUser(this.state.username, this.state.password)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={AuthStyle.viewContainer}>
          <Image source={headerImg} style={AuthStyle.headerImg} />
        </View>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <Text style={AuthStyle.loginHeaderText}>Sign In</Text>
          <View style={AuthStyle.formContainer}>
            <TextInput 
              placeholder="Username" 
              style={AuthStyle.textInput} 
              onChangeText={(username) => this.setState({username})}  
            />
          </View>
          <View style={AuthStyle.formContainer}>
            <TextInput
              secureTextEntry={true}
              placeholder="Password" 
              style={AuthStyle.textInput} 
              onChangeText={(password) => this.setState({password})}
            />
          </View>
          <TouchableOpacity style={AuthStyle.authBtn}>
            <Text style={AuthStyle.authBtnText}>Sign In</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={AuthStyle.viewContainer}>
          <Image source={bottomImg} style={AuthStyle.bottomImg} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({ loginToken: state.auth.loginToken })

export default connect(mapStateToProps, { loginUser, getUserProfile })(Login)