import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, TextInput, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
// import Loading from '../../commons/Loading';

import actions from '../../action/index';

export class LoginPage extends Component{
    constructor(props){
        super(props);
        console.disableYellowBox = true;
        this.state={
            email: '',
            pass: '',
            isLoading: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.user.isLoading === prevState.isLoading){
            return null
        }
        return {
            isLoading: nextProps.user.isLoading,
            // isLogin: nextProps.user.isLogin
        }
    }
    /**
     * 登录提交
     */

     shouldComponentUpdate(nextProps, nextState){
        if(this.state.email !== nextState.email || this.state.pass !== nextState.pass){
            return false
        }else if(this.props.user.isLogin !== nextProps.user.isLogin || this.props.user.isLoading !== nextProps.user.isLoading){
            return true
        }else {
            return true
        }
        
     }

     componentDidUpdate(prevProps, prevStates){
        this.loadingLogin(this.props.user.isLoading, this.props.user.isLogin)
     }

    submit = () => {
        const {onLogin} = this.props;
        const formObj = {};
        console.log(this.state.email);
        const email = this.state.email.trim();
        const password = this.state.pass.trim();
        formObj['email'] = email;
        formObj['password'] = password;
        if(!email){
            window.alert('请输入邮箱');
            return
        }else if(!password){
            window.alert('请输入密码')
            return
        }
        onLogin(formObj);
    }

    _goRegister = () => {
        const {navigation} = this.props;
        return navigation.navigate('Register');
    }

    /**
     * 登录过程处理
     */
    loadingLogin = (isLoading, isLogin) => {
        const {navigation, user} = this.props;
        if(!isLoading && isLogin){
            //登陆成功导航到我的页面
            navigation.navigate('Me')
        }else if(!isLoading && !isLogin && user.msg !==undefined){
             window.alert(user.msg);
             return this._renderForm();
        }else{
            return this._renderForm();
        }
    }

    /**
     * 渲染表单
     */
    _renderForm = () => {
        return (<View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.emailContainer}>
                    <TextInput 
                        style={styles.email}
                        placeholder={'请输入邮箱'}
                        onChangeText={(email) => this.setState({email})}
                        // value={this.state.email}
                        />
                </View>
                <View style={styles.passContainer}>
                    <TextInput 
                        style={styles.pass}
                        placeholder={'请输入密码'}
                        onChangeText={(pass) => this.setState({pass})}
                        secureTextEntry={true}                        
                        />
                </View>
                <View style={styles.submitContainer}>
                    <Button
                        onPress={()=> this.submit()}
                        title={'登录'}
                        style={styles.button}
                    />
                </View>
            </View>
            <View style={styles.registerContainer}>
                <Button
                    title={'注册'}
                    color={styles.register.color}
                    onPress={this._goRegister}
                />
            </View>
        </View>)
    }

    render(){
        const {user} = this.props
        const {isLoading, isLogin} = user;
        return (
            <ImageBackground 
                source={require('../../../../img/backGround.jpg')}
                style={styles.backGround}
            >
            <Spinner
                visible={!isLogin && isLoading}
                textContent={'请稍等'}
                cancelable={true}
            />
                 {this._renderForm()}
                
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: formObj => dispatch(actions.onLogin(formObj))
});

export default wrappedLoginPage =  connect(mapStateToProps, mapDispatchToProps)(LoginPage);

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
    formContainer: {
        backgroundColor: '#6A6A6A',
        opacity: 0.6,
        height: 115,
        width: 300,
        paddingBottom: 0 
    },
    email: {
        flex: 1
    },
    pass: {
        flex: 1
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
    },
    register: {
        color: 'transparent',
    }
})