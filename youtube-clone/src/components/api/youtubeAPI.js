import axios from 'axios';

const youtubeAPI = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        key: 'AIzaSyDCUz8-Wv6l4ukLbLZbTZPo6pn9rVXWd1s'
    },
    headers: {'Access-Control-Allow-Origin': '*'}
})

export default youtubeAPI;