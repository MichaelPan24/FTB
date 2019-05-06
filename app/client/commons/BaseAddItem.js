import React, {Component} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Image, Text, ScrollView, Modal, TouchableHighlight} from 'react-native';
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
            title: '',
            isPublished: false
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
        }else if(title.length >=10){
            window.alert('标题不能多于10个字')
        }else if(imgArr.length>=10){
            window.alert('不能选择超过9张图片')
        }else{
            //根据登录状态判断 if(this.props.isLogin == true)
            if(!isLogin){
                //考虑更改成更加优雅的提醒方式
                window.alert('请先登录')
                return;
            } else {
                if(typeof checkIdentify() !== 'object'){
                    form['title'] = title;
                    form['description'] = des;
                    imgArr.length ? form['image'] = imgArr : null
                    onUploadNew(identify, form) && this.setState({isPublished: true});
                }else{
                    window.alert(checkIdentify().msg)
                }
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
            // console.log(images);
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
                style={styles.PickIcon}
            />
        )
    }

    _showImages = () => {
        const imgArr =  this.state.imgArr.map((img, index) => {
            console.log(this.state.imgArr)
            return <TouchableOpacity onPress={(index)=> this._deleteImg(index)} key={index} style={styles.imgContainer}>
                <Image key={`${img.path}`}  source={{uri: img.uri}} style={styles.img} key={index}/>
            </TouchableOpacity>}
         )
        return imgArr
    }

    _deleteImg = (index) => {
        this.setState((prevState) => {
            let arr = prevState.imgArr;
            arr.splice(index, 1)
            return {
                imgArr: arr
            }
        })
    }

    // renderImgPicker = () => {
    //     let PickerContainer = [];
    //     PickerContainer.push(this._showPicker())
    //     return  this.state.isPicked ? this._showImages() : this._showPicker();
    //  }

    render(){
        const {identify, user} = this.props;
        let navigationBar = <NavigationBar
            title={identify ==='0' ? '新需求' :'新作品'}
            leftButton={this.renderLeftButton()}
            rightButton={this.renderRightButton()}
        />;
        return (
                <ScrollView style={styles.container}>
                    <Spinner
                        visible={user.isLoading}
                        textContent={'请稍等...'}
                        cancelable={true}
                    />
                    <Modal
                        animationType='slide'
                        transparent={false}
                        visible={this.state.isPublished}
                        onRequestClose={()=>this.setState({isPublished: false})}
                   >
                        <View style={{ marginTop: 22 }}>
                            <View>
                                <Text>{user.isUploaded? '发布成功': '发布失败'}</Text>
                                <TouchableHighlight
                                    onPress={() => {
                                    this.setModalVisible(!this.state.isPublished);
                                    }}
                                >
                                    <Text>关闭</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                    {navigationBar}
                    {/* <ScrollView style={styles.formContainer}> */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder={'请输入标题(标题不多于10个字)'}
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
                        
                        <View style={styles.inputContainer}>
                            <View style={styles.hint}>
                                    <Text>最多选择9张图片</Text>
                            </View>
                            <ScrollView
                                horizontal={true}
                                style={styles.pickerContainer}
                            >
                                <View
                                    style={styles.imagePickerContainer}
                                    scrollEnabled={true}
                                    showsHorizontalScrollIndicator={true}
                                >
                                    {this.state.isPicked && this._showImages()}
                                    {this._showPicker()}
                                </View>
                            </ScrollView>
                        </View>
                        
                </ScrollView>
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
        marginLeft: 15
    },
    imgContainer: {

    },
    PickIcon: {
        marginLeft: 15
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
        flexDirection: 'column',
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 20,
        marginRight: 15,
        backgroundColor: 'white',
        borderRadius: 20
    },  
    pickerContainer: {
        marginBottom: 10
        // backgroundColor: 'white'
    },
    hint: {
        flex: 1,
        marginLeft: 15,
        marginTop: 10
    },  
    textInput: {
        flex: 1,
        padding: 15
    },
    imagePickerContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    },  
 
    publish: {
        marginRight: 15
    }
})