import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'

const AppNavigator = createStackNavigator({
  Login: Login,
  Register: Register
}, {
  headerMode: 'none'
}
);

export default createAppContainer(AppNavigator);