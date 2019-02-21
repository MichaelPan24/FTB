import  React, {Component}  from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import getResource from '../../utils/api'

export default class HomeCell extends Component{
    constructor(props){
        super(props)
        
    }



    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress = {this.props.onPress}
                >
                    <View>
                        <Text>{this.props.data.title}</Text>
                        <Image source={this.props.data.images}/>
                    </View> 
                   
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