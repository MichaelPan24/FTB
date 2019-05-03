import React from 'react';
import {View, Modal, Text, TouchableHighlight} from 'react-native';

/**
 * 
 * @param {*} infoText  modal的提示信息
 * @param {} prop 决定model 提示信息是否可见的prop
 * @param {*} visibleState 影响modal 是否可见的state
 * @param {Object} context  上下文对象
 */
export function ModalView(infoText={}, prop, visibleState, context){
    return (
        <Modal
            animationType='slide'
            transparent={false}
            visible={visibleState}
            onRequestClose={()=>context.setState({visibleState: false})}
        >
                        <View style={{ marginTop: 22 }}>
                            <View>
                                <Text>{prop? infoText.success: infoText.fail}</Text>
                                <TouchableHighlight
                                    onPress={() => {
                                    context.setModalVisible(!context.state.visibleState);
                                    }}
                                >
                                    <Text>关闭</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
    )
}