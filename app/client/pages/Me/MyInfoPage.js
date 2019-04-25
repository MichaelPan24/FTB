import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, Image} from 'react-native';
import ImgPicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux'

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
            password: ''
        }
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
            let avatarContainer = {uri: image.path, type:'multipart/form-data', name: escape(img.path.slice(img.path.lastIndexOf('/')+1))}
            image ? this.setState({isPicked: true, avatar: Object.assign(this.state.avatar, image)}) : this.state
        })
    }

    renderForm =() => {
        const {user, navigation} = this.props;
        user.isLogin ? {email, avatar,name} = user.user : navigation.navigate('Login');
        return (
        <View style={styles.formContainer}>
                <View style={styles.IconContainer}>
                    {
                        avatar !== undefined ? <Image
                            source={{uri: avatar}}
                            style={styles.icon}
                            onPress={this.pickAvatar}
                        /> : <Icon
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
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>邮箱</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder={email}
                    />
                </View>
        </View>)
    }

    renderRightButton = () => {
        return <Text onPress={this.submitChange} style={styles.submit}>
            提交
        </Text>
    }

    submitChange= () => {
        const {user, onUpdateUserInfo} = this.props;
        const {isLogin} = user;
        const {uName, email, password} = this.state;
        const form = {}
        
    }
    

    render(){
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
                {navigationBar}
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
        textAlign: 'center'
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