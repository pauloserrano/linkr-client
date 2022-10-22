import { useEffect, useState } from "react";
import { TimelineWrapper } from "../styles";
import { getPosts } from "../services/axios";
import Header from "../common/Header";
import Feed from "../common/Feed";

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
            <Feed>
              <Feed.Title>timeline</Feed.Title>
              {!posts && !error && 'Loading'}
              {posts?.length === 0 && 'No posts yet'}
              {error && 'An error occured while trying to fetch the posts, please refresh the page'}
              {posts?.length > 0 && posts.map((post, index) => <Feed.Post key={index} post={post} />)}
            </Feed>
        </TimelineWrapper>
    </>
  )
}

export default Timeline