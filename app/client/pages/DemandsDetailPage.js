import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image,TextInput, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import {connect} from 'react-redux';

import actions from '../action/index';
import NavigationBar from '../commons/NavigationBar';
import { UserItem } from '../commons/UserItem';

const   ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
export class DemandsDetailPage extends Component{
    constructor(props){
        super(props)
    }

    _genImage = ({image}) => {
        let imgArr = [];
        image.forEach((img, index) => {
            imgArr.push(
                <Image
                    key={index}
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
        const {navigation, user} = this.props;
        const {getParam} = navigation;
        const {avatar} = user.user;
        const data = getParam('data');
        console.log(data)
        const demandsAvatar = data.avatar.avatar ;
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
                                    source={demandsAvatar ? {uri: demandsAvatar} : require('../../../img/AuthorAvatar.png')}
                                    style={styles.avatar}
                                />
                                <Text style={styles.companyName}>{data.companyName.name}</Text>
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
                </View>
            </View>
            
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    onLike: (type, userId, favItem) => dispatch(actions.onLike(type, userId, favItem))
})

export default connect(mapStateToProps, mapDispatchToProps)(DemandsDetailPage)

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
        height: 36,
        borderRadius: 20
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
        // backgroundColor: '#F4F4F4'
    },
    imageContainer: {
        flex: 1,
        // backgroundColor: '#F4F4F4'
    },
    image: {
        flex: 1,
        marginTop: 30,
        width: ScreenWidth * 4/5,
        height: ScreenHeight * 3/5,

    },
})