import React, {Component} from 'react';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign'

import DemandsPage from '../pages/DemandsPage';
import DemandsDetailPage from '../pages/DemandsDetailPage'
import NewDemandPage from '../pages/NewDemandPage';
import ShowPage from '../pages/ShowPage'
import ShowDetailPage from '../pages/ShowDetailPage'
import MyPage from '../pages/MyPage';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/login/RegisterPage';
import FavoritePage from '../pages/FavoritePage';
import MyProjectPage from '../pages/MyProjectPage';
import AboutMePage from '../pages/AboutMePage';
import NotificationPage from '../pages/NotificationPage';

//配置底部导航栏每一栏模块栈
const DemandsStack = createStackNavigator({
    Demands: {
      screen: DemandsPage,
      navigationOptions: ({navigation}) =>{
        return {
          // title: `热门需求`,
          header: null,
          // headerTitleContainerStyle:{justifyContent: 'center'},
          // headerStyle: {opacity: 0.7},
        }
      }
    },
    DemandsDetail: {
      screen: DemandsDetailPage,
      navigationOptions: ({navigation}) => {
        return {
          header: null,
          // title: `${navigation.state.params.info&&navigation.state.params.info||''}详情`,
          gesturesEnabled: true
        }
      }
    },
    newDemand: {
      screen: NewDemandPage,
      navigationOptions: ({navigation} ) => {
        return {
          header: null,
          gesturesEnabled: true
        }
      }
    }
  })

  const WorkShowStack = createStackNavigator({
    Show: {
        screen: ShowPage,
        navigationOptions: ({navigation}) => {
            return {
              header: null
                // headerTitle: "展示",
                // headerTitleContainerStyle:{justifyContent: 'center'},
                // headerStyle: {opacity: 0.8, backgroundColor:'#F9F9F9'},
            }
        }
    },
    ShowDetail: {
        screen: ShowDetailPage,
        navigationOptions: ({navigation}) => {
            return {
                header: null,
                // title: `${navigation.state.params.name?navigation.state.params.name:'项目'}详情`,
                gesturesEnabled: true
            }
        }
    }
})

const MyStack = createStackNavigator({
    Me: {
      screen: MyPage,
      navigationOptions: ({navigation}) =>{
        return {
          header: null ,
          title: `我的`,
          // headerTitleContainerStyle:{justifyContent: 'center'},
          // headerStyle: {opacity: 0.7},
        }
      }
    },
    Login: {
      screen: LoginPage,
      navigationOptions: ({navigation}) => {
        return {
          header: null,
          
        }
      }
    },
    Register: {
      screen: RegisterPage,
      navigationOptions: ({navigation}) => {
        return {
          header: null
        }
      }
    },
    Favorite: {
      screen: FavoritePage,
      navigationOptions: ({navigation}) => {
        return {
          header: null
        }
      }
    },
    MyProject: {
      screen: MyProjectPage,
      navigationOptions: ({navigation}) => {
        return {
          header: null
        }
      }
    },
    AboutMe: {
      screen: AboutMePage,
      navigationOptions: ({navigation}) => {
        tabBarVisible = true;
        return {
          header: null,
          tabBarVisible
        }
      }
    },
    Notification: {
      screen: NotificationPage,
      navigationOptions: ({navigation}) => {
        
      }
    }
  },{
    navigationOptions: ({navigation}) => {
      let tabBarVisible = true;
      if(navigation.state.index>0 && (navigation.state.routes[1].routeName==='Login')){ 
          tabBarVisible = false
      }
      return {
        tabBarVisible
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
    // inactiveTintColor: 'white',
    activeTintColor: 'black',
  },
})

