import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from "../common/Header";
import { TimelineWrapper } from "../styles";
import Feed from "../common/Feed";
import { getPostsUserId } from "../services/axios";




export default function UserPage(){
        
    const {userId} = useParams()
    const [posts, setPosts] = useState()
    const [name, setName] = useState("")
    const [error, setError] = useState(false)

    const updatePosts = () => {
        getPostsUserId (userId)
        .then(({ data }) => {
            setPosts(data.postArray)
            setName(data.userName)
        })
        .catch(err => {
          console.error(err)
          setError(true)
        })
    }
    console.log(name)
    useEffect(() => updatePosts(), [])

    return(


        <>
            <Header />
            <TimelineWrapper>

                <Feed>
                <Feed.Title>{(name === undefined ? (""):(name + "'s posts"))}</Feed.Title>
                <Feed.Status loading={posts} error={error} />
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
