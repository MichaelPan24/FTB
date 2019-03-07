import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scrollview'

const SCREEN_HEIGHT = Dimensions.get('window').height
export default class MyPage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <ParallaxScrollView
  windowHeight={SCREEN_HEIGHT * 0.4}
  backgroundSource={{uri: 'http://i.imgur.com/UyjQBkJ.png'}}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
      },
})