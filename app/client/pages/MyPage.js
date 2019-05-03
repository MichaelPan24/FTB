import React, {Component} from 'react';
import {Dimensions, View, Text, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { List, ListItem } from 'react-native-elements';

import actions from '../action/index';

import ParallaxScrollView from '../commons/ParallaxScrollView';
import {MY_PROJECT_LIST, MY_FAVORITE_LIST} from '../../utils/constants';
const SCREEN_HEIGHT = Dimensions.get('window').height
export class MyPage extends Component {
    constructor(props){
        super(props)
        console.disableYellowBox=true;
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
      const {navigation, user} = this.props;
      const {navigate} = navigation;
      switch(title){
        case '关于本项目':
          navigate('AboutMe');
          break;
        case '我发布的项目/需求':
          navigate('MyProject',{user: user.user || undefined, identify: user.identify});
          break;
        case '通知':
          navigate('Notification');
          break;
        case '收藏的需求':
          navigate('FavoriteDemand');
          break;
        case '喜欢的作品':
          navigate('FavoriteWork');
          break;
        case '我的资料':
          navigate('MyInfo');
          break;
      }
    }

    

    render(){
        const {user} = this.props;
        const {isLogin, isLoading} = user;
        return (
          <View style={{flex: 1}}>
            <Spinner
              visible={!isLogin && isLoading}
              textContent={'请稍等...'}
              cancelable={true}
            />
            <ParallaxScrollView
                windowHeight={SCREEN_HEIGHT * 0.4}
                backgroundSource={require('../../../img/backGround.jpg')}
                navBarTitle='Michael Pan'
                userName={(isLogin && user.user)? user.user.name: null}
                userTitle={isLogin? user.identify==='0'? '企业用户': '个人用户': null}
                userImage = {(user.isLogin && user.user) ? {uri: user.user.avatar} : require('../../../img/userAvatar.jpg')}
                // userImage='http://i.imgur.com/RQ1iLOs.jpg'  //会在以后根据需要考虑增添用户头像
            >
                  <View style={styles.listView}>
                    <List>
                    {
                      MY_PROJECT_LIST.map((item, index) => (
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
                      MY_FAVORITE_LIST.map((item, index) => (
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
                        title={isLogin?'登出': '登入'}
                        titleStyle={styles.logoutText}
                        />
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
