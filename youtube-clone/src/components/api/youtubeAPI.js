import axios from 'axios';

const youtubeAPI = axios.create({
    baseURL: "https://www.googleapis.com/",
    params: {
        key: 'AIzaSyDCUz8-Wv6l4ukLbLZbTZPo6pn9rVXWd1s'
    }
})

export default youtubeAPI;