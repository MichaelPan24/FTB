//表单域处理
export function handleFormData(formObj, url, init={}){
    let formData = new FormData();
    for(let key in formObj){
        if(key ==='image'){
            for(img of formObj[key]){
                formData.append(key, img)
            }
        }else{
            formData.append(key, formObj[key]);
        }
    }
    return fetch(url, {
        // headers: {
        //     'Content-Type': 'multipart/form-data;charset=utf-8'
        // },
        method: 'POST',
        body: formData,
        ...init
        })
}