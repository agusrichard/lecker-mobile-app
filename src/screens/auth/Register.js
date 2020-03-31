import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  ScrollView, Text, 
  TouchableOpacity, 
  Image, TextInput, View,
  ActivityIndicator } from 'react-native'
import AuthStyle from '../../assets/styles/AuthStyle'
import { registerUser } from '../../redux/actions/auth'
const headerImg = require('../../assets/images/registerPage/header-img.png')
const bottomImg = require('../../assets/images/registerPage/bottom-img.png')

class Register extends Component {
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
    this.setState({ registerSuccess: true })
  }

  render() {
    return (
      <ScrollView contentContainerstyle={{ flex: 1, alignItems: 'center' }}>
        <View style={AuthStyle.viewContainer}>
          <Image source={headerImg} style={AuthStyle.registerHeaderImg} />
        </View>
        { 
          this.state.registerSuccess && !this.props.isLoading ? 
          <View style={AuthStyle.successTextContainer}>
            <Text style={AuthStyle.successText}>Please check your email to verify your account</Text>
          </View>
          :
          <View style={{ alignItems: 'center' }}>
            <Text style={AuthStyle.loginHeaderText}>Sign Up</Text>
            <View style={AuthStyle.formContainer}>
              <TextInput 
                placeholder="Full Name" 
                style={AuthStyle.textInput} 
                onChangeText={(name) => this.setState({name})}  
              />
            </View>
            <View style={AuthStyle.formContainer}>
              <TextInput 
                placeholder="Email" 
                style={AuthStyle.textInput} 
                onChangeText={(email) => this.setState({email})}  
              />
            </View>
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
            <TouchableOpacity 
              style={AuthStyle.authBtn}
              onPress={this.handleSubmit}
            >
              { this.props.isLoading ?
                <ActivityIndicator size="small" color="#fff" />
                :
                <Text style={AuthStyle.authBtnText}>Sign Up</Text>
              }
            </TouchableOpacity>
          </View>
        }
        <View style={AuthStyle.viewContainer}>
          <Image source={bottomImg} style={AuthStyle.registerBottomImg} />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({ isLoading: state.auth.isLoading })

export default connect(mapStateToProps, { registerUser })(Register)