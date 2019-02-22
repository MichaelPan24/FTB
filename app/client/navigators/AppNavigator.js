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
import HomeCell from '../commons/HomeCell'
import Home from '../action/Home/index';





const InitStack = createStackNavigator({
  Welcome: {
    screen: WelcomePage
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



export default RootStack