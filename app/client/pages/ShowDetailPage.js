import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import NavigationBar from '../commons/NavigationBar';
import ShowCell from '../commons/ShowCell';

import HTMLView from 'react-native-htmlview'; 

export default class DetailsPage extends Component {
    constructor(props){
        super(props)
    }
    
    _onPress = () => {

    }

    goBack = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    renderLeftButton = () => {
        return <TouchableOpacity
            onPress={() => {
                this.goBack()
            }}
        >
            <View style={{padding: 5, marginLeft: 8}}>
                <Icon
                    name={"arrowleft"}
                    size={24}
                    style={{
                        marginLeft: 8,
                        alignSelf: 'center',
                    }}/>
            </View>
        </TouchableOpacity>
    }

    render(){

        const {navigation} = this.props;
        const {getParam} = navigation;
        const ItemData = getParam('item');
        let navigationBar = <NavigationBar
                                leftButton={this.renderLeftButton()}
                                title={'展示详情'}
                                />;
        console.log(ItemData.title)
        return (
            <View style={{flex: 1}}>
                {navigationBar}
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