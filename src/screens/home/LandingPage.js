import React from 'react'
import { ImageBackground, Image, Text, View} from 'react-native'
import MainStyle from '../../assets/styles/MainStyle'
import AuthStyle from '../../assets/styles/AuthStyle'
import { NavigationButton } from '../../components/Button'
const backgroundImage = require('../../assets/images/landingPage/landing-page.png')
const logo = require('../../assets/images/landingPage/logo.png')

function LandingPage(props) {

  return (
    <ImageBackground source={backgroundImage} style={MainStyle.backgroundImage} >
      <View style={AuthStyle.logoBg}>
        <Image source={logo} style={MainStyle.logo}/>
      </View>
      <View style={AuthStyle.container}>
        <Text style={AuthStyle.headerText}>Welcome to Lecker</Text>
        <NavigationButton title="Sign Up" navigation={props.navigation} to="Register"/>
        <NavigationButton title="Sign In" navigation={props.navigation} to="Login"/>
        <NavigationButton title="Forgot Password" navigation={props.navigation} to="ForgotPassword"/>
      </View>
    </ImageBackground>
  )
}

export default LandingPage