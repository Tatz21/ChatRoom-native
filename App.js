import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from "react-navigation-stack"

import LoginScreen from './Src/loginscreen';
import ChatScreen from './Src/ChatScreen';

const AppNavigator = createStackNavigator(
  {
    login: LoginScreen,
    chat: ChatScreen
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator);