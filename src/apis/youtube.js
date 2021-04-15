import axios from "axios";

const KEY = 'AIzaSyAhRMJtD7R9Pj4Ced_iWWhARcYJ-Slxids';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY,
    }
});