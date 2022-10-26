import { useEffect, useState } from "react"
import useForm from "../hooks/useForm"
import { updatePost } from "../services/axios"
import { HashtagBoldStyle } from "../styles/HashtagBold"

const EditBody = ({ post, isEditable, setIsEditable }) => {
    const [form, handleForm, setForm] = useForm({ body: post.body })
    const [isDisabled, setIsDisabled] = useState(false)

    const tokenSeparador = "/a7199fb05606b0d193d79a2dd6c2b537/"
    const bodyFormated = bodyFormatFunction(post.body, tokenSeparador)

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

    function bodyFormatFunction (texto, tokenSeparador){
      if (!texto) return
      const textoArray = texto.split(" ")
      const indicesHashtag = []
      let textoReferenciado = ""
    
      for (let i = 0; i < textoArray.length; i++) {
        if(textoArray[i][0] === "#") indicesHashtag.push(i)   
      }
      console.log(indicesHashtag)
      for (let z = 0; z < textoArray.length; z++) {
        if (indicesHashtag.includes(z)){
          textoReferenciado += tokenSeparador + textoArray[z] + " "
        } else{
          textoReferenciado += textoArray[z] + " "
        }
      }
      textoReferenciado = textoReferenciado.split(" ")
    
      return textoReferenciado
    }

    return (<>
      { isEditable 
        ? <form onSubmit={handleSubmit}>
            {isDisabled 
            ? <input type="text" name="body" value={form.body || ""} disabled />
            : <input type="text" name="body" value={post.body || ""} onChange={handleForm} />
            }
          </form>
        : <>
            {bodyFormated && 
              <p>{bodyFormated.map(e => {
                if (e.includes(tokenSeparador)){
                  return <HashtagBoldStyle onClick={() =>console.log("/hashtag/"+e.replace(`${tokenSeparador}#`, ""))}>{e.replace(tokenSeparador, "") + " "}</HashtagBoldStyle>
                } else return <span>{e + " "}</span>})}
              </p>
            }
          </>
    }
    </>
    )
  }

export default EditBody