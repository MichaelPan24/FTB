import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, ListView, Dimension, Modal} from 'react-native';
import Icon from 'react-native-vector-icons';
import api from '../../apis/api';

import getImage from '../../apis/getImage';
import HTML from 'react-native-htmlview';
import ParallaxView from 'react-native-parallax-view';

import ShotDetails from './ShotDetails';
import ShotCell from './ShotCell';
import Loading from './Loading'

var screen = Dimension.get('window')

export default class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            isLoading: true,
            dataSource: new ListView.DataSource({
                
            })
        }
    }
}