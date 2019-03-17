import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default  class InfoDetail extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {data} = this.props;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.detailContainer}>
                    <View>
                        <View style={styles.header}>
                        
                        </View>
                        <View style={styles.body}>

                        </View>
                    </View>
                </ScrollView>
                <View style={styles.chatContainer}>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        
    },
    detailContainer:{

    }
})