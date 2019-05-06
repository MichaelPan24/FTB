import React, {Component} from 'react';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign'

import DemandsPage from '../pages/DemandsPage';
import DemandsDetailPage from '../pages/DemandsDetailPage'
import NewDemandPage from '../pages/NewDemandPage';
import ShowPage from '../pages/ShowPage'
import NewShowPage from '../pages/NewShowPage';
import ShowDetailPage from '../pages/ShowDetailPage'
import MyPage from '../pages/MyPage';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/login/RegisterPage';
import FavoriteDemandPage from '../pages/Me/FavoriteDemandPage';
import FavoriteWorkPage from '../pages/Me/FavoriteWorkPage';
import MyProjectPage from '../pages/Me/MyProjectPage';
import AboutMePage from '../pages/Me/AboutMePage';
import NotificationPage from '../pages/Me/NotificationPage';
import MyInfoPage from '../pages/Me/MyInfoPage';
import WebViewPage from '../pages/Me/WebViewPage';

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
      navigationOptions: ({navigation}) => {
        return {
          header: null,
          gesturesEnabled: true
        }
      }
    }
  }, {
      navigationOptions: ({navigation}) => {
        let tabBarVisible = true;
        if(navigation.state.index>0 && (navigation.state.routes[1].routeName==='DemandsDetail')){ 
            tabBarVisible = false
        }
        return {
          tabBarVisible
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
    },
    newShow: {
      screen: NewShowPage,
      navigationOptions: ({navigation}) => {
        return {
          header: null,
          gesturesEnabled: true
        }
      }
    }
}, {
  navigationOptions: ({navigation}) => {
    let tabBarVisible = true;
    if(navigation.state.index>0 && (navigation.state.routes[1].routeName==='ShowDetail')){ 
        tabBarVisible = false
    }
    return {
      tabBarVisible
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
    FavoriteDemand: {
      screen: FavoriteDemandPage,
      navigationOptions: ({navigation}) => {
        return {
          header: null
        }
      }
    },
    FavoriteWork: {
      screen: FavoriteWorkPage,
      navigationOptions: ({navigation}) => {
        return {
          header: null
        }
      }
    },
    MyProject: {
      screen: MyProjectPage,
      navigationOptions: ({navigation}) => {
        // let tabBarVisible = true;
        // console.log(navigation.state)
        // if(navigation.state.index>0 ){ 
        //     tabBarVisible = false
        // }
        return {
          header: null,
          // tabBarVisible
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
    WebView: {
      screen: WebViewPage,
      navigationOptions: ({navigation}) => {
        return {
          header: null
        }
      }
    },
    Notification: {
      screen: NotificationPage,
      navigationOptions: ({navigation}) => {
        
      }
    },
    MyInfo: {
      screen: MyInfoPage,
      navigationOptions: ({navigation}) => {
        let tabBarVisible = true;
        console.log(navigation.state)
        if(navigation.state.routeName =='MyInfo' ){ 
            tabBarVisible = false
        }
        return {
          header: null,
          tabBarVisible
        }
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
    WorkShow: {
        screen: WorkShowStack,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor,focused}) => (<Icon 
                name={"home"}
                size={26}
                style={{ paddingTop:5, color:tintColor}}
                />)
        }
    },
    Demands: {
        screen: DemandsStack,
        navigationOptions: {
            tabBarLabel: '需求',
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
    activeTintColor: 'black',
  },
})

