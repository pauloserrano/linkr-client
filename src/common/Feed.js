import { FeedWrapper, PostWrapper } from "../styles";
import LikeContainer from "./LikeContainer";
import styled from "styled-components";

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
  const { pictureUrl, name, link, body, metaTitle, metaDescription, metaImage } = post

  return (
    <PostWrapper {...otherProps}>
        <div> 
          <UserImage src={pictureUrl} alt={name} />
          <LikeContainer/>
        </div>
        <div className="content">
            <h3>{name}</h3>
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

const UserImage = styled.img`
  width: 50px;
  border-radius: 50%;
`

export default Feed