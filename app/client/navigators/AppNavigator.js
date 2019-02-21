//在这里注册所有页面路由

import React, {Component} from 'react';
import {Text, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {createReactNavigationReduxMiddleware, createNavigationReducer, createReduxContainer} from 'react-navigation-redux-helpers' 
import {Provider, connect} from 'react-redux';

import WelcomePage from '../pages/WelcomePage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import DetailsPage from '../pages/DetailsPage';
import InfoPage from '../pages/InfoPage';
import InfoDetailPage from '../pages/InfoDetailPage'



const HomeStack = createStackNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: "热门项目",
                headerTitleContainerStyle:{justifyContent: 'center'},
                headerStyle: {opacity: 0.7},
            }
        }
    },
    Details: {
        screen: DetailsPage,
        navigationOptions: ({navigation}) => {
            return {
                title: `${navigation.state.params.name&&navigation.state.params.name}详情`,

            }
        }
    }
})

const InfoStack = createStackNavigator({
  Info: {
    screen: InfoPage,
    navigationOptions: ({navigation}) =>{
      return {
        title: `资讯`,
        headerTitleContainerStyle:{justifyContent: 'center'},
        headerStyle: {opacity: 0.7},
      }
    }
  },
  InfoDetail: {
    screen: InfoDetailPage,
    navigationOptions: ({navigation}) => {
      return {
        title: `${navigation.state.params.info&&navigation.state.params.info||''}详情`
      }
    }
  }
})

const InitStack = createStackNavigator({
  Welcome: {
    screen: WelcomePage
  },
  Login: {
    screen: LoginPage
  }
})


export {HomeStack, InfoStack, InitStack}
