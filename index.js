import React, { Component } from "react";
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('takeoff', () => App);

import { DrawerNavigator } from "react-navigation";


import PPage from './app/components/PPage/PPage';
import SBox from './app/components/SBox/SBox';
import TLine from './app/components/TLine/TLine';
import SideBar from './app/components/SideBar/SideBar';
import HomeScreen from './app/components/HomeScreen/HomeScreen';

const HomeScreenRouter = DrawerNavigator(
    {
      Home:{ screen: HomeScreen},
      Profile: { screen: PPage },
      Search: { screen: SBox },
      TimeLine: { screen: TLine }
    },
    {
      contentComponent: props => <SideBar {...props} />
    }
  );

  export default HomeScreenRouter;
