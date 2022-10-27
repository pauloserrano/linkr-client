import { useState } from "react";
import { FaTrash } from "react-icons/fa"
import { deletePost, deleteRepost } from "../services/axios";
import Modal from "../common/Modal"

const DeleteBtn = ({ post, refresh, isRepost }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleDelete = async (id) => {
      try {
        if (isRepost){
          await deleteRepost({ id: post.repostId })
        
        } else {
          await deletePost({ id: post.id })
        }

        refresh()
        
      } catch (error) {
        console.error(error)
        alert("An error occured. Your post could not be deleted")
      }
      setIsLoading(false)
      setIsModalOpen(false)
    }

  return (
    <>
        <button className="btn-delete" onClick={() => setIsModalOpen(true)}>
            <FaTrash size={12} />
        </button>
        <Modal 
            state={isModalOpen}
            setState={setIsModalOpen}
            dialog="Are you sure you want to delete this post?"
            cancelBtn="No, go back" 
            confirmBtn="Yes, delete it"
            onSubmit={handleDelete}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
        />
    </>
  )
}

export default DeleteBtn