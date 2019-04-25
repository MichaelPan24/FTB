import {handleFormData} from '../../utils/handleForm';
/** 
 * 处理上传功能,将会被需求模块以及展示模块复用
 * @param identify 根据身份字段来判断是企业还是学生用户
 * @param handleFormData要上传的表单数据
 * 
*/
const URL = "http://119.23.227.22:3303"
export default class UploadNew{
    constructor(identify, formBody){
        this.identify = identify;
        this.formBody = formBody;
    }

    //根据字段选择远程上传的路径返回一个promise对象
    uploadData(){
        return this.identify === '0' ? this.addNewDemand() : this.addNewShow();
    }

    //企业用户上传需求
    addNewDemand(){
        return new Promise((resolve, reject) => {
            handleFormData(this.formBody, URL+'/api/project/upload', {credentials: 'include'})
                .then(response => {
                    console.log(response)
                    if(response.ok ){
                        resolve(response.json())
                    }else{
                        reject('上传失败');
                    }
                }).catch(err => reject(err))
        })
    }

    //学生用户上传作品
    addNewShow(){
        return new Promise((resolve, reject) => {
            handleFormData(this.formBody, URL +'/api/show/upload',{credentials: 'include'})
                .then(response => {
                    if(response.ok ){
                        resolve(response.json())
                    }else{
                        reject('上传失败');
                    }
                }).catch(err => reject(err))
        })
    }
}