import React, {Component} from 'react'
import {Modal, Text, TouchableOpacity, StyleSheet, View, DeviceInfo} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

import AddItem from '../models/addItem';


    export default class Dialog extends Component {
    state = {
        visible: false,
    };

    show() {
        this.setState({
            visible: true,
        })
    }

    dismiss() {
        this.setState({
            visible: false,
        })
    }

    render() {
        const {onClose, onSelect} = this.props;
        return (<Modal
                animationType={'fade'}
                transparent={true}
                visible={this.state.visible}
                onRequestClose={() => onClose}
            >
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => this.dismiss()}
                >
                    {/* <Icon
                        name={'caretdown'}
                        size={26}
                        style={styles.arrow}
                    /> */}
                    <View style={styles.content}>
                        <Text>发布新需求</Text>
                    </View>
                </TouchableOpacity>
            </Modal>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        alignItems: 'flex-end',
        paddingTop: DeviceInfo.isIPhoneX_deprecated ? 30 : 0
    },
    arrow: {
        marginTop: 40,
        color: 'white',
        padding: 0,
        margin: -15,
        marginRight: 10
    },
    content: {
        backgroundColor: 'white',
        borderRadius: 3,
        paddingTop: 3,
        paddingBottom: 3,
        marginRight: 3,
    },
    text_container: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: '400',
        padding: 8,
        paddingLeft: 26,
        paddingRight: 26
    },
    line: {
        height: 0.3,
        backgroundColor: 'darkgray',
    },
});
