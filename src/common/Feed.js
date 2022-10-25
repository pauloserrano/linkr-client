import { FaTrash, FaRegHeart } from "react-icons/fa"
import DeleteBtn from "../components/DeleteBtn";
import { FeedWrapper, PostWrapper } from "../styles";

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

Feed.Post = ({ post, userId, handleDelete, handleLike, ...otherProps}) => {
  const { pictureUrl, name, link, body, metaTitle, metaDescription, metaImage } = post
  
  return (
    <PostWrapper {...otherProps}>
        <aside>
          <img className="user-picture" src={pictureUrl} alt={name} />
          <div className="like-container">
            <button onClick={handleLike}>
              <FaRegHeart size={20}/>
            </button>
            <p title="João, Maria e outras 11 pessoas">13 Likes</p>
          </div>
        </aside>

        <main>
          <h3 className="username">{name}</h3>
          {body && <p className="body">{body}</p>}
          <a className="link" href={link} target="_blank" rel="noopener noreferrer">
            <p className="title">{metaTitle}</p>
            {metaDescription && <p className="description">{metaDescription}</p>}
            <p className="link">{link}</p>
            <img src={metaImage} alt={metaTitle} />
          </a>
          { userId === post.userId && 
            <div className="btn-container">
              {false && <button className="btn-delete" onClick={handleDelete}>
                <FaTrash size={12} />
              </button>}
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