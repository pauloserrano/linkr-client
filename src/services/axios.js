import axios from "axios"

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URI || 'http://localhost:4000'
});

const login = ({ email, password }) => {
    return api.post('/login', { email, password });
};

const signUp = ({ email, password, name, pictureUrl }) => {
    return api.post('/signup', { email, password, name, pictureUrl });
};

const getPosts = async () => {
    return api.get('/timeline')
}

const getHashtagsRanking = async () => {
    return api.get('ranking/hashtag')
}
const getPostsHashtag = async (hashtag) => {
    return api.get(`/search/hashtag/${hashtag}`)
}

const setPost = async ({ link, body }) => {
    return api.post('/post', 
        { link, body }, 
        { headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }}
    )
}

export { login, signUp, getPosts, setPost, getHashtagsRanking, getPostsHashtag };
