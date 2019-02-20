import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default class HomePage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <Text>this is home page</Text>
                <Button 
                title={'详情'}
                onPress={() => (navigation.navigate('Details',{
                    name: 'test'
                })) }/>
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