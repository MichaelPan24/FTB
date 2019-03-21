import React, {Component} from 'react';
import {View, StyleSheet, FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import actions from '../action';

import NavigationBar from '../commons/NavigationBar';
import ShowCell from '../commons/ShowCell';



const URL = 'user/shots';
const type = 'show';
export  class ShowPage extends Component {
    constructor(props){
        super(props)
        console.disableYellowBox = true
    }

    componentDidMount(){
        this.loadData();
    }

    //刷新数据
    loadData = () => {
        const {onRefreshShowWorks} = this.props;
        onRefreshShowWorks(URL, type);
    }

    _onPress = (item) => {
        const  {navigation} = this.props;
        navigation.navigate('ShowDetail',{name:'项目', item})
    }

    _renderItem = ({item}) => {
        return(
            <ShowCell
                data = {item}
                onPress = {() => (this._onPress(item))}
            />
        )
        
    }

    renderRightButton = () => {
        return <TouchableOpacity
            onPress={() => {
                
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
        const statusBar = {
            barStyle: 'light-content',
        };
        let navigationBar = <NavigationBar
            title={'展示'}
            statusBar={statusBar}
            rightButton={this.renderRightButton()}
        />;
        const {showWorks} = this.props
        console.log(showWorks)
        return (
            <View style={{flex: 1}}>
                {navigationBar}
                <View style={styles.container}>
                    <FlatList
                        data={showWorks.data}
                        renderItem={this._renderItem}
                        keyExtractor={(item) => `${item.id}`}
                        refreshControl={
                            <RefreshControl
                                title={'loading'}
                                titleColor={'yellow'}
                                refreshing ={showWorks.isLoading}
                            />
                        }             
                    />
                </View>
            </View>
            
        )
    }
}

//将state 映射到 props中
const mapStateToProps = (state) => ({
    showWorks: state.showWorks
});

//将dispatch 映射到 props中
const mapDispatchToProps = (dispatch) => ({
    onRefreshShowWorks: (url, type) => dispatch(actions.onRefreshShowWorks(url,type))
});

export default WrappedShowPage =  connect(mapStateToProps, mapDispatchToProps)(ShowPage);
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
      },
})

