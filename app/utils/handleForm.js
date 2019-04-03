//表单域处理
export function handleFormData(formObj, url, init={}){
    let formData = new FormData();
    for(let key in formObj){
        formData.append(key, formObj[key]);
    }
    return fetch(url, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        method: 'post',
        body: formData,
        ...init
        })
}