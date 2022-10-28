import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { BiRepost } from 'react-icons/bi'
import { PostWrapper, CommentsWrapper, RepostTag } from "../styles"
import LikeContainer from "../common/LikeContainer"
import EditBody from "../components/EditBody"
import EditBtn from "../components/EditBtn"
import DeleteBtn from "../components/DeleteBtn"
import CommentBtn from "./CommentBtn"
import { getComments } from "../services/axios"
import NewComment from "./NewComment"
import RepostBtn from "./RepostBtn"
import useGlobalContext from "../hooks/useGlobalContext"

const Post = ({ post, refresh }) => {
    const { id, pictureUrl, name, link, metaTitle, metaDescription, metaImage } = post
    const { user, follows } = useGlobalContext()
    const [isEditable, setIsEditable] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState([])
    const postRef = useRef()

    useEffect(() => {
      updateComments()
    }, [])

    const updateComments = async () => {
      try {
        const { data : comments } = await getComments({ id: post.id })
        setComments(comments)
        console.log({comments})

      } catch (error) {
        console.error(error)
      }

      refresh()
    }
    
    return (
      <article>
      {post.isRepost && <Post.RepostTag name={post.name === user.name ? 'you' : post.name} />}
      <PostWrapper isRepost={post.isRepost}>
          <aside>
            <Link to={ "/user/" + post.userId } >
              <img className="user-picture" src={pictureUrl} alt={name} />
            </Link>
            <LikeContainer postId={id}/>
            <CommentBtn 
              amount={comments.length}
              onClick={() => setShowComments(prev => !prev)}
            />
            <RepostBtn 
              amount={post.reposts}
              postId={post.id}
              refresh={refresh}
            />
          </aside>

          <main ref={postRef}>
            <h3 className="username"><Link to={ "/user/" + post.userId } >{name}</Link></h3>
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
            {user.userId === post.userId && 
              <div className="btn-container">
                {!post.isRepost && 
                  <EditBtn 
                    isEditing={isEditable}
                    setIsEditable={setIsEditable}
                    postRef={postRef}
                  />
                }
                <DeleteBtn 
                  post={post}
                  refresh={refresh} 
                  isRepost={post.isRepost}
                />
              </div>
            }
          </main>
      </PostWrapper>
      <CommentsWrapper isRepost={post.isRepost}>
        {showComments && 
            comments.map(({ id: commentId, pictureUrl, name, body }) => (
              <div className="comment">
                <img className="user-picture" src={pictureUrl} alt={name} />
                <span>
                  <h4>{name} 
                    <span className="user-status">
                      {follows?.includes(commentId) && " • following"}
                      {commentId === user.userId && " • post's author"} 
                    </span>
                  </h4>
                  <p>{body}</p>
                </span>
              </div>
            ))
        }
        {!post.isRepost && 
          <NewComment 
            postId={post.id} 
            refresh={() => updateComments()} 
            isRepost={post.isRepost} 
          />
        }
      </CommentsWrapper>
      </article>
    )
  }

Post.RepostTag = ({ name }) => {
  return (
    <RepostTag>
      <BiRepost size={16} /> <p className="repost-body">Reposted by <span className="username">{name}</span></p>
    </RepostTag>
  )
}

export default Post