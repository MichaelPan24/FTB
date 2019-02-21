import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, FlatList, RefreshControl} from 'react-native';

import HomeCell from '../commons/HomeCell';

import getResource from '../../utils/api';


export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataResource: []
        }
    }

    componentDidMount(){
        
    }

    fetchData = () => {
        getResource.getUsersShots().then(data => {
            if(data.length >0) data.forEach((val,i) => {
                this.setState({
                    dataResource: this.state.dataResource.push(Object.assign(val,{'time_stamp':''}))
                })
            });
        })
    }

    render(){
        const {navigation} = this.props
        return (
            <View style={styles.container}>
               <View style={{flex: 1, alignItems: 'center',}}>
                    <FlatList
                        data={[{item:'hi',key:1},{item:'ho',key:1}]}
                        renderItem={item => <Text>item.item</Text>}
                        // keyExtractor={}
                        refreshControl={
                            <RefreshControl
                                title={'loading'}
                                titleColor={'yellow'}
                            />
                        }             
                    />
                </View>
                {/* <FlatList>

                </FlatList> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
})