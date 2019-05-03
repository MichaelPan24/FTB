import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, TextInput, Text, Button, Picker, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/AntDesign';
import ImgPicker from 'react-native-image-crop-picker';

import actions from '../../action/index';
export class RegisterPage extends Component{
    constructor(props){
        super(props);
        console.disableYellowBox = false;
        this.state={
            email: '',
            pass: '',
            uName: '',
            identify: '',
            isPicked: false,
            avatar: {}
        }
        console.disableYellowBox=true;
    }

    shouldComponentUpdate(nextProps, nextState){
        if( this.state.email !== nextState.email || this.state.pass !== nextState.pass || this.state.uName !== nextState.uName || this.state.identify !== nextState.identify){
            return false;
        }else{
            return true;
        }

    }

    componentDidUpdate(prevProps, prevStates){
        if(prevStates.avatar !== this.state.avatar) return null;
        this.loadingRegister(this.props.user.isLoading, this.props.user.isRegistered)
    }

    loadingRegister = (isLoading, isRegistered) => {
        // const {navigation, user} = this.props;
        if(!isLoading && isRegistered){
            window.alert('注册成功');
        }else if(!isLoading && !isRegistered && user.msg !==undefined){
            window.alert(user.msg);
            return this._renderForm();
        }else{
            return this._renderForm();
        }
        
    }

    pickAvatar = () => {
        ImgPicker.openPicker({
            multiple: false
        }).then(image => {
            let avatarContainer = {uri: image.path, type:'multipart/form-data', name: escape(image.path.slice(image.path.lastIndexOf('/')+1))};
            this.setState({isPicked: true, avatar: avatarContainer})
        })
    }

    _renderForm = () => {
        return (
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <TouchableOpacity
                            onPress={this.pickAvatar}
                            style={styles.IconContainer}>
                            {   this.state.isPicked ?
                                <Image
                                    source={{uri: this.state.avatar.uri}}
                                    style={styles.icon}
                                /> :
                               <Icon
                                    name={'user'}
                                    size={50}
                                    style={styles.icon}
                                /> 
                            } 
                            
                            {/* <TextInput
                                style={styles.textInput}
                            /> */}
                        </TouchableOpacity>
                        <View style={[styles.emailContainer,] }>
                            <TextInput 
                                style={styles.inputArea}
                                placeholder={'请输入邮箱'}
                                ref={(email) => this.email = email}
                                onChangeText={(val) => this.state.email=val }
                                />
                        </View>
                        <View style={styles.passContainer}>
                            <TextInput 
                                style={styles.inputArea}
                                placeholder={'请输入用户名'}
                                ref={(userName) => this.userName = userName}
                                onChangeText={(uName) => this.state.uName = uName }
                                />
                        </View>
                        <View style={styles.emailContainer}>
                                <Text style={styles.inputArea}>
                                    您的身份是?
                                </Text>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={{ height: 50, width: 100 }}
                                    onValueChange={(itemValue, itemIndex) => this.setState({identify: itemValue})}>
                                    <Picker.Item label="您的身份是"/>
                                    <Picker.Item label="企业用户" value="0" />
                                    <Picker.Item label="学生用户" value="1" />
                                </Picker>
                        </View>
                        <View style={styles.emailContainer}>
                            <TextInput 
                                style={styles.inputArea}
                                placeholder={'请输入密码'}
                                ref={(pass) => this.pass = pass}
                                onChangeText={(pass) => this.state.pass = pass }
                                />
                        </View>
                        <View style={styles.submitContainer}>
                            <Button
                                onPress={()=> this.submit()}
                                title={'注册'}
                                style={styles.button}
                            />
                        </View>
                    </View>
                </View>
        )
    }

    submit = () => {
        const {onRegister} = this.props;
        const formObj = {};
        // console.log(this.state.email);
        const {email, password, uName, identify, avatar} = this.state;
        formObj['name'] = uName.trim();
        formObj['email'] = email.trim();
        formObj['password'] = password.trim();
        formObj['identify'] = identify;
        formObj['avatar'] = avatar;
        if(!email){
            window.alert('请输入邮箱');
            return
        }else if(!password){
            window.alert('请输入密码');
            return;
        }else if(!avatar){
            window.alert('请选择用户头像');
            return;
        }else if(!identify){
            window.alert('请选择您的的身份')
        }
        onRegister(formObj);
    }

    render() {
        const {user} = this.props
        const {isLoading, isRegistered} = user;
        return (
                    <ImageBackground 
                        source={require('../../../../img/backGround.jpg')}
                        style={styles.backGround}
                    >
                        <Spinner
                            visible={!isRegistered && isLoading}
                            textContent={'请稍等'}
                            cancelable={true}
                        />
                        {this._renderForm()}
                        {/* {this.loadingRegister(isLoading, isRegistered)} */}
                    </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    onRegister: (formData) => dispatch(actions.onRegister(formData))
})

export default wrappedRegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

const styles = StyleSheet.create({
    backGround: {
        width: '100%', 
        height: '100%'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconContainer: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        marginBottom: 5
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        height:60,
        width: 60,
        borderRadius: 50,
        alignSelf: 'center'
    }, 
    inputArea: {
        flex: 1
    },  
    inputContainer: {
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },  
    formContainer: {
        backgroundColor: '#6A6A6A',
        opacity: 0.6,
        height: 280,
        width: 300,
        paddingBottom: 0 
    },
    emailContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    passContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    submitContainer: {
        flex: 1,
    },
    button: {
        flex: 1,
        borderRadius: 50
    },
    registerContainer: {
        height: 20,
        width: 300,
        height: 10
    },
    register: {
        color: 'transparent',
    }
})