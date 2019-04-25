import  React, {Component}  from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Dimensions, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper';
import Loading  from './Loading';

const ScreenWidth = Dimensions.get('window');

export default class ShowCell extends Component{
    constructor(props){
        super(props)
        console.disableYellowBox = true;
    }

    /**
     * 要展示的图片
     */
    showImgs = ({image}) => {
        const {onPress} = this.props;
        let imgArr = [];
        image.forEach((img, index) => {
            imgArr.push(
            <TouchableOpacity 
                style={styles.swiperContainer} 
                key={`${img}`}
                onPress={onPress}
                activeOpacity={0.8}
                >
                <Image
                    source={{uri: unescape( img)}}
                    style={styles.img}
                />
            </TouchableOpacity>
            )
        });
        return imgArr;
    }
    /**
     * 图片作品展示使用轮播图进行
     */
    render(){
        const {data, onPress} = this.props
        return (
            <View style={styles.container} >
                {/* <TouchableOpacity
                    onPress = {onPress}
                    underlayColor = 'transparent'
                    activeOpacity={0.7}
                > */}
                    <View style={styles.cell_container} >
                        <View style={styles.description_container}>
                            <View style={{padding: 10}}>
                                <Image 
                                    source = {data.avatar === undefined ? data.avatar : require('../../../img/AuthorAvatar.png')}
                                    style = {styles.avatar}
                                />
                            </View>
                            
                            <View style={styles.header_container}>
                                <Text style={styles.title}>{data.title}</Text>
                                <Text style={styles.author}>{data.author}</Text>
                            </View>
                            
                        </View>
                        {/* <View style={styles.img_container}> */}
                        <Swiper  
                            style={styles.img_container}
                        >
                                {this.showImgs(data)}
                        </Swiper>
                            {/* <Image 
                                source={{uri: data.images.hidpi}}
                                style={styles.img}
                            />  */}
                        {/* </View> */}
                    </View>
                    <Icon
                        size={20}
                        name={'hearto'}
                        onPress={()=> this._favoriteProject}
                        style={{position: 'absolute', right: 15, top: 15}} 
                        // color={}
                        /> 
                {/* </TouchableOpacity> */}
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
    header_container: {
        flex: 1,
        flexDirection:'column',
        padding: 10,
        // justifyContent: 'center',
        // marginBottom
    },
    title: {
        flex: 1,
        flexDirection: 'column',
        fontWeight: 'bold',
    },
    author: {
        flex: 1,
        flexDirection: 'column',

    },
    img_container: {
        flex: 1,
        marginBottom: 5,
        width: ScreenWidth.width,
        height: 300
    },
    swiperContainer: {
        height: 300,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        flex: 1,
        width: ScreenWidth.width,
        height: 300,
        alignItems: 'center',
        resizeMode: 'cover'
    },
    html_container: {
        flexDirection: 'row',
        flex: 1,
        padding: 5
    }
})