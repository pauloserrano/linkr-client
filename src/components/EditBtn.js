import { FaRegEdit } from "react-icons/fa"

const EditBtn = ({ setIsEditable }) => {
  return (
    <button className="btn-edit" onClick={() => setIsEditable(prev => !prev)}>
        <FaRegEdit size={12} />
    </button>
  )
}

export default EditBtn