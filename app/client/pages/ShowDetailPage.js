import React, {Component, PureComponent} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity, FlatList, PixelRatio, Text, RefreshControl, Image, TextInput} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux';

import actions from '../action/index';
import NavigationBar from '../commons/NavigationBar';
import ShowCell from '../commons/ShowCell';
import CommentItem from '../commons/CommentItem';
import Loading from '../commons/Loading';

import HTMLView from 'react-native-htmlview'; 

const URL = 'http://119.23.227.22:3303'
export  class ShowDetailsPage extends Component {
    constructor(props){
        super(props)
        this.state={
            commentsLoaded: false,
            commentContent: '',
            commentsArr: []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.showWorks.comments.data){
            // console.log(nextProps.showWorks.comments)
            return{
                commentsLoaded: nextProps.showWorks.loadComment,
                commentsArr: nextProps.showWorks.comments.data
            }
        }
        return null;
    }
    
    componentDidMount(){
        const {user} = this.props;
        let avatar;
        if(user.isLogin){
            avatar = user.user.avatar;
            Image.prefetch(avatar)
        }        
        this.loadComment();
        
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.commentContent !== nextState.commentContent){
            return false;
        }else{
            return true;
        }
    }

    componentDidUpdate(prevProps, prevState){
        // if(prevProps.showWorks.comments.length !==this.props.showWorks.comments.length || prevProps.showWorks.loadComment !==this.props.showWorks.loadComment){
        //     this.setState({
        //         commentsLoaded: true,
        //         comments: this.props.showWorks.comments
        //     })
        // }
    }

    loadComment = () => {
        const {navigation, onLoadComments} = this.props;
        const workId = navigation.getParam('item')._id;
        // console.log(workId)
        onLoadComments(URL, workId);
    }
    _onPress = () => {

    }

    goBack = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    _renderCommentItem = ({item}) => {
        return <CommentItem
            data = {item}
        />
    }

    _renderCommentList = (data, loadComment) => {
        return (
                    <View style={{flex: 1}}>
                        {loadComment ? <Loading/> :
                        <View style={styles.sectionSpacing}>
                        <View style={styles.separator} />
                        <Text style={styles.heading}>评论</Text>
                        <View style={styles.separator} />
                        {/* {console.log(data)} */}
                        <FlatList
                            // ref="commentsView"
                            data={data}
                            renderItem={this._renderCommentItem}
                            keyExtractor={(item) => `${item._id}`}
                            ItemSeparatorComponent={() => <View style={{
                                height: 1,
                                backgroundColor: '#D6D6D6'//`'rgba(0, 0, 0, 0.1)'//
                            }}/>}
                            refreshControl={
                                <RefreshControl
                                    title={'loading'}
                                    refreshing ={loadComment}
                                    onRefresh= {() => this.loadComment()}
                                />
                            } 
                            removeClippedSubviews={false}
                        />
                    </View>
                    }

                    </View>
                
                )
    }

    pushComment = (userId, workId) => {
        const {onPushComment, user} = this.props;
        if(user.isLogin && user.user){
            let pushContent = {};

            onPushComment(userId, workId);
        }
        window.alert('请先登录')
    }

    renderLeftButton = () => {
        return <TouchableOpacity
            onPress={() => {
                this.goBack()
            }}
        >
            <View style={{padding: 5, marginLeft: 8}}>
                <AntIcon
                    name={"arrowleft"}
                    size={24}
                    style={{
                        marginLeft: 8,
                        alignSelf: 'center',
                    }}/>
            </View>
        </TouchableOpacity>
    }

    render(){
        const {navigation, showWorks, user} = this.props;
        const {commentsArr, commentsLoaded} = this.state;
        const {getParam} = navigation;
        const {comments, loadComment} = showWorks;
        let avatar = user.isLogin ? user.user.avatar : '';
        // console.log(comment)
        const ItemData = getParam('item');
        let uID = user.isLogin ? user.user._id : '';
        let wID = ItemData._id;
        let navigationBar = <NavigationBar
                                leftButton={this.renderLeftButton()}
                                title={'展示详情'}
                                />;
        // console.log(ItemData.title)
        return (
            <View style={{flex: 1}}>
                {navigationBar}
                    <View style={styles.scrollViewContainer}>
                        <ScrollView style={styles.scrollViewContainer}>
                            <ShowCell
                                data={ItemData}
                            />
                            <View style={styles.detail_container}>
                                <HTMLView
                                    value={ItemData.description}
                                />
                            </View>
                            <View style={styles.comment_container}>
                                {this._renderCommentList(commentsArr, commentsLoaded) }
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.chat_container}>
                        <View style={{flex: 1, flexDirection: 'column' }}>
                            <Image
                                source={user.isLogin ? {uri: avatar} : require('../../../img/AuthorAvatar.png')}
                                style={styles.avatar}
                            />
                        </View>

                        <View style={{flex: 8, flexDirection: 'column', marginLeft: 10}}>
                            <TextInput
                                style={styles.input_container}
                                placeholder={'请输入您的评论'}
                                onChangeText={(text) => this.setState({commentContent: text})}
                            />
                            
                        </View>

                        <TouchableOpacity 
                            style={styles.icon_container}
                            onPress={() => this.pushComment(uID, wID)}    
                        >
                            <FontIcon
                                    name={'send'}
                                    size={24}
                                    style={{
                                        alignSelf: 'flex-end',
                                    }}
                                />
                        </TouchableOpacity>
                    </View>
                {/* </View> */}
            </View>
                
            )
    }
}

const mapStateToProps = (state) => ({
    showWorks: state.showWorks,
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    onLoadComments: (url, workId) => dispatch(actions.onLoadComments(url, workId)),
    onPushComment: (userId, workId) => dispatch(actions.onPushComment(userId, workId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailsPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F4F4F4',
      },
      detail_container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 10,
        // borderBottomWidth: 0.5,
      },
      scrollViewContainer: {
        flex: 0.95
      },
      comment_container: {
        marginLeft: 10
      },
      chat_container: {
        flex: 0.05,
        flexDirection: 'row',
        padding: 20,
        paddingTop: 10,
      },
      input_container: {
        backgroundColor: '#F4F4F4',
        borderRadius: 20,
        padding: 5,
        height: 40
      },
      icon_container: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 5
      },    
      sectionSpacing: {
        marginTop: 20
      },
      separator: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",//'#D6D6D6',//
        height: 1 / PixelRatio.get(),
        marginVertical: 10,
      },
      heading: {
        fontWeight: "700",
        fontSize: 16
      },
      avatar: {
        width: 36,
        height: 36,
        borderRadius: 20,
        
    },
})