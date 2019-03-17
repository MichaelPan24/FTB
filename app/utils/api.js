const API_URL = "https://api.dribbble.com/v2/",
    ACCESS_TOKEN = "9f061d26c5a8be96b17a81718959a67dd54ca9669ca41752777193f7cc5be7c3";

const LocalURL = "http://192.168.1.104:3301/";

const User = 'user',
    shots = '/shots';


function fetchData(URL) {
    return fetch(URL, {
        headers: {
            "Authorization": "Bearer " + ACCESS_TOKEN
        }
    }).then((response) => response.json())
}

function getDemands(URL= LocalURL) {
    return fetch(URL)
      .then(data => data.json())
}

function getUsersShots(type=(User+shots)) {
  const URL = API_URL + type;
  return fetchData(URL);
}

//获取具体的用户作品
function getExactShots(type=shots,id) {
  const URL = API_URL + type + `:${id}`;
  return fetchData(URL);
}

export default {
      //根据类型获得所需资源
      getResources: function(url, type) {
        if (type ==='show'){
          return getUsersShots(url);
        } else if (type === 'demands') {
          return getDemands(url);
        }
      } 
};