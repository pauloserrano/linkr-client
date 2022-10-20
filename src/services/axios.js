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

export { login, signUp };