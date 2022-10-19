import { PostWrapper as Wrapper } from "../styles"

const Post = ({ post: { pictureUrl, name, link, description }}) => {
  return (
    <Wrapper>
        <img src={pictureUrl} alt="abc" />
        <div className="content">
            <h3>{name}</h3>
            {description && <p>{description}</p>}
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </div>
    </Wrapper>
  )
}

export default Post