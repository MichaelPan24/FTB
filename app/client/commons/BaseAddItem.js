import React, {Component} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Image, Text, ScrollView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import  Icon from 'react-native-vector-icons/AntDesign';
import NavigationBar from './NavigationBar';
import ImagePicker from 'react-native-image-crop-picker';
import PropType from 'prop-types';
export default class BaseAddItem extends Component {
    constructor(props){
        super(props);
        this.state={
            isPicked : false,
            imgArr : [],
            des: '',
            title: ''
        }
    }

    // static  getDerivedStateFromProps(nextProps, preState){
    //     // if(nextProps.isLoading === preState.isLoading){
    //     //     return null
    //     // }  
    //     // return {
    //     //     isLoading: nextProps.isLoading
    //     // }
    // }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.des !== this.state.des || nextState.title !== this.state.title){
            return false;
        }
        return true;
    }
    //检验用户上传类型
    static propTypes = {
        identify: PropType.string.isRequired ,
        onUploadNew: PropType.func.isRequired ,
        checkIdentify: PropType.func.isRequired,
        user: PropType.object.isRequired
    }

    goBack = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    onPublish = () => {
        const {user, onUploadNew, checkIdentify} = this.props;
        const {isLogin, identify} = user;
        const {des, imgArr, title} = this.state;
        const form = {};
        if(!des.trim()){
            window.alert('必须输入描述')
            return;
        }else if(!title.trim()){
            window.alert('请输入标题')
            return;
        }else{
            //根据登录状态判断 if(this.props.isLogin == true)
            if(!isLogin){
                //考虑更改成更加优雅的提醒方式
                window.alert('请先登录')
                return;
            } else {
                checkIdentify();
                form['title'] = title;
                form['description'] = des;
                imgArr.length ? form['image'] = imgArr : null
                onUploadNew(identify, form);
            }
        }
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

    renderRightButton = () => {
        return <Text onPress={this.onPublish} style={styles.publish}>
            发布
        </Text>
    }

    //从用户设备选择图片准备进行上传
    _pickImage = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            console.log(images);
            let imgContainer = images.map((img) =>({uri: img.path, type:'multipart/form-data', name:escape(img.path.slice(img.path.lastIndexOf('/')+1))}))//需要更改
            images.length ? this.setState({isPicked: true, imgArr: this.state.imgArr.concat(imgContainer)}) : this.state;
        })
    }

    _showPicker = () => {
        return (
            <Icon
                name={'picture'}
                size={50}
                onPress={this._pickImage}
            />
        )
    }

    _showImages = () => {
        const imgArr =  this.state.imgArr.map((img, index) => 
            <TouchableOpacity onPress={this._pickImage} key={index}>
                <Image key={index}  source={{uri: img.uri}} style={styles.img} key={index}/>
            </TouchableOpacity>
         )
        return imgArr
    }

    renderImgPicker = () => {
        return  this.state.isPicked ? this._showImages() : this._showPicker();
     }

    render(){
        const {identify, user} = this.props;
        let navigationBar = <NavigationBar
            title={identify ==='0' ? '新需求' :'新作品'}
            leftButton={this.renderLeftButton()}
            rightButton={this.renderRightButton()}
        />;
        return (
                <View style={styles.container}>
                    <Spinner
                        visible={user.isLoading}
                        textContent={'请稍等...'}
                        cancelable={true}
                    />
                    {navigationBar}
                    {/* <View style={styles.formContainer}> */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder={'请输入标题'}
                                style={styles.textInput}
                                onChangeText={(title) => this.setState({title: title})}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={10}
                                placeholder={identify ==='0' ? '请输入您的新需求描述' : '请输入您的新作品描述'}
                                style={styles.textInput}
                                onChangeText={(des) => this.setState({des: des})}
                            />
                        </View>
                        
                        <View
                            style={styles.imagePickerContainer}
                            scrollEnabled={true}
                            showsHorizontalScrollIndicator={true}
                        >
                            {this.renderImgPicker()}
                        </View>
                </View>
                )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#F4F4F4',
        
    },
    img:{
        width: 60,
        height: 60,
        marginLeft: 5
    },
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        borderBottomColor: '#fff',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        // padding: 20
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row'
    },  
    textInput: {

    },
    imagePickerContainer: {
        flex: 1,
        flexDirection: 'row',
        
    },  
 
    publish: {
        marginRight: 15
    }
})