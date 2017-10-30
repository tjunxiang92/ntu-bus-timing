import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  IndexScreen,
  BusStopScreen,
  BusTimingScreen,
} from '../screens';

const RootStackNavigator = StackNavigator(
  {
    IndexScreen: {
      screen: IndexScreen,
    },
    BusStopScreen: {
      screen: BusStopScreen,
    },
    BusTimingScreen: {
      screen: BusTimingScreen,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}