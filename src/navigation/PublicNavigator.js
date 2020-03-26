import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingPage from '../screens/home/LandingPage'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import ForgotPassword from '../screens/auth/ForgotPassword'

const AppNavigator = createStackNavigator({
  LandingPage: LandingPage,
  Login: Login,
  Register: Register,
  ForgotPassword: ForgotPassword
}, {
  headerMode: 'none'
});

export default createAppContainer(AppNavigator);