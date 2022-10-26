import { useState } from "react"
import { IoMdPaperPlane as Send } from "react-icons/io"
import useGlobalContext from "../hooks/useGlobalContext"
import useForm from "../hooks/useForm"
import { setComment } from "../services/axios"

const NewComment = ({ postId, refresh }) => {
    const [form, handleForm, setForm] = useForm({ body: "" })
    const [isDisabled, setIsDisabled] = useState(false)
    const { user: { pictureUrl, name } } = useGlobalContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsDisabled(true)

        try {
            await setComment({ id: postId, body: form.body })
            setForm({ body: "" })
            refresh()
            
        } catch (error) {
            console.error(error)
        }

        setIsDisabled(false)
    }

  return (
    <div className="comment">
        <img className="user-picture" src={pictureUrl} alt={name} />
        <form onSubmit={handleSubmit}>
            {isDisabled
                ? <input disabled type="text" value={form.body} placeholder="write a comment..." />
                : <input 
                    type="text" 
                    placeholder="write a comment..." 
                    name="body"
                    value={form.body}
                    onChange={handleForm}
                />
            }
            <button className="btn-submit" type="submit">
                <Send size={18} />
            </button>
            
        </form>
    </div>
  )
}

export default NewComment