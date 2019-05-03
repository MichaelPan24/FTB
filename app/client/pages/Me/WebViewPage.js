import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import WebView from 'react-native-webview';
import Icon from 'react-native-vector-icons/AntDesign';

import BackPressComponent from "../../commons/BackPressComponent";
import SafeAreaViewPlus from "../../commons/SafeAreaViewPlus";
import NavigationBar from '../../commons/NavigationBar';

export default class WebViewPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.navigation.getParam('url'),
            canGoBack: false,
            title: this.props.title,
        }
        this.backPress = new BackPressComponent({backPress: () => this.onBackPress()});
    }

    componentDidMount() {
        this.backPress.componentDidMount();
    }

    componentWillUnmount() {
        this.backPress.componentWillUnmount();
    }

    onBackPress() {
        this.onBack();
        return true;
    }

    onBack(e) {
        if (this.state.canGoBack) {
            this.WEBVIEW_REF.goBack();
        } else {
            this.props.navigation.pop();
        }
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack,
            url: navState.url,
        });
    }

    renderLeftButton = () => {
        return <TouchableOpacity
            onPress={() => {
                this.onBackPress()
            }}
        >
            <View style={{padding: 5, marginLeft: 8}}>
                <Icon
                    name={"arrowleft"}
                    size={24}
                    style={{
                        marginLeft: 8,
                        alignSelf: 'center',
                    }}/>
            </View>
        </TouchableOpacity>
    }

    render() {
        const {navigation} = this.props;
        const statusBar = {
            barStyle: 'light-content'
        };
        let navigationBar = <NavigationBar
            title={'关于我'}
            statusBar={statusBar}
            leftButton={this.renderLeftButton()}
        />
        return (
            <SafeAreaViewPlus style={{flex: 1}}>
                {navigationBar}
                <WebView
                    ref={ref => (this.WEBVIEW_REF=ref)}
                    startInLoadingState={true}
                    onNavigationStateChange={(e)=>this.onNavigationStateChange(e)}
                    source={{uri: this.state.url}}/>
            </SafeAreaViewPlus>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
})
