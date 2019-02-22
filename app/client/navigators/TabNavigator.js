import React, {Component} from 'react';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5'

import HomePage from '../pages/HomePage'
import DetailsPage from '../pages/DetailsPage'
import InfoPage from '../pages/InfoPage';
import InfoDetailPage from '../pages/InfoDetailPage'
import MyPage from '../pages/MyPage';


//配置底部导航栏每一栏模块栈
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
                title: `${navigation.state.params.name&&navigation.state.params.name||''}详情`,

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

const MyStack = createStackNavigator({
    Info: {
      screen: MyPage,
      navigationOptions: ({navigation}) =>{
        return {
          title: `我的`,
          headerTitleContainerStyle:{justifyContent: 'center'},
          headerStyle: {opacity: 0.7},
        }
      }
    }
  })

// 底部导航栏
export default BottomTab = createBottomTabNavigator({
    HomePage: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: (focus, tintColor) => (<Icon 
                name={"home"}
                size={26}
                style={{color: tintColor, paddingTop:5}}
                />)
        }
    },
    InfoPage: {
        screen: InfoStack,
        navigationOptions: {
            tabBarLabel: '资讯',
            tabBarIcon: ({focus, tintColor}) => (<Icon 
                name={"broadcast-tower"}
                size={26}
                style={{color: tintColor, paddingTop:5}}
                />
                )
        }
    },
    MyPage: {
        screen: MyStack,
        navigationOptions: {
            tabBarLabel: '我',
            tabBarIcon: ({focus, tintColor}) => (<Icon 
                name={"user"}
                size={26}
                style={{color: tintColor,paddingTop:5}}
            />)
        }
    }
})

