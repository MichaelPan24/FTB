import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import actions from '../../action/index';

import User from '../../dao/User';
import NavigationBar from '../../commons/NavigationBar';
import DemandCell from '../../commons/DemandCell';
import ShowCell from '../../commons/ShowCell';

export class MyProjectPage extends Component{
    constructor(props){
        super(props);
        this.state={
            userData: {}
        }
    }

   loadData = () => {
       const {user, onGetProject} = this.props;
       return user.user && onGetProject(user.user._id, user.identify)
   }
    componentDidMount(){
        this.loadData();
    }

    /**
     * @param {String} 根据身份来选择渲染的是需求列表还是作品列表 
     */
    renderList = (user) => {
        return (
            <View style={styles.container}>
                <FlatList
                    data={user.uploaded}
                    renderItem={user.identify==='0' ? this._renderDemandItem : this._renderWorkItem}
                    keyExtractor={(item, index) =>`${index}`}
                    refreshControl={
                        <RefreshControl
                            title={'请稍等'}
                            refreshing={user.isLoading}
                            onRefresh={() => this.loadData()}
                        />
                    }

                />
            </View>
        )
    }

    _renderDemandItem = ({item}) => {
        return(
            <DemandCell
                data = {item}
                onPress = {() => this._onPress(item)}
            />
        )
    }

    _renderWorkItem = ({item}) => {
        return (
            <ShowCell
                data={item}
                onPress={() => this._onPress(item)}
            />
        )
    }

    _onPress = () => {

    }
    

    /**
     *  @param {Object} user 检验是否登录
     * 如果登录则向用户展示发布列表,否则引导进入登录页
     */
    checkIsLogin = (user) => {
        if(user.user) return this.renderList(user);
        return window.alert('请先登录');
    }

    renderRightButton = () => {
        return <Text onPress={this.onManage} style={styles.manage}>
            管理
        </Text>
    }

    onManage = () => {

    }

    render(){
        const statusBar = {
            barStyle: 'light-content',
        };
        let navigationBar = <NavigationBar
            title={'我发布的项目/需求'}
            statusBar={statusBar}
            rightButton={this.renderRightButton()}
        />;
        const {user} = this.props;
        return (
            <View style={{flex: 1}}>
                {navigationBar}
                {this.checkIsLogin(user)}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    onGetProject: (userId, identify) => dispatch(actions.onGetProject(userId, identify)),
    onRemoveProject: (userId, identify, projectId) => dispatch(actions.onRemoveProject(userId, identify, projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyProjectPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
      },
      manage: {
          marginRight: 15
      }
})