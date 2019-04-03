import React, {Component} from 'react';
import {Dimensions, View, Text, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { Icon, List, ListItem } from 'react-native-elements';

import actions from '../action/index';

import ParallaxScrollView from '../commons/ParallaxScrollView';
import {FACEBOOK_LIST, SLACK_LIST} from '../../utils/constants';
const SCREEN_HEIGHT = Dimensions.get('window').height
export class MyPage extends Component {
    constructor(props){
        super(props)
    }

    _toggleLogin = (isLogin) => {
        const {navigation, onLogout} = this.props;
        return function(){
          if(!isLogin){
            navigation.navigate('Login')
            }else{
              onLogout();
            }
        }
        
    }

    onPressItem(title){
      const {navigation} = this.props;
      const {navigate} = navigation;
      switch(title){
        case '关于我':
          navigate('AboutMe');
        case '我的项目':
          navigate('MyProject');
        case '收藏':
          navigate('Favorite');
        case '通知':
          navigate('Notification')
        // case '修改个人信息':
        //   navigate();
      }
    }

    

    render(){
        const {user} = this.props;
        const {isLogin, isLoading} = user;
        return (
          <View style={{flex: 1}}>
            <Spinner
              visible={isLoading}
              textContent={'请稍等...'}
            />
            <ParallaxScrollView
                windowHeight={SCREEN_HEIGHT * 0.4}
                backgroundSource={require('../../../img/backGround.jpg')}
                navBarTitle='Michael Pan'
                userName={isLogin? user.name: null}
                userTitle={isLogin? user.identify==='0'? '企业用户': '个人用户': null}
                userImage = {require('../../../img/userAvatar.jpg')}
                // userImage='http://i.imgur.com/RQ1iLOs.jpg'  //会在以后根据需要考虑增添用户头像
            >
                  <View style={styles.listView}>
                    <List>
                    {
                      FACEBOOK_LIST.map((item, index) => (
                        <ListItem
                          key={index}
                          onPress={() => this.onPressItem(item.title)}
                          title={item.title}
                          leftIcon={{name: item.icon}} />
                      ))
                    }
                    </List>
                    
                    <List>
                    {
                      SLACK_LIST.map((item, index) => (
                        <ListItem
                          key={index}
                          onPress={() => this.onPressItem(item.title)}
                          title={item.title}
                          leftIcon={{name: item.icon}} />
                      ))
                    }
                    </List>

                    <List containerStyle={{marginBottom: 15}}>
                      <ListItem
                        key={1}
                        hideChevron={true}
                        onPress={this._toggleLogin(isLogin)}
                        title={this.isLogin?'登出': '登入'}
                        titleStyle={styles.logoutText}
                        icon={{name: ''}} />
                    </List>
                  </View>  
            </ParallaxScrollView>
          </View>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(actions.onLogout())
})

export default wrappedMyPage = connect(mapStateToProps, mapDispatchToProps)(MyPage);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent'
  },  
  listView: {
    backgroundColor: 'rgba(247,247, 250, 1)'
  }, 
  logoutText: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
