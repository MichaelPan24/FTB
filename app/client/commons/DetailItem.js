import  React, {Component}  from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class DetailItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                   <Image />
                </TouchableOpacity>
            </View>
        )     
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    }
})