import React from 'react';
import { Text, View } from 'react-native';
// import icon

// Navigators
import { createStackNavigator,
  createBottomTabNavigator  } from 'react-navigation';

// Screens
import SplashScreen from './screens/SplashScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import MatchScreen from './screens/MatchScreen.js'
import SnapshotScreen from './screens/SnapshotScreen.js'




export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

// Navigation
const AppStackNavigator = createStackNavigator({
  Splash: SplashScreen,
  Login: LoginScreen,
  Matches: MatchScreen,
  Snapshot: SnapshotScreen

})


// Tab Navigator Option
// const AppStackTabNavigator = createBottomTabNavigator({
//   Matches: {
//     screen: MatchesScreen,
//     navigationOptions: {
//       tabBarLabel: 'Home'
//     }
//   }
// })


// import WelcomeSlider from '../components/WelcomeSlider.js'
