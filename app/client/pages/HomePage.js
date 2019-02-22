import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, FlatList, RefreshControl,} from 'react-native';

import HomeCell from '../commons/HomeCell';

import getResource,{mockData} from '../../utils/api';


export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataResource: []
        }
    }

    componentDidMount(){
        this.fetchData()
    }


    fetchData = () => {
        getResource.getUsersShots().then(data => {
            if(data.length> 0){
                this.setState( {dataResource: this.state.dataResource.concat(data)})
            }
        })
        // console.log(this.state.dataResource)
    }

    _onPress = () => {

    }

    _renderItem = ({item}) => {
        return(
            <HomeCell
                data = {item}
                onPress = {this._onPress}

            />
        )
        
    }
    render(){
        const {navigation} = this.props
        return (
            <View style={styles.container}>
               <View style={{flex: 1, alignItems: 'center',}}>
                    <FlatList
                        extraData={this.state}
                        data={this.state.dataResource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index}
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