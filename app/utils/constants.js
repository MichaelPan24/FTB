import { Dimensions } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_SCALE = Dimensions.get('window').scale;

export const DEFAULT_WINDOW_MULTIPLIER = 0.50;
export const DEFAULT_NAVBAR_HEIGHT = 65;

export const USER = {
  name: '请登录',
  title: '',
  image: 'http://i.imgur.com/uma9OfG.jpg',
};

export const MY_PROJECT_LIST = [
  {
    title: '关于本项目',
    icon: 'people'
  },
  {
    title: '我发布的项目/需求',
    icon: 'ondemand-video'
  },
  // {
  //   title: '我的收藏',
  //   icon: 'favorite'
  // },
  {
    title: '通知',
    icon: 'notifications'
  },
  // {
  //   title: 'Games',
  //   icon: 'videogame-asset'
  // },
];

export const MY_FAVORITE_LIST = [
  {
    title: '收藏的需求',
    icon: 'bookmark-border'
  },
  {
    title: '喜欢的作品',
    icon: 'favorite'
  },
  // {
  //   title: 'Starred Items',
  //   icon: 'star-border'
  // },
  {
    title: '我的资料',
    icon: 'assignment-ind'
  },
];

