import { useEffect } from "react"
import { FaRegEdit } from "react-icons/fa"

const EditBtn = ({ isEditing, setIsEditable, postRef }) => {
  useEffect(() => {
    if (isEditing){
      postRef.current.querySelector('input').focus()
    }
  }, [isEditing])
  

  const handleClick = () => {
    setIsEditable(prev => !prev)
  }

  return (
    <button className="btn-edit" onClick={handleClick}>
        <FaRegEdit size={12} />
    </button>
  )
}

export default EditBtn