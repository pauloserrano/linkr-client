import { Link } from "react-router-dom";
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

Feed.Post = ({ post, ...otherProps}) => {
  const { pictureUrl, name, link, body, metaTitle, metaDescription, metaImage, userId } = post

  return (

      <PostWrapper {...otherProps} >
        <Link to={ "/user/" + userId } ><img src={pictureUrl} alt={name} /></Link>
        <div className="content">
            <h3><Link to={ "/user/" + userId } >{name}</Link></h3>
            {body && <p>{body}</p>}
            <a href={link} target="_blank" rel="noopener noreferrer">
              <p className="title">{metaTitle}</p>
              {metaDescription && <p className="description">{metaDescription}</p>}
              <p className="link">{link}</p>
              <img src={metaImage} alt={metaTitle} />
            </a>
        </div>
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