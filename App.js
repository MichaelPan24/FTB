/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {FlatList,  StyleSheet, Text, View, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'

// var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

// // const instructions = Platform.select({
// //   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
// //   android:
// //     'Double tap R on your keyboard to reload,\n' +
// //     'Shake or press menu button for dev menu',
// // });

// // type Props = {};
// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.state= {
//       data: [],
//       loaded: false,
//     }
//     this.fetchData = this.fetchData.bind(this);
//   }

//   componentDidMount(){
//     this.fetchData()
//   }

//   fetchData(){
//     fetch(REQUEST_URL)
//     .then(response => response.json())
//     .then(responseData => {
//       this.setState({
//         data: this.state.data.concat(responseData.movies),
//         loaded: true,
//       })
//     })
//   }

  

//   render() {
//     if(! this.state.loaded){
//       return this.renderLoadingView()
//     }
//     return (
//       <FlatList
//         data={this.state.data}
//         renderItem={this.renderMovie}
//         style={styles.list}
//         keyExtractor={item => item.id}
//       />
//     )
//   }

//   renderLoadingView(){
//     return (
//       <View style={styles.container}>
//         <View>
//           <Text>
//             正在加载电影数据中s。。。。。
//           </Text>
//         </View>
        
//           <Icon name="heart-o" size={18} color="#fff"/>
//       </View>
//     )
//   }

//   renderMovie({item}){
//     return (
//       <View style={styles.container}>
//         <Image
//           source={{uri: item.posters.thumbnail}}
//           style={styles.thumbnail}
//         />
//         <View style={styles.rightContainer}>
//           <Text style={styles.title}> {item.title}</Text>
//           <Text style={styles.year}>{item.year}</Text>
//         </View>
//       </View>
//     )
//   }
// }

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({ Home: { screen: HomeScreen } }); 
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
