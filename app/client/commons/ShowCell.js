import  React, {Component}  from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Dimensions, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../action/index';
import {ModalView} from '../../utils/viewUtils';

const ScreenWidth = Dimensions.get('window');


export class ShowCell extends Component{
    constructor(props){
        super(props)
        console.disableYellowBox = true;
        this.state={
            isFavorite: false,
            isToggled: false,
            showModal: false
        }
    }

    static propTypes = {
        data: PropTypes.object.isRequired, //数据来源
        onPress: PropTypes.func, //点击操作
        onManage: PropTypes.func    //管理操作
    }

    static getDerivedStateFromProps(nextProps, prevState){
        nextProps.data.image.forEach((img) => {
            Image.prefetch(img)
        })
        // console.log(typeof nextProps.user.user._id)
        let _ID = nextProps.user.isLogin ? nextProps.user.user._id : '';
        // console.log(_ID)
        let CollectedUser = [];
        let CollectedWork = [];
        // for(let i in collectedUser){
        //     console.log(typeof collectedUser[i]['_id'])
        // }
        // console.log(nextProps.data, '\n', nextProps.user.user);
        if(_ID){
            const {collectedUser, _id} = nextProps.data;
            const {favorite_work} = nextProps.user.user;
            for(let i in collectedUser){
                CollectedUser.push(collectedUser[i]['_id'])
            }
            for(let i in favorite_work){
                CollectedWork.push(favorite_work[i]['_id'])
            }
            if(CollectedUser.includes(_ID) &&  ! prevState.isToggled){
                return{
                    isFavorite: true,
                    isToggled: !prevState.isToggled
                }
            }
        }else{
            return{
                isFavorite: false,
                isToggled: false
            }
        }
        
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.isFavorite != nextState.isFavorite){
            return true
        }else if(nextProps.data.collectedUser.length !== this.props.data.collectedUser.length){
            return true
        }else if(nextProps.user.isLogin !== this.props.user.isLogin){
            return true
        }
        return false
    }

    componentDidMount(){
        const {data, user} = this.props;
        // this.checkIsBeenFavorite(data, user) && this.setState({isFavorite: true})

    }

    componentDidUpdate(prevProps, prevState){
        const {onLike, data, user} = this.props;
        const {isLogin} = user;
        if(isLogin){
            if((this.state.isFavorite !== prevState.isFavorite) ){
                const favItem = {
                    favWork: data._id,
                    isFav: this.state.isFavorite ? '1' : '0'
                }
                onLike('work', user.user._id, favItem);
            }
        }
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
                    source={{uri: img}}
                    style={styles.img}
                />
            </TouchableOpacity>
            )
        });
        return imgArr;
    }

    // /**
    //  * @var {collectedUser} {_id, }
    //  */
    // checkIsBeenFavorite = (data, user) => {
    //     let _ID = nextProps.user.isLogin ? nextProps.user.user._id : '';
    //     // console.log(_ID)
    //     const {collectedUser} = nextProps.data;
    //     let CollectedUser=[];
    //     // for(let i in collectedUser){
    //     //     console.log(typeof collectedUser[i]['_id'])
    //     // }
    //     if(_ID){
    //         for(let i in collectedUser){
    //             CollectedUser.push(collectedUser[i]['_id'])
    //         }
    //         if(CollectedUser.includes(_ID)){
    //             return{
    //                 isFavorite: true
    //             }
    //         }
    //     }
    //     // console.log(collectedUser)
    // }

    onLikeWork = ( user) => {
        if(user.isLogin){
            this.setState((prevState) => {
                return{
                        isFavorite: !prevState.isFavorite,
                    } 
            })
            // onLike('work', user.user._id, favItem);
            // return true;
        }else{
            window.alert('请先登录')
        }
    }
    /**
     * 图片作品展示使用轮播图进行
     */
    render(){
        const {data,  user} = this.props;
        const {isLoading, isLiked} = user;
        let visibleState
        return (
            <View style={styles.container} >
                {/* <TouchableOpacity
                    onPress = {onPress}
                    underlayColor = 'transparent'
                    activeOpacity={0.7}
                > */}
                    {/* {ModalView({success: '操作成功', fail: '操作失败'}, isLiked, )} */}
                    <View style={styles.cell_container} >
                        <View style={styles.description_container}>
                            <View style={{padding: 10}}>
                                <Image 
                                    source = {data.avatar.avatar ? {uri:data.avatar.avatar} : require('../../../img/AuthorAvatar.png')}
                                    style = {styles.avatar}
                                />
                            </View>
                            
                            <View style={styles.header_container}>
                                <Text style={styles.title}>{data.title}</Text>
                                <Text style={styles.author}>{data.author.name}</Text>
                            </View>
                            
                        </View>
                        {/* <View style={styles.img_container}> */}
                        <Swiper  
                            style={styles.img_container}
                            autoplay={true}
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
                        ref={(icon) => this.icon = icon}
                        size={20}
                        name={this.state.isFavorite? 'heart': 'hearto'}
                        onPress={()=> this.onLikeWork(user )}
                        style={{position: 'absolute', right: 15, top: 15}} 
                        // color='#900'
                        />
                {/* </TouchableOpacity> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowCell);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between', 
        flexDirection: 'row',
        // alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    cell_container: {
        backgroundColor: 'white',
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 20
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
        borderBottomWidth: 0.1
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