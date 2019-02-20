import React, {Component} from 'react';
import {View, StyleSheet, Text,} from 'react-native';

export default class DetailsPage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {navigation} = this.props
        return (
                <View style={styles.container}>
                    <Text>this is DetailsPage</Text>
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
        backgroundColor: '#F5FCFF',
      },
})