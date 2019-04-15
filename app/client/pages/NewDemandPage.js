import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import actions from '../action/index';
import BaseAddItem from '../commons/BaseAddItem';

export  class NewDemand extends Component{
    constructor(props){
        super(props);
    }
    
    checkIdentify = ({identify}) => {
        if(identify === '1') return window.alert('目前只有企业用户可以发布需求哦')
    }

    render(){
        const {user, onUploadNew, navigation} = this.props;
        return  (
            <BaseAddItem
                checkIdentify={() => this.checkIdentify(user)}
                user={user}
                onUploadNew={onUploadNew}
                identify={'0'}
                navigation={navigation}
            />
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