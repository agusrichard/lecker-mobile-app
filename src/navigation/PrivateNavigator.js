import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomTabNavigator from './BottomTabNavigator'
import Home from '../screens/home/Home'
import Menu from '../screens/menu/Menu'
import Restaurant from '../screens/restaurant/Restaurant'
import Profile from '../screens/user/Profile'
import UpdateProfile from '../screens/user/UpdateProfile'

const AppNavigator = createStackNavigator({
  Main: {
    screen: BottomTabNavigator,
    navigationOptions: {
      title: 'Lecker',
      headerStyle: {
        backgroundColor: 'rgba(240, 129, 214, 0.5)'
      },
      headerTintColor: '#fff'
    }
  },
  UpdateProfile: {
    screen: UpdateProfile,
    navigationOptions: {
      title: 'Update Profile'
    }
  }
});

export default createAppContainer(AppNavigator);