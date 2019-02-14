//标签导航栏配置
import {createBottomTabNavigator} from 'react-navigation'

import ShotList from './components/ShotList';
import Player from './components/Player';
import ShotDetails from './components/ShotDetails'

createBottomTabNavigator({
    Home: {
        screen: ShotList,
        navigationOptions: (navigation) => {
            title: '需求'
        } 
    },
    Player: {
        screen: Player
    },
    ShotDetails: {
        screen: ShotDetails
    }
})