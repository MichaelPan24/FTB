import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, Image, TouchableOpacity, Modal} from 'react-native';
import ImgPicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay';

import {ModalView} from '../../../utils/viewUtils';
import actions from '../../action/index';
import NavigationBar from '../../commons/NavigationBar';


export class MyInfoPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isPicked: false,
            avatar: {},
            uName: '',
            email: '',
            password: '',
            isInfoChanged: false
        }
    }

    static navigationOptions = ({navigation}) => {
        
    }

    shouldComponentUpdate(nextProps, nextStates){
        if(this.state.uName !== nextStates.uName || this.state.email !== nextStates.email || this.state.password !== nextStates.password){
            return false
        }else {
            return true
        }
    }

    pickAvatar = () => {
        ImgPicker.openPicker({
            multiple: false
        }).then(image => {
            // console.log(image)
            let avatarContainer = {uri: image.path, type:'multipart/form-data', name: escape(image.path.slice(image.path.lastIndexOf('/')+1))};
            this.setState({isPicked: true, avatar: avatarContainer }) 
        })
    }

    renderForm =() => {
        const {user, navigation} = this.props;
        if(user.isLogin){
            const {email ,avatar, name} = user.user;
            // console.log(this.state.avatar)
            return (
                <View style={styles.formContainer}>
                        <View style={styles.IconContainer}>
                            {
                                avatar  ?<TouchableOpacity
                                    onPress={this.pickAvatar}
                                >
                                    <Image
                                        source={this.state.isPicked? {uri: this.state.avatar.uri} :{uri: avatar}}
                                        style={styles.icon}
                                    />
                                </TouchableOpacity>  : <Icon
                                name={'user'}
                                size={50}
                                style={styles.icon}
                                onPress={this.pickAvatar}
                            />
                            }
                            
                            {/* <TextInput
                                style={styles.textInput}
                            /> */}
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.title}>用户名</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder={name}
                                onChangeText={(uName) => this.setState({uName: uName})}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.title}>邮箱</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder={email}
                                onChangeText={(email) => this.setState({email: email})}
                            />
                        </View>
                </View>)
        }else{
            navigation.push('Login');
            return;
        }
    }

    renderRightButton = () => {
        return <Text onPress={this.submitChange} style={styles.submit}>
            提交
        </Text>
    }

    submitChange= () => {
        const {user, onUpdateUserInfo} = this.props;
        const {isLogin} = user;
        const {uName, email, password, avatar} = this.state;
        const form = {}
        if(!uName){
            window.alert('请输入用户名');
            return;
        }else{
            form['name'] = uName;
            if(email) form['email'] = email;
            if(password) form['password'] = password;
            if(avatar) form['avatar'] = avatar;
            onUpdateUserInfo(user.user._id, form) && this.setState({isInfoChanged: true})
        }
    }
    

    render(){
        const {user}= this.props
        const statusBar = {
            barStyle: 'light-content',
        }
        let navigationBar = <NavigationBar
            title={'我的资料'}
            statusBar={statusBar}
            rightButton={this.renderRightButton()}
        />
        return (
            <View style={{flex: 1 }}>
                <Spinner
                    visible={user.isLoading}
                    textContent={'请稍等'}
                    cancelable={true}
                />
                {navigationBar}
                {ModalView({success: '更改信息成功', fail: '更改信息失败'}, user.isInfoChanged, this.state.isInfoChanged, this)}
                <View style={styles.container}>
                    {this.renderForm()}
                </View>
               
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    onUpdateUserInfo: (userId, formData) => dispatch(actions.onUpdateUserInfo(userId, formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyInfoPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F4F4F4',
        alignItems: 'center'
    },
    IconContainer: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        marginTop: 5
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        // flex: 1,
        marginLeft: 5,
        padding: 10
    },
    textInput: {
        marginLeft: 5,
        // borderBottomWidth: 1,
        // flex: 1,
        width: 280,
        height: 40,
        backgroundColor: '#F4F4F4',
        borderRadius: 20,
        marginBottom: 5,
        paddingLeft: 15
    },
    icon: {
        backgroundColor: '#F4F4F4',
        height:60,
        width: 60,
        borderRadius: 50,
        alignSelf: 'center'
    }, 
    submit: {
        marginRight: 15
    },
    formContainer: {
        // flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        width: 300,
        height: 300,
        justifyContent: 'space-around',
        borderRadius: 10
        // backgroundColor: ''
    }
})