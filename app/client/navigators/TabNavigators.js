//标签导航栏配置
import React, {Component} from 'react';
import {Text, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import WelcomePage from '../pages/WelcomePage'
import HomePage from '../pages/HomePage';
import DetailsPage from '../pages/DetailsPage';

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
                title: `${navigation.state.params.name}详情`,

            }
        }
    }
})

class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../../../img/AuthorAvatar.png')}
          style={{ width: 30, height: 30 }}
        />
      );
    }
  }

export default HomeStack
