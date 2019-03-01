const API_URL = "https://api.dribbble.com/v2/",
    ACCESS_TOKEN = "9f061d26c5a8be96b17a81718959a67dd54ca9669ca41752777193f7cc5be7c3";

const User = 'user',
    shots = '/shots';


function fetchData(URL) {
    return fetch(URL, {
        headers: {
            "Authorization": "Bearer " + ACCESS_TOKEN
        }
    }).then((response) => response.json())
}

export default {
      //获取所有用户的作品
      getUsersShots: (type=(User+shots)) => {
        const URL = API_URL + type
        return fetchData(URL)
      },
      //获取具体的用户作品
      getExactShots: (type=shots,id) => {
        const URL = API_URL + type + `:${id}`
        return fetchData(URL)
      },
      getResources: function(url) {
        return fetchData(url);
      } 
};