import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Header from "../common/Header";
import { TimelineWrapper, NewPostWrapper } from "../styles";
import Feed from "../common/Feed";
import { getPostsHashtag, getUser } from "../services/axios";
import useGlobalContext from "../hooks/useGlobalContext";

export default function HashtagPage(){
        
    const {hashtag} = useParams()
    const [posts, setPosts] = useState()
    const [error, setError] = useState(false)
    const { user, setUser, follows } = useGlobalContext()


    const updatePosts = () => {
        getPostsHashtag (hashtag)
        .then(({ data }) => setPosts(data))
        .catch(err => {
          console.error(err)
          setError(true)
        })
        getUserData()
    }

    const getUserData = async () => {
        try {
          const { data: { name, pictureUrl, id: userId } } = await getUser()
          setUser({ name, pictureUrl, userId })
    
        } catch (error) {
          console.error(error)
        }
    }
    useEffect(() => updatePosts(), [])

    return(
        <>
            <Header />
            <TimelineWrapper>

                <Feed>
                <Feed.Title># {hashtag}</Feed.Title>
                <Feed.Status follows={follows} loading={posts} error={error} />
                {posts?.length > 0 && posts.map((post, index) => (
                    <Feed.Post 
                    key={index} 
                    post={post} />
                ))}
                </Feed>
            </TimelineWrapper>
            
        </>
        
    )
}

const Tittle = styled.div`
    width:100%;
    height: 61px;

    display:flex;
    align-items:center;
    p{
        font-weight:700;
        font-size:57px;
        font-family: 'Oswald';
        
        margin-left: 18px;
    }
`
