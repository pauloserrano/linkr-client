import { useRef, useState, useEffect } from "react"
import { PostWrapper } from "../styles"
import LikeContainer from "../common/LikeContainer"
import EditBody from "../components/EditBody"
import EditBtn from "../components/EditBtn"
import DeleteBtn from "../components/DeleteBtn"
import CommentBtn from "./CommentBtn"
import { getComments, setComment } from "../services/axios"

const Post = ({ post, userId, handleDelete }) => {
    const { id, pictureUrl, name, link, metaTitle, metaDescription, metaImage } = post

    const [isEditable, setIsEditable] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState([])
    const postRef = useRef()

    useEffect(() => {
      getComments({ id: post.id })
        .then(({ data }) => setComments(data))
        .catch(console.error)
    }, [])
    
    return (
      <PostWrapper>
          <aside>
            <img className="user-picture" src={pictureUrl} alt={name} />
            <LikeContainer postId={id}/>
            <CommentBtn 
              amount={comments.length}
              onClick={() => setShowComments(prev => !prev)}
            />
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
            {userId === post.userId && 
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
          <footer>
            {showComments && comments.map(comment => (<>
              {comment.body}
            </>))}
          </footer>
      </PostWrapper>
    )
  }


export default Post