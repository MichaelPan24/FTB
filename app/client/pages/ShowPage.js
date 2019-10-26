import React, {Component} from 'react';
import {View, StyleSheet, FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-easy-toast';

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
        SplashScreen.hide();
        this.loadData();
        // console.log(this.cell.state)
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextProps.user.isLogin !== this.props.user.isLogin){
    //         return true;
    //     }
    // }
    componentDidUpdate(prevProps, prevState){
        if((prevProps.user.isLiked !== this.props.user.isLiked) && this.props.user.isLiked){
            this.refs.toast.show('操作成功', 200)
        }
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
                ref={(cell) => this.cell = cell}
                // key={`${item._id.toString()}`}
            />
        )
        
    }

    addNewShow = () => {
        const {navigation} = this.props;
        navigation.navigate('newShow');
    }

    renderRightButton = () => {
        return <TouchableOpacity
                onPress={() => {
                this.addNewShow()
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
        // console.log(showWorks)
        return (
            <View style={{flex: 1}}>
                {navigationBar}
                <View style={styles.container}>
                    <FlatList
                        data={showWorks.data}
                        renderItem={this._renderItem}
                        keyExtractor={(item) => `${item._id.toString()}`}
                        refreshControl={
                            <RefreshControl
                                title={'loading'}
                                refreshing ={showWorks.isLoading}
                                onRefresh= {() => this.loadData()}
                            />
                        }             
                        removeClippedSubviews={false}
                    />
                </View>
                <Toast ref="toast"/>
            </View>
            
        )
    }
}

//将state 映射到 props中
const mapStateToProps = (state) => ({
    showWorks: state.showWorks,
    user: state.user
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

