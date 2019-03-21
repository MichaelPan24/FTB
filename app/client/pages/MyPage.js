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
                navBarTitle='Michael Pan'
                userName='Michael Pan'
                userTitle='SoftWare Engineer'
                userImage = {require('../../../img/userAvatar.jpg')}
                // userImage='http://i.imgur.com/RQ1iLOs.jpg'
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