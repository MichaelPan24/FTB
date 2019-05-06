import fetch from 'cross-fetch';

const API_URL = "https://api.dribbble.com/v2/",
    ACCESS_TOKEN = "9f061d26c5a8be96b17a81718959a67dd54ca9669ca41752777193f7cc5be7c3";

const getURL = "http://119.23.227.22:3303";
// const getURL = "http://192.168.1.105:3301"; 

const User = 'user',
    shots = '/shots';


async function fetchData(URL) {
    const response = await fetch(URL, {
    headers: {
      "Authorization": "Bearer " + ACCESS_TOKEN
    }
  });
  return await response.json();
}

async function getDemands(URL= getURL) {
    const response = await fetch(URL, { mode: 'cors', credentials: 'include' });
  if (response.ok)
    return response.json();
}

async function getWorks() {
  // const URL = API_URL + type;
  // return fetchData(URL);
  const URL = getURL + '/api/show/current'
  const response = await fetch(URL, { mode: 'cors', credentials: 'include' });
  if (response.ok)
    return response.json();
}

async function getComments(URL=getURL, workId){
  const url = URL + `/api/show/comment/${workId}`
  const response = await fetch(url, {mode: 'cors', credentials: 'include'})
  if(response.ok)
    return response.json()
}
//获取具体的用户作品
// function getExactShots(type=shots,id) {
//   const URL = API_URL + type + `:${id}`;
//   return fetchData(URL);
// }

export default {
      //根据类型获得所需资源
      getResources: function(url, type, workId='') {
        if (type ==='show'){
          return getWorks(url);
        } else if (type === 'demands') {
          return getDemands(url);
        }else if(type === 'comments'){
          return getComments(url, workId);
        }
      } 
};