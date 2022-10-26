import { AiOutlineComment } from "react-icons/ai"

const CommentBtn = ({ amount, ...otherProps}) => {
  return (
    <button className="btn-comment" {...otherProps}>
        <AiOutlineComment size={24}/>
        <p>{amount} comments</p>
    </button>
  )
}

export default CommentBtn