import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

import NavigationBar from '../commons/NavigationBar';

const   ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
export default  class InfoDetail extends Component{
    constructor(props){
        super(props)
    }

    _genImage = ({image}) => {
        let imgArr = [];
        image.forEach(img => {
            imgArr.push(
                <Image
                    source={{uri:img}}
                    style={styles.image}   
                />)
        });
        return imgArr;
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
        const {getParam} = this.props.navigation;
        const data = getParam('data');
        const avatar = data.avatar || require('../../../img/AuthorAvatar.png');
        const date = new Date(data.date);
        let navigationBar = <NavigationBar
                                leftButton={this.renderLeftButton()}
                                title={'需求详情'}
                                />;
        return (
            <View style={{flex: 1}}>
                {navigationBar}
                <View style={styles.container}>
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        keyboardDismissMode={'on-drag'}
                        style={styles.detailContainer}>
                            <View style={styles.header}>
                                <Image
                                    source={{uri: avatar}}
                                    style={styles.avatar}
                                />
                                <Text style={styles.companyName}>{data.companyName}</Text>
                                <Text style={styles.date}>{`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}</Text>
                            </View>
                            <View style={styles.body}>
                                <View style={styles.descriptionContainer}>
                                    <Text>
                                        {data.description}
                                    </Text>
                                </View>
                                <View style={styles.imageContainer}>
                                    {data.image ? this._genImage(data) : null} 
                                </View>
                            </View>
                    </ScrollView>
                    <View style={styles.chatContainer}>
                        
                    </View>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
        
    },
    header: {
        flex: 1,
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    avatar: {
            width: 36,
            height: 36
    },  
    companyName: {
        fontWeight: 'bold',
        textAlignVertical: 'center',
        marginLeft: 5
    },
    date: {
        position: 'absolute',
        top: 5,
        right: 5,
    },  
    detailContainer:{

    },
    imageContainer: {
        flex: 1
    },
    image: {
        flex: 1,
        marginTop: 30,
        width: ScreenWidth * 4/5,
        height: ScreenHeight * 3/5,

    }

})