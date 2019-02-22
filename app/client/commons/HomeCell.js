import  React, {Component}  from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import HTMLView from 'react-native-htmlview'

const ScreenWidth = Dimensions.get('window');

export default class HomeCell extends Component{
    constructor(props){
        super(props)
        console.disableYellowBox = true;
    }


    render(){

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress = {this.props.onPress}
                >
                    <View style={styles.cell_container}>
                        <View style={styles.description_container}>
                            <HTMLView
                                value={this.props.data.title}
                                stylesheet={{
                                    p: styles.description,
                                    a: styles.description
                                }}
                            />
                        </View>
                        <View >
                            <Image 
                                source={{uri: this.props.data.images.hidpi}}
                                style={{
                                    height: 400,
                                    width: ScreenWidth.width,
                                    alignItems: 'center',
                                    resizeMode: 'contain'
                                }}
                            /> 
                        </View>
                    </View> 
                </TouchableOpacity>
            </View>
        )     
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    cell_container: {
        backgroundColor: 'white',
    },
    description_container: {
            flex: 1,
            padding: 5,
            fontSize: 56
    },
    img_container: {
        flex: 1
    }
})