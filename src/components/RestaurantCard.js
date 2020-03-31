import React from 'react'
import { View, Image, Text } from 'react-native'
import RestaurantStyle from '../assets/styles/RestaurantStyle'

export default function RestaurantCard(props) {
  const image = require('../assets/images/foto.jpg')
  console.log(props.restaurant)

  return (
    <View style={RestaurantStyle.restaurantCardContainer}>
      <View style={RestaurantStyle.imgContainer}>
        <Image source={image} style={RestaurantStyle.restaurantImg} />
      </View>
      <View style={RestaurantStyle.textContainer}>
        <Text>{props.restaurant.name}</Text>
        <Text>{props.restaurant.description}</Text>
      </View>
    </View>
  )
}