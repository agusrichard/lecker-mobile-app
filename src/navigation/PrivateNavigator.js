import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomTabNavigator from './BottomTabNavigator'
import UpdateProfile from '../screens/user/UpdateProfile'

const AppNavigator = createStackNavigator({
  Main: BottomTabNavigator,
  UpdateProfile: UpdateProfile
});

export default createAppContainer(AppNavigator);