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

const getLikes = async (postId) => {
    return api.get(`/likeamount/${postId}`,
    { headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }}
    )
}

const insertLike = async (postId) => {
    const body = {}
    return api.post(`/like/${postId}`,
    body,
    { headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }}
    )
}

const deleteLike = async (postId) => {
    return api.delete(`/like/${postId}`,
    { headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }}
    )
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

const followById = async (followedId) => {
    return api.get(`/follows/${followedId}`,
        { headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }}
    )
}

const insertFollow = async (body) => {
    return api.post('/follow', 
        body,
        { headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }}
    )
}

const deleteFollow = async (followedId) => {
    return api.delete(`/follow/${followedId}`, 
        { headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }}
    )
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

const updatePost = async ({ id, body }) => {
    return api.patch(`/post/${id}`,
        { body },
        { headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }}
    )
}

const getComments = async ({ id }) => {
    return api.get(`/post/${id}/comments`,
        { headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }}
    )
}

const setComment = async ({ id, body }) => {
    return api.post(`/post/${id}/comment`,
        { body },
        { headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }}
    )
}

export { 
    login, 
    signUp, 
    endSession,
    getUser,
    getUsers,
    getPosts, 
    setPost, 
    deletePost, 
    getHashtagsRanking, 
    getPostsHashtag, 
    getLikes, 
    insertLike, 
    deleteLike,
    getPostsUserId,
    updatePost,
    insertFollow,
    followById,
    deleteFollow,
    getComments,
    setComment
};
