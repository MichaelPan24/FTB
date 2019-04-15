import  React, {Component}  from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Dimensions, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper';

const ScreenWidth = Dimensions.get('window');

export default class HomeCell extends Component{
    constructor(props){
        super(props)
        console.disableYellowBox = true;
    }

    /**
     * 图片作品展示使用轮播图进行
     */
    render(){
        const {data, onPress} = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress = {onPress}
                    underlayColor = 'transparent'
                >
                    <View style={styles.cell_container}>
                        <View style={styles.description_container}>
                            <Image 
                                source = {require('../../../img/AuthorAvatar.png')}
                                style = {styles.avatar}
                            />
                            <Text style={styles.description_container}>{data.title}</Text>
                        </View>
                        <View style={styles.img_container}>
                            <Image 
                                source={{uri: data.images.hidpi}}
                                style={styles.img}
                            /> 
                        </View>
                        {/* <View>
                            <HTMLView
                                value={data.description}
                                stylesheet={styles.html_container}
                            />
                        </View> */}
                    </View>
                    <Icon
                        size={20}
                        name={'hearto'}
                        onPress={()=> this._favoriteProject}
                        style={{position: 'absolute', right: 15, top: 10}} 
                        // color={}
                        /> 
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
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    cell_container: {
        backgroundColor: 'white',
    },
    avatar: {
        width: 36,
        height: 36,
    },
    description_container: {
            flex: 1,
            flexDirection:'row',
            padding: 10,
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 3,
    },
    img_container: {
        flex: 1,
        marginBottom: 5
    },
    img: {
        height: 300,
        width: ScreenWidth.width,
        alignItems: 'center',
        resizeMode: 'contain'
    },
    html_container: {
        flexDirection: 'row',
        flex: 1,
        padding: 5
    }
})