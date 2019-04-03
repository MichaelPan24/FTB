import {handleFormData} from '../../utils/handleForm';

const URL = "http://125.220.218.237:3301";
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
            handleFormData(this.formBody, URL+'/api/user/logout', {method: 'get', headers: null, body: null, credentials: 'include'})
                .then(response => {
                    if(response.ok){
                        resolve('已登出')
                    }
                }).catch(err => reject(err))
        })
    }
}