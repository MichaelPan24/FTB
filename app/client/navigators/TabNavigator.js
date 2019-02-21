import React, {Component} from 'react';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5'

import WelcomePage from '../pages/WelcomePage'
import InfoPage from '../pages/InfoPage';
import MyPage from '../pages/MyPage';

import {HomeStack, InfoStack, InitStack} from './AppNavigator';

const MainNavigator = createBottomTabNavigator({
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
        screen: MyPage,
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

export default createAppContainer(createSwitchNavigator({
    Welcome: InitStack,
    Main: MainNavigator 
},{
    initialRouteName: 'Welcome'
}))