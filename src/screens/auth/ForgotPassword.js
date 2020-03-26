import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  ImageBackground, Text,
  TouchableOpacity, 
  TextInput, View,
  ActivityIndicator
} from 'react-native'
import AuthStyle from '../../assets/styles/AuthStyle'
import { forgotPasswordUser } from '../../redux/actions/auth'
const backgroundImg = require('../../assets/images/forgotPasswordPage/background.png')

class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSuccess: false,
      username: '',
      email: ''
    }
  }

  handleSubmit = () => {
    this.props.forgotPasswordUser(this.state.username, this.state.email)
    this.setState({ isSuccess: true })
  }

  render() {
    return (
      <ImageBackground source={backgroundImg} style={AuthStyle.backgroundImage}>
        { this.state.isSuccess && this.props.isLoading ?
          <View style={AuthStyle.successTextContainer}>
            <Text style={AuthStyle.successText}>Please check your email to verify your account</Text>
          </View>
          :
          <View style={{ alignItems: 'center' }}>
          <Text style={[AuthStyle.loginHeaderText, { marginTop: 60 }]}>Forgot Password</Text>
          <View style={AuthStyle.formContainer}>
            <TextInput 
              placeholder="Username" 
              style={AuthStyle.textInput} 
              onChangeText={(username) => this.setState({username})}  
            />
          </View>
          <View style={AuthStyle.formContainer}>
            <TextInput
              placeholder="Email" 
              style={AuthStyle.textInput} 
              onChangeText={(email) => this.setState({email})}
            />
          </View>
          <TouchableOpacity 
            style={AuthStyle.authBtn}
            onPress={this.handleSubmit}
          >
            { this.props.isLoading ?
              <ActivityIndicator size="small" color="#fff" />
              :
              <Text style={AuthStyle.authBtnText}>Sign In</Text>
            }
          </TouchableOpacity>
        </View>}
      </ImageBackground>
    )
  }
}

const mapStateToProps = state => ({ isLoading: state.auth.isLoading })

export default connect(mapStateToProps, { forgotPasswordUser })(ForgotPassword)