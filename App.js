import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Loading from './app/client/components/Loading'
import TabNavigators from './app/client/navigators/TabNavigators'
import ParallaxView  from 'react-native-parallax-scrollview'

const SCREEN_HEIGHT = Dimensions.get('window').height
class HomeScreen extends Component {
  render(){
    return (
      // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      //   <Text>Home Screen</Text>
      // </View>
      <ParallaxView
      windowHeight={SCREEN_HEIGHT * 0.4}
      backgroundSource='http://i.imgur.com/UyjQBkJ.png'
      navBarTitle='John Oliver'
      userName='John Oliver'
      userTitle='Comedian'
      userImage='http://i.imgur.com/RQ1iLOs.jpg'
      leftIcon={{name: 'rocket', color: 'rgba(131, 175, 41, 1)', size: 30, type: 'font-awesome'}}
      rightIcon={{name: 'user', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
      />
    )
  }
}

const AppNavigator = createBottomTabNavigator({ Home: { screen: TabNavigators } }); 
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
