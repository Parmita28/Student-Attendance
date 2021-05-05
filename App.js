import * as React from 'react';
import { View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import db from './Config';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
      <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
})

const AppContainer = createAppContainer(AppNavigator)