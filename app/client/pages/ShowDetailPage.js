import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import ShowCell from '../commons/ShowCell';

import HTMLView from 'react-native-htmlview'; 

export default class DetailsPage extends Component {
    constructor(props){
        super(props)
    }
    
    _onPress = () => {

    }


    render(){
        const {navigation} = this.props;
        const {getParam} = navigation;
        const ItemData = getParam('item');
        console.log(ItemData.title)
        return (
                <View style={styles.container}>
                    <ScrollView>
                        <ShowCell
                            data={ItemData}
                        />
                        <View style={styles.detail_container}>
                            <HTMLView
                                value={ItemData.description}
                            />
                        </View>
                    </ScrollView>

                </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F4F4F4',
      },
      detail_container: {
          flexDirection: 'column',

      }
})