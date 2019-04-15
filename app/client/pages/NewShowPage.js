import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import actions from '../action/index';
import BaseAddItem from '../commons/BaseAddItem';

export class NewShowPage extends Component{
    constructor(props){
        super(props)
    }
    
    checkIdentify = ({identify}) => {
        if(identify === '0') return window.alert('只有个人用户可以进行作品展示哦');
    }

    render(){
        const {user, onUploadNew, navigation} = this.props;
        return(
            // <View>
                <BaseAddItem
                    checkIdentify={() => this.checkIdentify(user)}
                    user={user}
                    onUploadNew={onUploadNew}
                    identify={'1'}
                    navigation={navigation}
                />
            // </View>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    onUploadNew: (identify, form) => dispatch(actions.onUploadNew(identify, form))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewShowPage);

const styles = StyleSheet.create({

})