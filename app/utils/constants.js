import { Dimensions } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_SCALE = Dimensions.get('window').scale;

export const DEFAULT_WINDOW_MULTIPLIER = 0.50;
export const DEFAULT_NAVBAR_HEIGHT = 65;

export const USER = {
  name: 'Katy Friedson',
  title: 'Engineering Manager',
  image: 'http://i.imgur.com/uma9OfG.jpg',
};

export const FACEBOOK_LIST = [
  {
    title: '关于我',
    icon: 'people'
  },
  {
    title: '我的项目',
    icon: 'ondemand-video'
  },
  {
    title: '我的收藏',
    icon: 'favorite'
  },
  {
    title: '通知',
    icon: 'notifications'
  },
  // {
  //   title: 'Games',
  //   icon: 'videogame-asset'
  // },
];

export const SLACK_LIST = [
  {
    title: 'Activity',
    icon: 'bookmark-border'
  },
  {
    title: 'Notifications',
    icon: 'notifications-none'
  },
  {
    title: 'Starred Items',
    icon: 'star-border'
  },
  {
    title: 'Your Files',
    icon: 'cloud-queue'
  },
];

export const GENERIC_LIST = [
  {
    title: 'Edit Profile',
    icon: 'person'
  },
  {
    title: 'Change Password',
    icon: 'fingerprint'
  },
  {
    title: 'Settings',
    icon: 'settings'
  },
  {
    title: 'History',
    icon: 'history'
  },
  {
    title: 'Help',
    icon: 'help'
  },
];
