import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:5000'
})


const getPosts = async () => {
    return api.get('/timeline')
}

export { getPosts }