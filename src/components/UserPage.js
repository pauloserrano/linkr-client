import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from "../common/Header";
import { TimelineWrapper } from "../styles";
import Feed from "../common/Feed";
import { getPostsUserId, getHashtagsRanking, insertFollow, getUser, followById, deleteFollow, getAllFollowed } from "../services/axios";
import HashtagTrending from "../common/hashtagsTrending";
import useGlobalContext from "../hooks/useGlobalContext"


export default function UserPage(){
        
    const {userId} = useParams()
    const { user, setUser } = useGlobalContext()
    const [currentUser, setCurrentUser] = useState()
    const [forceRefresh, setForceRefresh] = useState(false)
    const { follows, setFollows } = useGlobalContext()


    const [follow, setFollow] = useState(false)
    const [hashtagList, setHashtagList] = useState([])
    const [error, setError] = useState(false)

    const [awaitResponse, setAwaitResponse] = useState(false)

    const updatePosts = () => {
        getPostsUserId (userId)
        .then(({ data }) => {
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
        .catch((err) => console.error(err))

        followById(userId)
        .then((res) => {
           setFollow(res.data)
        })
        .catch((err) => console.error(err))
    }

    const getFollowsData = async () => {
        try {
          const { data: followed } = await getAllFollowed()
          setFollows(followed)
    
        } catch (error) {
          console.error(error)
        }
    }

    function clicked (){

        setAwaitResponse(true)

        if (follow) {
            deleteFollow(userId)
            .then((res) => {

                setFollow(!follow)   
                setAwaitResponse(false) 
                getFollowsData()

            })
            .catch(err => {

                alert("Aconteceu um erro inesperado, por favor tente novamente em instantes")
                console.error(err)
                setAwaitResponse(false)
                setForceRefresh(!forceRefresh)
            })
        } else {
            insertFollow({followedId: userId})
            .then((res) => {

                setFollow(!follow)
                setAwaitResponse(false)
                getFollowsData()
            })
            .catch(err => {

            alert("Aconteceu um erro inesperado, por favor tente novamente em instantes")
            console.error(err)
            setAwaitResponse(false)
            setForceRefresh(!forceRefresh)
            })
        }   
    }

    useEffect(() => updatePosts(), [forceRefresh])

    return(


        <>
            <Header />
            <TimelineWrapper>

                <Feed>

                <UserPageTittle>
                    <img src={user?.userPictureUrl}/><Feed.Title>{(user?.userName === undefined ? (""):(user?.userName + "'s posts"))}
                    </Feed.Title>
                </UserPageTittle>
                
                <Feed.Status loading={user?.postArray} error={error} />
                {user?.postArray?.length > 0 && user?.postArray.map((post, index) => (
                    <Feed.Post 
                    key={index} 
                    post={post} />
                ))}
                </Feed>
                <RigthSideContainer>
                    {(userId == currentUser?.userId) ? (<></>):(
                        <Follow onClick={() => clicked()} wasFollow={follow} awaitResponse={awaitResponse}>{
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

    opacity:${(props) => props.awaitResponse ? (0.7):(1)};

    margin:25px 0;

    pointer-events: ${(props) => props.awaitResponse ? ("none"):("auto")};

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
    cursor: pointer;
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

