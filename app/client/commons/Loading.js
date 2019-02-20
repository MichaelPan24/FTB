import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

export default class Loading extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <View style={[styles.container,styles.centerText]}>
                <ActivityIndicator
                    animating = {this.props.isLoading}
                    style = {styles.spinner}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "center",
    },
    centerText: {
        alignItems: "center"
    },
    spinner: {
        width: 50
    }
})