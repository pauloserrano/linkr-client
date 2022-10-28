import { AiOutlineComment } from "react-icons/ai"

const CommentBtn = ({ amount, ...otherProps}) => {
  return (
    <button className="btn-comment" {...otherProps}>
        <AiOutlineComment size={24}/>
        <p>{amount} comment{+amount !== 1 && 's'}</p>
    </button>
  )
}

export default CommentBtn