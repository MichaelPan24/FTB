import {AsyncStorage} from 'react-native';
const FAVORITE_KEY_PREFIX = 'favorite_';
export default class FavoriteDao {
    constructor(flag){
        this.favoriteKey = FAVORITE_KEY_PREFIX + flag;
    }

    saveFavoriteItem(key, value, )
}