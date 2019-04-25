import {handleFormData} from '../../utils/handleForm';

const URL = "http://119.23.227.22:3303";
export default class User{
    constructor(formBody){
        this.formBody = formBody;
    }

    /**
     * 登陆操作
     */
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

    /**
     * 注册操作
     */
    register(){
        return new Promise((resolve, reject) => {
            handleFormData(this.formBody, URL+'/api/user/register', {credentials: 'include', headers: {'Content-Type': 'application/json'},body:JSON.stringify(this.formBody)})
            .then(response => {
                if(response.ok){
                    resolve(response.json());
                }else if(!response.ok && response.status === 400){
                    reject('邮箱已被注册')
                }
            }).catch(err => reject(err))
        })
    }

    /**
     * 登出操作
     */
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
     * 获取用户发布的需求或是作品列表
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
     * 获取用户收藏的需求或者是作品列表
     * @param {String} userId   get请求中 URL参数, 传入用户的id 
     * @param {String} type     get请求中 URL参数, 传入用户收藏的类型
     */
    getFavorite(userId, type){
        return new Promise((resolve, reject) => {
            handleFormData(null, `${URL}/api/user/${userId}/favorite/${type}`, {method: 'get', body: null, credentials: 'include'})
                .then(response => {
                    if(response.ok){
                        resolve(response.json())
                    }
                }).catch(err => reject(err))
        })
    }

    /**
     * 更新用户个人基本信息
     * @param {String} userId 
     */
    updateUserInfo(userId){
        return new Promise((resolve, reject) => {
            handleFormData(this.formBody, `${URL}/api/user/update/${userId}`, {method: 'put', credentials: 'include'})
                .then(response => {
                    if(response.ok){
                        resolve(response.json());
                    }
                }).catch(err => reject(err))
        })
    }

    /**
     * 移除发布项目或是收藏项目
     * @param {String} userId 
     * @param {String} removeType 
     * @param {String} projectId 
     */
    RemoveProject(userId, removeType){
        return new Promise((resolve, reject) => {
            handleFormData(this.formBody, `${URL}/api/user/${userId}/remove/${removeType}`, {method:'put', credentials: 'include'})
                .then(response => {
                    if(response.ok){
                        resolve(response.json())
                    }
                }).catch(err => reject(err))
        })
    }
}
       