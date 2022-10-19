import { useEffect, useState } from "react";
import { TimelineWrapper } from "../styles";
import Header from "../common/Header";
import Post from "./Post";
import { getPosts } from "../services/axios";

const Timeline = () => {
  const [posts, setPosts] = useState()
  const [error, setError] = useState(false)

  useEffect(() => {
      getPosts()
        .then(({ data }) => setPosts(data))
        .catch(err => {
          console.error(err)
          setError(true)
        })

  }, [])

  return (
    <>
        <Header />
        <TimelineWrapper>
            <h2>timeline</h2>
            {!posts && !error && 'Loading'}
            {posts?.length > 0 && posts.map((post, index) => <Post key={index} post={post} />)}
            {posts?.length === 0 && 'No posts yet'}
            {error && 'An error occured while trying to fetch the posts, please refresh the page'}
        </TimelineWrapper>
    </>
  )
}

export default Timeline