import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default class WelcomePage extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        setTimeout(()=>{this.props.navigation.navigate('Main')},300)
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>this is Welcome page</Text>
            </View>
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
    }
})