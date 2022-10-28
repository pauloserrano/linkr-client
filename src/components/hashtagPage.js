import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../common/Header";
import Feed from "../common/Feed";
import { TimelineWrapper } from "../styles";
import { getPostsHashtag } from "../services/axios";
import useGlobalContext from "../hooks/useGlobalContext";


export default function HashtagPage(){
    const { hashtag } = useParams()
    const { follows } = useGlobalContext()
    const [posts, setPosts] = useState()
    const [error, setError] = useState(false)

    const updatePosts = () => {
        getPostsHashtag(hashtag)
            .then(({ data }) => setPosts(data))
            .catch(err => {
                console.error(err)
                setError(true)
            })
    }
    
    useEffect(updatePosts, [])

    return(
        <>
            <Header />
            <TimelineWrapper>
                <Feed>
                    <Feed.Title># {hashtag}</Feed.Title>
                    <Feed.Status follows={follows} posts={posts} error={error} />
                        {posts?.length > 0 && posts.map((post) => (
                            <Feed.Post 
                                key={`${post.id}${post.repostId}`} 
                                post={post} 
                            />
                        ))}
                    </Feed>
            </TimelineWrapper>
        </>
    )
}
