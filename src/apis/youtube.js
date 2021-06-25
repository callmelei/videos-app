import axios from 'axios';

const KEY = 'AIzaSyBHpsLR0au-V4MibDPlN3-ibN-zjB6SoL8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});