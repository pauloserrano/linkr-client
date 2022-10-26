import { useRef, useState } from "react"
import { PostWrapper } from "../styles"
import LikeContainer from "../common/LikeContainer"
import EditBody from "../components/EditBody"
import EditBtn from "../components/EditBtn"
import DeleteBtn from "../components/DeleteBtn"

const Post = ({ post, userId, handleDelete }) => {
    const { id, pictureUrl, name, link, metaTitle, metaDescription, metaImage } = post

    const [isEditable, setIsEditable] = useState(false)
    const postRef = useRef()
    
    return (
      <PostWrapper>
          <aside>
            <img className="user-picture" src={pictureUrl} alt={name} />
            <LikeContainer postId={id}/>
          </aside>
  
          <main ref={postRef}>
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
                    isEditing={isEditable}
                  setIsEditable={setIsEditable}
                  postRef={postRef}
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


export default Post