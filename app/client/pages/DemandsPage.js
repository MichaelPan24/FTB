import React, {Component} from 'react';
import {View, StyleSheet, FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import  Icon from 'react-native-vector-icons/AntDesign'
import Toast from 'react-native-easy-toast';

import NavigationBar from '../commons/NavigationBar';
import DemandCell from '../commons/DemandCell';

import actions from '../action';
import { stat } from 'react-native-fs';

const URL = "http://119.23.227.22:3303/";
// const URL = "http://192.168.1.105:3301";
const type = 'demands';
let count = 0;

export class InfoPage extends Component {
    constructor(props){
        super(props);
        this.dialog = null;
    }

    componentDidMount(){
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState){
        if((prevProps.user.isLiked !== this.props.user.isLiked) && this.props.user.isLiked){
            this.refs.toast.show('操作成功', 200)
        }
    }

    //加载数据
    loadData = () => {
        const {onRefreshDemands} = this.props;
        onRefreshDemands(URL, type);
    }

    _onPress = (item) => {
        const {navigation} = this.props;
        navigation.navigate('DemandsDetail', {info:'需求', data: item})
    }

    _renderItem = ({item}) => {
        return(
            <DemandCell
                data = {item}
                onPress = {() => this._onPress(item)}
            />
        )
    }
    //方案一: 使用model弹出建立新需求
    // renderDialog = () => {
    //     return <Dialog
    //                 ref = {dialog => this.dialog = dialog}
    //             />
    // }

    //方案二: 直接跳转至新需求页面
    addNewDemand = () => {
        const {navigation} = this.props;
        navigation.navigate('newDemand')
    }

    renderRightButton = () => {
        return <TouchableOpacity
                    onPress={() => {
                        this.addNewDemand()
                        // this.dialog.show()
                                    }}  
                >
            <View style={{padding: 5, marginRight: 8}}>
                <Icon
                    name={"pluscircle"}
                    size={24}
                    style={{
                        marginRight: 8,
                        alignSelf: 'center',
                        // color: 'white',
                    }}/>
            </View>
        </TouchableOpacity>
    }

    render(){
        const {demands} = this.props;
        const statusBar = {
            barStyle: 'light-content',
        };
        // console.log(demands)
        let navigationBar = <NavigationBar
                                title={'热门需求'}
                                statusBar={statusBar}
                                rightButton={this.renderRightButton()}
                            />;
        return (
            <View style={{flex: 1}}>
                {navigationBar}
                <View style={styles.container}>
                    <FlatList
                        data={demands.data}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) =>`${item._id.toString()}`}
                        refreshControl={
                            <RefreshControl
                                title={'loading'}
                                refreshing={demands.isLoading}
                                onRefresh={() => this.loadData()}
                            />
                        }
                    />
                 </View>
                 <Toast ref="toast"/>
            </View>
        )
    }
}

//将state 映射到 props中
const mapStateToProps = (state) => ({
    demands: state.demands,
    user: state.user
})

//将dispatch 映射到 props中
const mapDispatchToProps = (dispatch) => ({
    onRefreshDemands: (url, type) => dispatch(actions.onRefreshDemands(url, type))
})

export default wrappedDemandsPage = connect(mapStateToProps, mapDispatchToProps)(InfoPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
      },
})