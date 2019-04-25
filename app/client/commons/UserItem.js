import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, RefreshControl} from 'react-native';
import PropType from 'prop-types';

import actions from '../action/index';
import NavigationBar from '../commons/NavigationBar';
import DemandCell from '../commons/DemandCell';
import ShowCell from '../commons/ShowCell';

export default class UserItem extends Component{
    constructor(props){
        super(props);
    }

    static propTypes = {
        type: PropType.string.isRequired, //根据类型来决定是做何种操作(getProject, getFav)
        getFavType: PropType.string, //根据字段来请求收藏的需求或是作品列表(project, work)
        user: PropType.object.isRequired,   //需要传入user state
        onGetProject: PropType.func,    //获取发布项目的action
        onGetFavorite: PropType.func,   //获取收藏项目的action
        onRemoveProject: PropType.func,     //移除项目的action
        NavigationTitle: PropType.string.isRequired     //用于配置导航栏标题
    }
   loadData = () => {
       const {user, onGetProject, onGetFavorite, getFavType, type} = this.props;
       if(type === 'getProject')return user.user && onGetProject(user.user._id, user.identify)
       return user.user && onGetFavorite(user.user._id, getFavType)
   }
    componentDidMount(){
        this.loadData();
    }

    /**
     * 根据条件来决定列表数据来源, 来自发布的项目数据或是收藏数据
     */
    renderData = (user, type) => {
        const {getFavType} = this.props;
        if(type === 'getProject') return user.uploaded;
        if(type === 'getFav'){
            if(getFavType === 'project') return user.favorite.demands;
            return user.favorite.works
        }
    }

    /**
     * @param {String} 根据身份来选择渲染的是需求列表还是作品列表 
     */
    renderList = (user, type) => {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.renderData(user, type)}
                    renderItem={user.identify==='0' ? this._renderDemandItem : this._renderWorkItem}
                    keyExtractor={(item, index) =>`${item._id.toString()}`}
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

    /**
     * 根据条件(数据来源, 收藏类别)来设置列表中item
     */
    _renderItem = (user, type) => {
        if(type === 'getProject')   return this.renderProjectItem(user);
        if(type === 'getFav')   return this.renderFavItem(user)
    }

    /**
     * 得到发布的项目
     */
    renderProjectItem = (user) => {
      return  user.identify ==='0' ? this._renderDemandItem : this._renderWorkItem
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

    renderFavItem = () => {
        const {getFavType} = this.props;
        return getFavType === 'project' ? this._renderDemandItem : this._renderWorkItem;
    }


    _onPress = () => {

    }
    

    /**
     *  @param {Object} user 检验是否登录
     * 如果登录则向用户展示发布列表,否则引导进入登录页
     */
    checkIsLogin = (user, type) => {
        if(user.user) return this.renderList(user, type);
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
            title={this.props.NavigationTitle}
            statusBar={statusBar}
            rightButton={this.renderRightButton()}
        />;
        const {user, type} = this.props;
        return (
            <View style={{flex: 1}}>
                {navigationBar}
                {this.checkIsLogin(user, type)}
            </View>
        )
    }
}


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