import React, {Component} from 'react';
import {TextInput, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import  Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import Spinner from 'react-native-loading-spinner-overlay';

import NavigationBar from '../commons/NavigationBar';
import actions from '../action/index';
import Loading from '../commons/Loading';

export  class NewDemand extends Component{
    constructor(props){
        super(props);
        this.state={
            isPicked : false,
            imgArr : [],
            des: ''
        }
    }

    // static  getDerivedStateFromProps(nextProps, preState){
    //     if(nextProps.isLoading === preState.isLoading){
    //         return null
    //     }  
    //     return {
    //         isLoading: nextProps.isLoading
    //     }
    // }
    //检验用户上传类型
    static propTypes = {
        description: PropType.string ,
        img: PropType.array
    }

    /**
     * 提交表单,发布新项目
     */
    onPublish = () => {
        const {user, onUploadNew} = this.props;
        const {isLogin, identify} = user;
        const {des, imgArr} = this.state;
        const form = {};
        if(!des.trim()){
            window.alert('必须输入需求描述')
            return;
        }else{
            form['description'] = des;
            form['images'] = imgArr;
            //根据登录状态判断 if(this.props.isLogin == true)
            if(! isLogin){
                //考虑更改成更加优雅的提醒方式
                window.alert('请先登录')
                return;
            } else {
                if(identify !== '0'){
                    window.alert('只有企业用户可以发布需求哦')
                    return;
                }
                onUploadNew('0', form);
            }
            
        }
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
            images.length ? this.setState({isPicked: true, imgArr: this.state.imgArr.concat(images)}) : this.state;
        })
    }

    _showPicker = () => {
        return <TouchableOpacity
            onPress={this._pickImage}
            style={styles.imagePickerContainer}
        >
            <Icon
                name={'picture'}
                size={50}
            />
        </TouchableOpacity>
    }

    _showImages = () => {
        const imgArr =  this.state.imgArr.map((img, index) => <TouchableOpacity onPress={this._pickImage}>
            <Image key={index} source={{uri: img.path}} style={styles.img} />
        </TouchableOpacity> )
        return imgArr
    }
    //根据是否选中了照片来替换显示图标
    renderImgPicker = () => {
       return  this.state.isPicked ? this._showImages() : this._showPicker();
    }

    render(){
        const {isLoading} = this.props;
        let navigationBar = <NavigationBar
        title={'新需求'}
        leftButton={this.renderLeftButton()}
        rightButton={this.renderRightButton()}
    />;
        return  (
            <View style={styles.container}>
                <Spinner
                    visible={isLoading}
                    textContent={'请稍等...'}

                />
                {navigationBar}
                {/* <View style={styles.formContainer}> */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            multiline={true}
                            numberOfLines={10}
                            autoFocus={true}
                            placeholder={'请输入您的新需求描述'}
                            style={styles.textInput}
                            onChangeText={(des) => this.setState({des: des})}
                        />
                    </View>
                    
                    <View style={styles.imagePickerContainer}>
                        {this.renderImgPicker()}
                    </View>
                </View>
            // </View>
            
        )
        
    }
}
/**
 * 
 * @param {Boolean} isLogin 是否登入
 * @param {Array} upLoaded 用户上传的项目  
 */
const mapStateToProps = (state) => ({
    user: state.user
})
/**
 * 
 * @param {String} identify 根据身份来确认上传方式
 * @param {object} formData 需要上传的表单信息 
 */
const mapDispatchToProps = (dispatch) => ({
    onUploadNew: (identify, formData) => dispatch(actions.onUploadNew(identify, formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDemand);

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
        flexDirection: 'row'
    },  
 
    publish: {
        marginRight: 15
    }
})