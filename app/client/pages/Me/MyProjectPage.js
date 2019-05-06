import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import actions from '../../action/index';
import Icon from 'react-native-vector-icons/AntDesign';

import UserItem from '../../commons/UserItem';

export class MyProjectPage extends Component{
    constructor(props){
        super(props);
        this.state={
            isManage: false
        }
    }

    conditionComponent = (isTouched, component) => {
        if(isManage){
           
        }
    }

    _onPress = () => {
        this.setState((prevState, props) => {
            return {
                isManage: ! prevState.isManage
            }
        })
    }
    
    render(){
        const {user, onGetProject, onRemoveProject} = this.props;
        return (
            <UserItem
                type={'getProject'}
                onGetProject={onGetProject}
                onRemoveProject={onRemoveProject}
                NavigationTitle={'我发布的项目'}
                isManage={this.state.isManage}
            />
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