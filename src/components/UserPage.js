import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from "../common/Header";
import { TimelineWrapper } from "../styles";
import Feed from "../common/Feed";
import { getPostsUserId, getHashtagsRanking, insertFollow, getUser } from "../services/axios";
import HashtagTrending from "../common/hashtagsTrending";

export default function UserPage(){
        
    const {userId} = useParams()
    const [currentUser, setCurrentUser] = useState()
    const [posts, setPosts] = useState()
    const [follow, setFollow] = useState(false)
    const [name, setName] = useState("")
    const [user, setUser] = useState()
    const [hashtagList, setHashtagList] = useState([])
    const [error, setError] = useState(false)
    console.log(user)

    const updatePosts = () => {
        getPostsUserId (userId)
        .then(({ data }) => {
            setPosts(data.postArray)
            setName(data.userName)
            setUser(data)
        })
        .catch(err => {
          console.error(err)
          setError(true)
        })

        getHashtagsRanking()
        .then(({ data }) => setHashtagList(data))
        .catch(err => {
        console.error(err)
        })

        getUser()
        .then(({ data: { name, pictureUrl, id: userId} }) => setCurrentUser({ name, pictureUrl, userId }))
        .catch(console.error) 
    }

    function clicked (){
        
        insertFollow({followedId: userId})
            .then((res) => {
            setFollow(!follow)
            })
            .catch(err => {
            console.error(err)
        })
    }

    useEffect(() => updatePosts(), [])

    return(


        <>
            <Header />
            <TimelineWrapper>

                <Feed>
                <UserPageTittle><img src={user?.userPictureUrl}/><Feed.Title>{(name === undefined ? (""):(name + "'s posts"))}</Feed.Title></UserPageTittle>
                <Feed.Status loading={posts} error={error} />
                {posts?.length > 0 && posts.map((post, index) => (
                    <Feed.Post 
                    key={index} 
                    post={post} />
                ))}
                </Feed>
                <RigthSideContainer>
                    {(userId == currentUser?.userId) ? (<></>):(
                        <Follow onClick={() => clicked()} wasFollow={follow}>{
                            (follow) ? ("Unfollow"):("Follow")}
                        </Follow>
                    )}
                    <HashtagTrending hashtagList={hashtagList}/>
                </RigthSideContainer>
                

            </TimelineWrapper>
            
        </>
        
    )
}

const Follow = styled.div`
    width: 112px;
    height: 31px;

    margin:25px 0;

    color:${(props)=>props.wasFollow ? ("#1877F2"):("#FFFFFF")} !important;
    background: ${(props)=>props.wasFollow ? ("#FFFFFF"):("#1877F2")};

    font-weight: 700 !important;
    border-radius: 5px;

    display:flex;
    align-items:center;
    justify-content:center;

    font-family: 'Lato';
    font-style: normal;
    font-size: 14px;
    line-height: 17px;

    color: #FFFFFF;
`
const RigthSideContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
`
const UserPageTittle = styled.div`
    display:flex;
    justify-content:center;
    align-self:flex-start;

    img{
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50px;    
        margin: 0 18px;
    }
`

