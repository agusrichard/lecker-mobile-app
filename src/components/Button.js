import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import ComponentStyle from '../assets/styles/ComponentStyle'
import LinearGradient from 'react-native-linear-gradient';

export function NavigationButton(props) {
  return (
  <TouchableOpacity style={ComponentStyle.btn} onPress={() => props.navigation.navigate(props.to)}>
    <LinearGradient colors={['#9b34eb', '#d634eb', '#eb34d6']} style={ComponentStyle.gradient}>
      <Text style={ComponentStyle.btnText}>{props.title}</Text>
    </LinearGradient>
  </TouchableOpacity>
  )
}