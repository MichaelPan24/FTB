import {handleFormData} from '../../utils/handleForm';

const URL = "http://192.168.1.102:3301";
export default class User{
    constructor(formBody){
        this.formBody = formBody;
    }

    login(){
        return new Promise((resolve, reject) => {
            handleFormData(this.formBody, URL+'/api/user/login', {credentials: 'include', headers: {'Content-Type': 'application/json'}, body:JSON.stringify(this.formBody)} )
            .then(response => {
                if(response.ok){
                    resolve(response.json());
                }else if(!response.ok && response.status === 400){
                    reject('密码错误')
                }else if(!response.ok && response.status === 404){
                    reject('用户不存在')
                }
            }).catch(err => reject(err))
        })
    }

    register(){
        return new Promise((resolve, reject) => {
            handleFormData(this.formBody, URL+'/api/user/register', {credentials: 'include', headers: {'Content-Type': 'application/json'},body:JSON.stringify(this.formBody)})
            .then(response => {
                if(response.ok){
                    resolve(response.json());
                }else{
                    reject({status: response.status, msg: response.json()})
                }
            }).catch(err => reject(err))
        })
    }

    logOut(){
        return new Promise((resolve, reject) => {
            handleFormData(this.formBody, URL+'/api/user/logout', {method: 'get',  body: null, credentials: 'include'})
                .then(response => {
                    if(response.ok){
                        resolve('已登出')
                    }
                }).catch(err => reject(err))
        })
    }

    /**
     * 
     * @param {String} userId get请求中 URl的参数,传入用户的id
     * @param {String} identify  get请求中的 URL的参数, 传入用户身份
     */
    getProject(userId, identify){
        return new Promise((resolve, reject) => {
            handleFormData(null, `${URL}/api/user/${userId}/${identify}/projects`, {method: 'get', body: null, credentials: 'include'})
                .then(response => {
                    if(response.ok){
                        resolve(response.json())
                    }
                }).catch(err => reject(err))  
        })
    }
    /**
     * 
     * @param {String} userId   get请求中 URL参数, 传入用户的id 
     * @param {String} type     get请求中 URL参数, 传入用户收藏的类型
     */
    getFavorite(userId, type){
        return new Promise((resolve, reject) => {
            handleFormData(null, `${URL}/api/user/${userId}/favorite/${type}`)
                .then(response => {
                    if(response.ok){
                        resolve(response.json())
                    }
                }).catch(err => reject(err))
        })
    }
}
       