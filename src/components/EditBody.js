import { useEffect, useState } from "react"
import useForm from "../hooks/useForm"
import { updatePost } from "../services/axios"

const EditBody = ({ post, isEditable, setIsEditable }) => {
    const [form, handleForm, setForm] = useForm({ body: post.body })
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
      if (!isEditable) { setForm({ body: post.body}) }

      else { handleEscapeKey() }

    }, [isEditable])

    const handleEscapeKey = () => {
      document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape'){
          setIsEditable(false)
        }
      })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsDisabled(true)

        try {
            await updatePost({ id: post.id, body: form.body })
            post.body = form.body
            setIsEditable(false)
            setIsDisabled(false)
            
        } catch (error) {
            console.error(error)
            setIsDisabled(false)
            alert("An error occured. Your post could not be edited")
        }
    }

    return (<>
      { isEditable 
        ? <form onSubmit={handleSubmit}>
            {isDisabled 
            ? <input type="text" name="body" value={form.body || ""} disabled />
            : <input type="text" name="body" value={form.body || ""} onChange={handleForm} />
            }
          </form>
        : post.body && <p className="body">{post.body}</p>
    }
    </>
    )
  }

export default EditBody