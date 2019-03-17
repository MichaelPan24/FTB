import React, {Component} from 'react';
import {View, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux';

import DemandCell from '../commons/DemandCell';

import actions from '../action';

const URL = "http://192.168.1.104:3301/";
const type = 'demands';

export class InfoPage extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.loadData();
    }
    //加载数据
    loadData = () => {
        const {onRefreshDemands} = this.props;
        onRefreshDemands(URL, type);
    }

    _onPress = (item) => {
        const {navigation} = this.props;
        navigation.navigate('DemandsDetail', {info:'需求', item})
    }

    _renderItem = ({item}) => {
        return(
            <DemandCell
                data = {item}
                onPress = {() => this._onPress(item)}
            />
        )
    }

    render(){
        const {demands} = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    data={demands.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item) => `${item.id}`}
                    refreshControl={
                        <RefreshControl
                            title={'loading'}
                            refreshing={demands.isLoading}
                        />
                    }
                />
            </View>
        )
    }
}

//将state 映射到 props中
const mapStateToProps = (state) => ({
    demands: state.demands
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