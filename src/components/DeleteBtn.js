import { useState } from "react";
import { FaTrash } from "react-icons/fa"
import Modal from "../common/Modal"

const DeleteBtn = ({ handler }) => {
    const [isModalOpen, SetIsModalOpen] = useState(false)

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
            onSubmit={handler}
        />
    </>
  )
}

export default DeleteBtn