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
};

const getUser = async () => {
    return api.get('/user', { headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }})
};

const getUsers = async namePart => {
    return api.get(`/users/?namePart=${namePart}`, { headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }});
};

const getPosts = async () => {
    return api.get('/timeline')
}

const setPost = async ({ link, body }) => {
    return api.post('/post', 
        { link, body }, 
        { headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }}
    )
}

export { login, signUp, endSession, getUser, getUsers, getPosts, setPost };
