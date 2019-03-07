import {AsyncStorage} from 'react-native';
import getResource from '../../utils/api';

export default class DataStore {
    /**
     * 获取数据,优先从本地获取,如果本地数据过期,则从服务器中获取
     * @param url<String> 
     * @return <Promise>
     */
    
    fetchData(url){
        return new Promise((resolve, reject) => {
            this.fetchLocalData(url).then((wrappedData) => {
                if(wrappedData && DataStore.checkTimeStampValid(wrappedData.timeStamp)){
                    resolve(wrappedData);
                }else{
                    this.fetchNetData(url).then((data) => {
                        resolve(this._wrapData(data));  
                    }).catch((e) => {
                        console.error(e)
                        reject(e);
                    })
                }
            }).catch(e => {
                this.fetchNetData(url).then(data => {
                    resolve(this._wrapData(data));
                }).catch(err => {
                    reject(err)
                })
            })
        })
    }

    /**
     * 获取网络数据
     */
    fetchNetData(url){
        return new Promise((resolve, reject) => {
            getResource.getUsersShots(url)
                .then((data) => {
                    if (data.length>0) {
                        return data;
                    }
                    throw new Error('Network problems');
                })
                .then((responseData) => {
                    this.saveData(url, responseData);
                    resolve(responseData);
                })
                .catch((e) => {
                    reject(e);
                })
        })
    }

    /**
     * 获取本地数据
     */
    fetchLocalData(url){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(url, (err, result) => {
                if (err) {
                    reject(err);
                    console.error(err);
                } else {
                    try {
                        resolve(JSON.parse(result));
                    } catch (e) {
                        reject(e);
                        console.error(e);
                    }
                }
            })
        })
    }

    /** 
     * 存取数据
    */
    saveData(url, data, callback){
        if (!url || !data) return 
        AsyncStorage.setItem(url, this._wrapData(data), callback)
    }

    /**
     * 包装数据,给数据打上时间戳
     */
    _wrapData(data){
        return {data: data, timeStamp: new Date().getTime()}
    }

    /**
     * 检验数据是否已经过期
     * @param timeStamp 项目更新时间
     * @return {boolean} true不需要更新 false需要更新
     */
    static checkTimeStampValid(timeStamp){
        const now = new Date();
        const target = new Date().setTime(timeStamp);
        if(now.getMonth() !== target.getMonth() || now.getDate() !== target.getDate() || now.getHours() - target.getHours() > 4) return false;
        return true
    }
}