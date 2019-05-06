import React, { Component } from 'react';
import { Image, StyleSheet, PixelRatio, Text, TouchableHighlight, View, } from 'react-native';
import HTMLView from 'react-native-htmlview';

export default class CommentItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      comments: {}
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
      if(nextProps.data){
        return {
          comments: nextProps.data
        }
      }
  }

  render() {
    // const {avatar, commentDetail, author} = this.props;
    const {avatar, commentDetail, author} = this.state.comments;
    // console.log(this.props.data, avatar, commentDetail, author)
    return <View>
              <TouchableHighlight onPress={()=>null}
                underlayColor={"#f3f3f3"}>
                <View>
                  <View style={styles.commentContent}>
                    <Image source={{uri: avatar.avatar}}
                      style={styles.avatar} />
                    <View style={styles.commentBody}>
                      <Text style={styles.userName}>
                        {author.name}
                      </Text>
                      <View style={styles.commentText}>
                        <HTMLView value={commentDetail} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.cellBorder} />
                </View>
              </TouchableHighlight>
            </View>;
  }
}

const styles = StyleSheet.create({
  commentContent: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  userName: {
    fontWeight: "700"
  },
  commentBody: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  commentText: {
    flex: 1,
    flexDirection: "row"
  },
  cellBorder: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    // Trick to get the thinest line the device can display
    height: 1 / PixelRatio.get(),
    marginLeft: 4,
  },
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10
  }
})