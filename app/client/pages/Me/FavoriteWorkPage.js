import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import actions from '../../action/index';
import UserItem from '../../commons/UserItem';

export class FavoriteWorkPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {user, onGetFavorite, onRemoveProject} = this.props;
        return (
            <UserItem
                type={'getFav'}
                getFavType={'work'}
                // user={user}
                onGetFavorite={onGetFavorite}
                onRemoveProject={onRemoveProject}
                NavigationTitle={'我收藏的作品'}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    onGetFavorite: (userId, type) => dispatch(actions.onGetFavorite(userId, type)),
    onRemoveProject: (userId, identify, projectId) => dispatch(actions.onRemoveProject(userId, identify, projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteWorkPage);