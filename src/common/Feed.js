import { Link } from "react-router-dom";
import { FeedWrapper } from "../styles";
import Post from "../components/Post";

const Feed = ({ children, ...otherProps }) => {
  return (
      <FeedWrapper {...otherProps}>
        {children}
      </FeedWrapper>
  )
}

Feed.Title = ({ children, ...otherProps }) => {
    return (<h2 {...otherProps}>{children}</h2>)
}

Feed.Post = ({ post, userId, handleDelete, ...otherProps }) => {
  return (
    <Post 
      post={post}
      userId={userId}
      handleDelete={() => handleDelete(post.id)}
      {...otherProps}
    />
  )
}

Feed.Status = ({ posts, error, follows }) => {
  return (
    <>
      {!follows && !posts && !error && 'Loading'}
      {follows?.length === 0 && "You don't follow anyone yet. Search for new friends!"}
      {follows?.length > 0 && posts?.length === 0 && 'No posts found from your friends'}
      {error && 'An error occured while trying to fetch the posts, please refresh the page'}
    </>
  )
}

export default Feed