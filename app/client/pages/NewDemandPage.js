import React, {Component} from 'react';
import {TextInput, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import  Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';


import NavigationBar from '../commons/NavigationBar';
import actions from '../action/index';

export  class NewDemand extends Component{
    constructor(props){
        super(props);
    }

    //检验用户上传类型
    static propTypes = {
        description: PropType.string ,
        img: PropType
    }

    //发布新项目
    onPublish = () => {

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

        })
    }

    renderImgPicker = () => {
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

    render(){
        let navigationBar = <NavigationBar
        title={'新需求'}
        leftButton={this.renderLeftButton()}
        rightButton={this.renderRightButton()}
    />;
        return(
            <View style={styles.container}>
                {navigationBar}
                <View style={styles.inputContainer}>
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        autoFocus={true}
                        placeholder={'请输入您的新需求描述'}
                        style={styles.textInput}
                    >


                    </TextInput>
                   {this.renderImgPicker()}
                </View>
            </View>
            
        )
        
    }
}
//映射props,根据isLogin 状态判断是否可以进行上传操作
const mapStateToProps = (state) => ({
    isLogin: state.isLogin
})

const mapDispatchToProps = (dispatch) => ({
    onUploadNew: (identify, formData) => dispatch(actions.onUploadNew(identify, formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDemand);

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#F4F4F4',
        
    },
    inputContainer: {
        borderBottomColor: '#fff',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        // padding: 20
    },
    textInput: {

    },
    imagePickerContainer: {
        // flex: 1
    },  
 
    publish: {
        marginRight: 15
    }
})