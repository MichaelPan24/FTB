import {handleFormData} from '../../utils/handleForm';
/** 
 * 处理上传功能,将会被需求模块以及展示模块复用
 * @param identify 根据身份字段来判断是企业还是学生用户
 * @param handleFormData要上传的表单数据
 * 
*/
const URL = "http://192.168.1.103:3301"
export default class UploadNew{
    constructor(identify, formBody){
        this.identify = identify;
        this.formBody = formBody;
    }

    //根据字段选择远程上传的路径返回一个promise对象
    uploadData(){
        const uploadData = this.identify === '0' ? this.addNewDemand(this.formBody) : this.addNewShow(this.formBody);
        return uploadData;
    }

    //企业用户上传需求
    addNewDemand(formObj){
        return new Promise((resolve, reject) => {
            handleFormData(formObj, URL +'/api/project/upload')
                .then(response => {
                    if(response.ok && response.status ===200){
                        resolve(response.json())
                    }else{
                        reject('上传失败');
                    }
                }).catch(err => reject(err))
        })
    }

    //学生用户上传作品
    addNewShow(formObj){
        return new Promise((resolve, reject) => {
            handleFormData(formObj, URL +'/api/project/upload')
                .then(response => {
                    if(response.ok && response.status ===200){
                        resolve('上传成功!')
                    }else{
                        reject('上传失败');
                    }
                }).catch(err => reject(err))
        })
    }
}