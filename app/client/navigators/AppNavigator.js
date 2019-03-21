//在这里注册所有页面路由

import React, {Component} from 'react';
import {Text, Image} from 'react-native';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {createReactNavigationReduxMiddleware, createNavigationReducer, createReduxContainer} from 'react-navigation-redux-helpers' 
import {Provider, connect} from 'react-redux';

import BottomTab from './TabNavigator'

import WelcomePage from '../pages/WelcomePage';
import LoginPage from '../pages/LoginPage';
import HomeCell from '../commons/ShowCell'





const InitStack = createStackNavigator({
  Welcome: {
    screen: WelcomePage,
    navigationOptions: ({navigation}) => {
      return {
        header: null
      }
    }
  },
  Login: {
    screen: LoginPage
  }
})

const MainNavigator = createStackNavigator({
  MainPage: {
    screen: BottomTab
  },
  HomeCell: {
    screen: HomeCell
  }
},{
  defaultNavigationOptions:{
    header: null
  }
})

const RootStack = createAppContainer(createSwitchNavigator({
  Main: MainNavigator,
  Init: InitStack
},{
  initialRouteName: 'Init'
}))

// const navReducer = createNavigationReducer(RootStack);
//初始化react-navigation和 redux的中间件
// const middleware = createReactNavigationReduxMiddleware(
//   "root",
//   state => state.nav
// );

// const App = createReduxContainer(RootStack, "root");

//将State映射到 props中
// const mapStateToProps = (state) => ({
//   state: state.nav
// });

// const AppWithNavigationState = connect(mapStateToProps)(App)


export default RootStack