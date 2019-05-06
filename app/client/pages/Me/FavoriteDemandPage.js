import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux';

import actions from '../../action/index';
import DemandCell from '../../commons/DemandCell';
import ShowCell from '../../commons/ShowCell';
import NavigationBar from '../../commons/NavigationBar';
import UserItem from '../../commons/UserItem';

export  class FavoriteDemandPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { onGetFavorite, onRemoveProject} = this.props;
        return (
            <UserItem
                type={'getFav'}
                getFavType={'project'}
                onGetFavorite={onGetFavorite}
                onRemoveProject={onRemoveProject}
                NavigationTitle={'我收藏的需求'}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    onGetFavorite: (userId, type) => dispatch(actions.onGetFavorite(userId, type)),
    onRemoveProject: (userId, identify, projectId) => dispatch(actions.onRemoveProject(userId, identify, projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteDemandPage)

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