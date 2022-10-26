import { useState } from "react";
import { FaTrash } from "react-icons/fa"
import { deletePost } from "../services/axios";
import Modal from "../common/Modal"

const DeleteBtn = ({ postId, refresh }) => {
    const [isModalOpen, SetIsModalOpen] = useState(false)

    const handleDelete = async (id) => {
      try {
        await deletePost({ id: postId })
        refresh()
        
      } catch (error) {
        console.error(error)
        alert("An error occured. Your post could not be deleted")
      }

      SetIsModalOpen(false)
    }

  return (
    <>
        <button className="btn-delete" onClick={() => SetIsModalOpen(true)}>
            <FaTrash size={12} />
        </button>
        <Modal 
            state={isModalOpen}
            setState={SetIsModalOpen}
            dialog="Are you sure you want to delete this post?"
            cancelBtn="No, go back" 
            confirmBtn="Yes, delete it"
            onSubmit={handleDelete}
        />
    </>
  )
}

export default DeleteBtn