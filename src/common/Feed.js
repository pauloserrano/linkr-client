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

Feed.Post = ({ post: { pictureUrl, name, link, description }, ...otherProps}) => {
  return (
    <PostWrapper {...otherProps}>
        <img src={pictureUrl} alt="abc" />
        <div className="content">
            <h3>{name}</h3>
            {description && <p>{description}</p>}
            <a href={link} target="_blank" rel="noopener noreferrer">
              <p className="title">Como aplicar o Material UI em um projeto React</p>
              <p className="description">Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</p>
              <p className="link">{link}</p>
              <img src={pictureUrl} alt="abc" />
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