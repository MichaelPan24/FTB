import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, TextInput, Text, Button, Picker} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import Loading from '../../commons/Loading';
import actions from '../../action/index';
export class RegisterPage extends Component{
    constructor(props){
        super(props);
        console.disableYellowBox = false;
        this.state={
            email: '',
            pass: '',
            uName: '',
            identify: ''
        }
        console.disableYellowBox=true;
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.email !== nextState.email || this.state.pass !== nextState.pass || this.state.uName !== nextState.uName){
            return false;
        }else{
            return true;
        }

    }

    loadingRegister = (isLoading, isRegistered) => {
        const {navigation, user} = this.props;
        if(isLoading && !isRegistered){
            return <Spinner
                        textContent={'请稍等'}
                        visible={isLoading}
                        cancelable={true}
            />;
        }else if(!isLoading && isRegistered){
            window.alert('注册成功');
            //登陆成功导航到我的页面
            navigation.navigate('Login');
        }else if(!isLoading && !isRegistered ){
            if(user.status && user.status === 400){
                window.alert(user.msg);
                return this._renderForm();
            }
            return this._renderForm();
        }
    }

    _renderForm = () => {
        return (
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <View style={[styles.emailContainer,] }>
                            <TextInput 
                                style={styles.email}
                                placeholder={'请输入邮箱'}
                                ref={(email) => this.email = email}
                                onChangeText={(val) => this.state.email=val }
                                />
                        </View>
                        <View style={styles.passContainer}>
                            <TextInput 
                                style={styles.pass}
                                placeholder={'请输入用户名'}
                                ref={(userName) => this.userName = userName}
                                onChangeText={(uName) => this.state.uName = uName }
                                />
                        </View>
                        <View style={styles.emailContainer}>
                                <Text >
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
                                style={styles.email}
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
        console.log(this.state.email);
        const email = this.state.email.trim();
        const password = this.state.pass.trim();
        const uName = this.state.uName.trim();
        const identify = this.state.identify.trim();
        formObj['name'] = uName;
        formObj['email'] = email;
        formObj['password'] = password;
        formObj['identify'] = identify;
        if(!email){
            window.alert('请输入邮箱');
            return
        }else if(!password){
            window.alert('请输入密码')
            return
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
                        {this.loadingRegister(isLoading, isRegistered)}
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
    inputContainer: {
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },  
    formContainer: {
        backgroundColor: '#6A6A6A',
        opacity: 0.6,
        height: 200,
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