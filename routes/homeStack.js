import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Signup from '../screens/signup'; 
import Login from '../screens/login';
import Success from '../screens/accountcreated';

const screens = {
  Home: {
    screen: Home,
  },
  Signup: {
    screen: Signup,
  },
  Login: {
    screen: Login,
  },
  Success: {
    screen: Success,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);