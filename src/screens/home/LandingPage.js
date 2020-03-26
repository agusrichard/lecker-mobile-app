import React from 'react'
import { ImageBackground, Image, Text, View} from 'react-native'
import MainStyle from '../../assets/styles/MainStyle'
import AuthStyle from '../../assets/styles/AuthStyle'
import { Button } from '../../components/Button'
const backgroundImage = require('../../assets/images/landingPage/landing-page.png')
const logo = require('../../assets/images/landingPage/logo.png')

function LandingPage(props) {
  console.log('LandingPage')
  console.log(props.navigation)

  return (
    <ImageBackground source={backgroundImage} style={MainStyle.backgroundImage} >
      <Image source={logo} style={MainStyle.logo}/>
      <View style={AuthStyle.container}>
        <Text style={AuthStyle.headerText}>Welcome to Lecker</Text>
        <Button title="Sign Up" navigation={props.navigation} to="Register"/>
        <Button title="Sign In" navigation={props.navigation} to="Login"/>
      </View>
    </ImageBackground>
  )
}

export default LandingPage