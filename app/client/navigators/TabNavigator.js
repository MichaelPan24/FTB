import React, {Component} from 'react';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign'

import DemandsPage from '../pages/DemandsPage';
import DemandsDetailPage from '../pages/DemandsDetailPage'
import ShowPage from '../pages/ShowPage'
import ShowDetailPage from '../pages/ShowDetailPage'
import MyPage from '../pages/MyPage';


//配置底部导航栏每一栏模块栈
const DemandsStack = createStackNavigator({
    Demands: {
      screen: DemandsPage,
      navigationOptions: ({navigation}) =>{
        return {
          title: `热门需求`,
          headerTitleContainerStyle:{justifyContent: 'center'},
          headerStyle: {opacity: 0.7},
        }
      }
    },
    DemandsDetail: {
      screen: DemandsDetailPage,
      navigationOptions: ({navigation}) => {
        return {
          title: `${navigation.state.params.info&&navigation.state.params.info||''}详情`
        }
      }
    }
  })

  const WorkShowStack = createStackNavigator({
    Show: {
        screen: ShowPage,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: "展示",
                headerTitleContainerStyle:{justifyContent: 'center'},
                headerStyle: {opacity: 0.8, backgroundColor:'#F9F9F9'},
            }
        }
    },
    ShowDetails: {
        screen: ShowDetailPage,
        navigationOptions: ({navigation}) => {
            return {
                title: `${navigation.state.params.name?navigation.state.params.name:'项目'}详情`,

            }
        }
    }
})

const MyStack = createStackNavigator({
    Me: {
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
    Demands: {
        screen: DemandsStack,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor,focused}) => (<Icon 
                name={"home"}
                size={26}
                style={{ paddingTop:5, color:tintColor}}
                />)
        }
    },
    WorkShow: {
        screen: WorkShowStack,
        navigationOptions: {
            tabBarLabel: '展示',
            tabBarIcon: ({tintColor, focused}) => (<Icon 
                name={"dribbble"}
                size={26}
                style={{ paddingTop:5, color:tintColor}}
                />
                )
        }
    },
    Me: {
        screen: MyStack,
        navigationOptions: {
            tabBarLabel: '我',
            tabBarIcon: ({tintColor, focused}) => (<Icon 
                name={"user"}
                size={26}
                style={{paddingTop:5, color:tintColor}}
                
            />)
           
        }
    }
},{
  tabBarOptions: {
    inactiveTintColor: 'white',
    activeTintColor: 'gray',
  },
})

