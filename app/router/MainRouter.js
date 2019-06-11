import { createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from '../screens/SplashScreen';
import CheckScreen from '../screens/CheckScreen';


const AppNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },
  CheckScreen: {
    screen: CheckScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Todo List',
    }),
  },
});

export default createAppContainer(AppNavigator);