import useForm from "../hooks/useForm"
import { updatePost } from "../services/axios"

const EditBody = ({ post, isEditable, setIsEditable, postId }) => {
    const [form, handleForm] = useForm({ body: post.body })

    const handleSubmit = async (e) => {
        e.preventDefault()

        await updatePost({ id: post.id, body: form.body })
        post.body = form.body
        setIsEditable(false)
    }

    return (<>
      { isEditable 
        ? <form onSubmit={handleSubmit}>
            <input type="text" name="body" value={form.body} onChange={handleForm} />
          </form>
        : post.body && <p className="body">{post.body}</p>
    }
    </>
    )
  }

export default EditBody