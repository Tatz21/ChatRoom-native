import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from "react-navigation-stack"

import loginScreen from './Src/loginscreen';
import ChatScreen from './Src/ChatScreen';

const AppNavigator = createStackNavigator(
  {
    Login: loginScreen,
    Chat: ChatScreen,
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator);