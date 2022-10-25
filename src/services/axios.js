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

const endSession = async () => {
    return api.patch('/logout', {}, { headers: {
        Authorization: `Bearer ${localStorage.getItem("refreshToken")}`
    }})
}

const getUser = async () => {
    return api.get('/user', { headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }})
};

const getPosts = async () => {
    return api.get('/timeline')
}

const getLikes = async (postId) => {
    return api.get(`/likeamount/${postId}`)
}

const insertLike = async (postId) => {
    return api.post(`/like/${postId}`)
}

const deleteLike = async (postId) => {
    return api.delete(`/like/${postId}`)
}

const getHashtagsRanking = async () => {
    return api.get('ranking/hashtag')
}
const getPostsHashtag = async (hashtag) => {
    return api.get(`/search/hashtag/${hashtag}`)
}
const getPostsUserId = async (userId) => {
    return api.get(`/user/${userId}`)
}

const setPost = async ({ link, body }) => {
    return api.post('/post', 
        { link, body }, 
        { headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }}
    )
}

const deletePost = async ({ id }) => {
    return api.delete(`/post/${id}`, 
        { headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }}
    )
}

export { 
    login, 
    signUp, 
    endSession, 
    getPosts, 
    setPost, 
    deletePost, 
    getHashtagsRanking, 
    getPostsHashtag, 
    getLikes, 
    insertLike, 
    deleteLike, 
    getUser,
    getPostsUserId
};
