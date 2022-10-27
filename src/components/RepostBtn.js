import { useState } from 'react'
import { BiRepost } from 'react-icons/bi'
import { repostPost } from '../services/axios'  
import Modal from '../common/Modal'

const RepostBtn = ({ amount, postId, refresh }) => {
    const [isModalOpen, SetIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleRepost = async (id) => {
      try {
        await repostPost({ id: postId })
        refresh()
        
      } catch (error) {
        console.error(error)
        alert("An error occured")
      }
      setIsLoading(false)
      SetIsModalOpen(false)
    }

  return (
    <>
        <button className='btn-repost' onClick={() => SetIsModalOpen(true)}>
            <BiRepost size={24} />
            <p>{amount} re-post{+amount !== 1 && 's'}</p>
        </button>
        <Modal 
            state={isModalOpen}
            setState={SetIsModalOpen}
            dialog="Do you want to re-post this link?"
            cancelBtn="No, cancel"
            confirmBtn="Yes, share it!"
            onSubmit={handleRepost}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
        />
    </>
  )
}

export default RepostBtn