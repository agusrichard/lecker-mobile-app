import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../screens/home/Home'
import Menu from '../screens/menu/Menu'
import Restaurant from '../screens/restaurant/Restaurant'
import Profile from '../screens/user/Profile'
import Icon from 'react-native-vector-icons/FontAwesome5'

const BottomTabNavigator = createBottomTabNavigator({
  Home: Home,
  Menu: Menu,
  Restaurant: Restaurant,
  Profile: Profile
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'Home') {
        iconName = 'home'
      } else if (routeName === 'Menu') {
        iconName = 'clipboard-list'
      } else if (routeName === 'Restaurant') {
        iconName = 'layer-group'
      } else if (routeName === 'Profile') {
        iconName = 'user-tie'
      }
      return <Icon name={iconName} size={26} color={focused ? 'purple' : '#999'} />
    }
  })
})

export default BottomTabNavigator