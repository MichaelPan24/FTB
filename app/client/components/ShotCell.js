import React, {Component} from 'react';
import {Image, PixelRatio, StyleSheet, Text, TouchableHighlight, View, Dimensions} from 'react-native'
import getImage from '../../apis/getImage';

var screen = Dimensions.get('window');

export default class ShotCell extends Component {
    render(){
        return (
            <View>
                <TouchableHighlight onPress={this.props.onSelect}>
                    <View style={styles.row}>
                        <Image
                        source={getImage.shotImage(this.props.shot)}
                        style={styles.cellImage}
                        accessible={true}
                        />
                    </View>
                </TouchableHighlight>
                <View style={styles.cellBorder} />
            </View>
        )
    }

}

var styles = StyleSheet.create({
    textContainer: {
        flex: 1,
    },
    cellImage: {
        height: 300,
        width: screen.width,
        backgroundColor: "transparent",
        resizeMode: "cover"
    },
    cellBorder: {
        backgroundColor: "rgba(0,0,0,0.2)",
        height: 1 / PixelRatio.get(),
        marginLeft: 4,
    }, 
});
