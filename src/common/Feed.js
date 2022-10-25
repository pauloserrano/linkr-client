import { FaTrash } from "react-icons/fa"
import DeleteBtn from "../components/DeleteBtn";
import EditBody from "../components/EditBody";
import EditBtn from "../components/EditBtn";
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

Feed.Post = ({ post, userId, handleDelete, isEditable, setIsEditable, ...otherProps}) => {
  const { id, pictureUrl, name, link, body, metaTitle, metaDescription, metaImage } = post
  
  return (
    <PostWrapper {...otherProps}>
        <aside>
          <img className="user-picture" src={pictureUrl} alt={name} />
          <LikeContainer postId={id}/>
        </aside>

        <main>
          <h3 className="username">{name}</h3>
          <EditBody
            post={post}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
          />
          <a className="link" href={link} target="_blank" rel="noopener noreferrer">
            <p className="title">{metaTitle}</p>
            {metaDescription && <p className="description">{metaDescription}</p>}
            <p className="link">{link}</p>
            <img src={metaImage} alt={metaTitle} />
          </a>
          { userId === post.userId && 
            <div className="btn-container">
              <EditBtn 
                setIsEditable={setIsEditable}
              />
              <DeleteBtn 
                handler={handleDelete} 
              />
            </div>
          }
        </main>
    </PostWrapper>
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