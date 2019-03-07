import React, {Component} from 'react';
import {View, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux';

import actions from '../action';



import ShowCell from '../commons/ShowCell';


// import getResource from '../../utils/api';

const URL = 'user/shots';

export  class ShowPage extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     dataResource: []
        // }

        console.disableYellowBox = true
    }

    componentDidMount(){
        // this.fetchData()
        this.loadData();
    }

    //刷新数据
    loadData = () => {
        const {onRefreshShowWorks} = this.props;
        onRefreshShowWorks(URL);
    }

    // fetchData = () => {
    //     getResource.getUsersShots().then(data => {
    //         if(data.length> 0){
    //             this.setState( {dataResource: this.state.dataResource.concat(data)})
    //         }
    //     })
    // }

    _onPress = (item) => {
        const  {navigation} = this.props;
        navigation.navigate('ShowDetails',{name:'项目', item})
    }

    _renderItem = ({item}) => {
        return(
            <ShowCell
                data = {item}
                onPress = {() => (this._onPress(item))}

            />
        )
        
    }

    render(){
        let {showWorks} = this.props
        console.log(showWorks)
        return (
            <View style={styles.container}>
                    <FlatList
                        data={showWorks.items[0]}
                        renderItem={this._renderItem}
                        keyExtractor={(item) => `${item.id}`}
                        refreshControl={
                            <RefreshControl
                                title={'loading'}
                                titleColor={'yellow'}
                            />
                        }             
                    />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    showWorks: state.showWorks
});

const mapDispatchToProps = (dispatch) => ({
    onRefreshShowWorks: (url) => dispatch(actions.onRefreshShowWorks(url))
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

