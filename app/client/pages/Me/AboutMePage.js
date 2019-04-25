import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, ScrollView, Text} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scrollview';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import config from '../../../utils/config.json' ;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class AboutMePage extends Component{
    constructor(props){
        super(props);
        this.state={
            data: config,
            showBlog: false,
            showWebsite: false,
            showSponsor: false,
            showContact: false
        }
    }

    renderItem = (title, icon, checked) => {
        return (
            <ListItem
                leftIcon={{name: icon}}
                rightIcon={{name: checked? 'expand-less' : 'expand-more'}}
                title={title}
                onPress={() => this.onPress(title)}
            />
        )
    }

    /**
     *  @param {Array} items 要显示的栏目的子信息数组
     */
    renderItemDetail = (items) => {
       return items.map((item, index) => (
            <ListItem
                key={index}
                title={item.title}
            />
        ))
    }

    onPress = (title) => {
       const { showBlog, showWebsite, showSponsor, showContact} = this.state;
        switch(title){
            case '技术博客':
                this.setState({showBlog: !showBlog});
                break;
            case '我的网站':
                this.setState({showWebsite: !showWebsite});
                break;
            case '赞助本项目':
                this.setState({showSponsor: !showSponsor});
                break;
            case '联系我':
                this.setState({showContact: !showContact});
                break;
        }
    }
    render(){
        const {data, showBlog, showWebsite, showSponsor, showContact} = this.state;
        return (
            <ParallaxScrollView
                windowHeight={SCREEN_HEIGHT * 0.4}
                backgroundSource={require('../../../../img/Me.jpg')}
                navBarTitle='潘阳'
                userName='潘阳'
                userTitle='软件工程师'
                userImage='http://i.imgur.com/RQ1iLOs.jpg'
                // leftIcon={{name: 'arrowleft', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
                // rightIcon={{name: 'user', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
                >
                <ScrollView style={{flex: 1}}>
                    <List>
                        {this.renderItem(data.aboutMe.Blog.name, data.aboutMe.Blog.icon, showBlog)}
                        {this.state.showBlog ? this.renderItemDetail(data.aboutMe.Blog.items) : null}
                       
                        {this.renderItem(data.aboutMe.Website.name, data.aboutMe.Website.icon, showWebsite)}
                        {this.state.showWebsite ? this.renderItemDetail(data.aboutMe.Website.items) : null}
                        
                        {this.renderItem(data.aboutMe.Sponsor.name, data.aboutMe.Sponsor.icon, showSponsor)}
                        {this.state.showSponsor ? this.renderItemDetail(data.aboutMe.Sponsor.items) : null}
                        
                        {this.renderItem(data.aboutMe.Contact.name, data.aboutMe.Contact.icon, showContact)}
                        {this.state.showContact ? this.renderItemDetail(data.aboutMe.Contact.items) : null}
                    </List>
                </ScrollView>
            </ParallaxScrollView>
        )
    }
}