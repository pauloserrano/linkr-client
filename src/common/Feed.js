import { FaTrash } from "react-icons/fa"
import DeleteBtn from "../components/DeleteBtn";
import EditBody from "../components/EditBody";
import EditBtn from "../components/EditBtn";
import Post from "../components/Post";
import { FeedWrapper, PostWrapper } from "../styles";
import LikeContainer from "./LikeContainer";

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


Feed.Status = ({ loading, error }) => {
  return (
    <>
      {!loading && !error && 'Loading'}
      {loading?.length === 0 && 'No posts yet'}
      {error && 'An error occured while trying to fetch the posts, please refresh the page'}
    </>
  )
}

export default Feed