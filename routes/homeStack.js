import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Signup from '../screens/signup'; 
import Login from '../screens/login';
import Success from '../screens/accountcreated';
import Search from '../screens/loginSearch';
import Home1 from '../screens/loginHome';
import App from '../screens/login';



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
  Search: {
    screen: Search,
  },
  Home1: {
    screen: Home1,
  },
  App: {
    screen: App,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);