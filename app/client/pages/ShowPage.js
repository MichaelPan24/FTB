import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, FlatList, RefreshControl,} from 'react-native';

import ShowCell from '../commons/ShowCell';

import getResource from '../../utils/api';


export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataResource: []
        }
        console.disableYellowBox = true
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
    }

    _onPress = (item) => {
        const  {navigation} = this.props;
        navigation.navigate('ShowDetails',{name:'项目', item})
    }

    _renderItem = ({item}) => {
        return(
            <ShowCell
                data = {item}
                onPress = {() => (this._onPress(item))}

            />
        )
        
    }
    render(){
        return (
            <View style={styles.container}>
                    <FlatList
                        extraData={this.state}
                        data={this.state.dataResource}
                        renderItem={this._renderItem}
                        keyExtractor={(item) => `${item.id}`}
                        refreshControl={
                            <RefreshControl
                                title={'loading'}
                                titleColor={'yellow'}
                            />
                        }             
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
      },
})