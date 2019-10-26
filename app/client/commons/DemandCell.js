import  React, {Component}  from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import {connect} from 'react-redux';
import actions from '../action/index';

export class DemandCell extends Component{
    constructor(props){
        super(props)
        console.disableYellowBox = true;
        this.state={
            isTagged: false,
            avatar:'',
            isToggled: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        let _ID = nextProps.user.isLogin ? nextProps.user.user._id : '';
        // console.log(_ID)
        let CollectedUser=[];
        // for(let i in collectedUser){
        //     console.log(typeof collectedUser[i]['_id'])
        // }
        if(_ID){
            const {collectedUser} = nextProps.data;
            for(let i in collectedUser){
                CollectedUser.push(collectedUser[i]['_id'])
            }
            if(CollectedUser.includes(_ID) && ! prevState.isToggled){
                return{
                    isTagged: true,
                    isToggled: !prevState.isToggled
                }
            }
        }else{
            return{
                isTagged: false,
                isToggled: false
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.isTagged != nextState.isTagged){
            return true
        }else if(nextProps.data.collectedUser.length !== this.props.data.collectedUser.length || nextProps.user.isLogin !== this.props.user.isLogin){
            return true
        }
        return false
    }

    componentDidMount(){
        const {data} = this.props;
        // Image.prefetch(data.avatar.avatar);
    }

    componentDidUpdate(prevProps, prevState){
        const {onLike, data, user} = this.props;
        const {isLogin} = user;
        if(isLogin){
            if(this.state.isTagged !== prevState.isTagged){
                const favItem = {
                    favProject: data._id,
                    isFav: this.state.isTagged ? '1' : '0'
                }
                onLike('project', user.user._id, favItem);
                this.setState((prevState) => {
                    return {

                    }
                })
            }
        }
    }

    _genImage= ({image}) => {
        let imgArr = [];
        for(var i=0; i< image.length; i++){
            imgArr.push(
                <Image
                    source={{uri: image[i]}}
                    style = {styles.img}
                    key={`${image[i]}-${i}`}
                />
            )
        }
        if(imgArr.length <= 3){
            return imgArr;
        }else{
            //>2 的图片展示使用剩余数量图标展示
            return imgArr.slice(0, 3).concat(this._restImg(imgArr))
        }
    }

    _restImg = (imgArr) => {
        return <Text>{`+${imgArr.length - 3}`}</Text>
    }
 
    showDescription = (data) => {
        const {description} = data;
            if(description.toString().length <=100){
                return description.toString();
            }
            return description.toString.subStr(0, 100);
    }

    _favoriteProject = () => {
        
    }

    onTag = (user) => {
        if(user.isLogin){
            this.setState((prevState) => {
                return {
                    isTagged: ! prevState.isTagged
                }
            })
        }else{
            window.alert('请先登录')
        }
    }

    render(){
        const {data, onPress, user} = this.props
        const date = new Date(data.date);
        const avatarUrl = data.avatar.avatar;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress} style={styles.cellContainer} activeOpacity={0.8}>
                    <View style={styles.header}>
                        <View style={styles.nameContainer}>
                            <Image
                                ref={img => this.avatarImg = img}
                                source={avatarUrl ? {uri: avatarUrl} : require('../../../img/AuthorAvatar.png')}
                                style={styles.avatar}
                            />
                            <Text style={styles.text}>
                                {data.companyName.name}
                            </Text>
                            
                        </View>
                        
                        <Text style={styles.header_title}>
                            {data.title}
                        </Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description}>
                            {this.showDescription(data)}
                        </Text>
                        <View style={styles.imgContainer}>
                            {this._genImage(data)}
                        </View>
                        
                    </View>
                    <View style={styles.footer}> 
                        <Text>
                            {`${date.getFullYear().toString()}-${(date.getMonth()+1).toString()}-${date.getDay().toString()}`}
                        </Text>
                    </View>
                    <Icon
                        size={20}
                        name={this.state.isTagged ? 'tag' :'tago'}
                        onPress={()=> this.onTag(user)}
                        style={{position: 'absolute', right: 15, top: 10}} 
                        // color={}
                        />
                </TouchableOpacity>
            </View>
        )     
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    demands: state.demands
})

const mapDispatchToProps = (dispatch) => ({
    onLike: (type, userId, favItem) => dispatch(actions.onLike(type, userId, favItem))
})
export default connect(mapStateToProps, mapDispatchToProps)(DemandCell);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5
    },
    cellContainer:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderBottomColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomStartRadius: 55,
        marginBottom: 5,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'column',
        flex: 1,
        marginTop: 5,
        marginLeft: 50,
        marginBottom: 15,
    },
    nameContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 20
    },
    text: {
        textAlignVertical: 'center',
        marginLeft: 5
    },
    header_title: {
        fontWeight: 'bold'
    },
    description_container:{
        flex: 1,
        flexDirection: 'column',
        marginLeft: 50,
    },
    description:{

    },
    imgContainer:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 15
    },  
    img: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    footer: {
        position: 'absolute',
        right: 10,
        bottom: 5
    },
})