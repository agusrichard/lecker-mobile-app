import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomTabNavigator from './BottomTabNavigator'

const AppNavigator = createStackNavigator({
  Main: BottomTabNavigator
});

export default createAppContainer(AppNavigator);