import { useEffect, useState } from "react";
import { TimelineWrapper, NewPostWrapper } from "../styles";
import { getPosts, setPost, getUser, getHashtagsRanking } from "../services/axios";
import useForm from "../hooks/useForm";
import Header from "../common/Header";
import Feed from "../common/Feed";
import useGlobalContext from "../hooks/useGlobalContext.js";
import HashtagTrending from "../common/hashtagsTrending";

const Timeline = () => {
  const [posts, setPosts] = useState()
  const [error, setError] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [form, handleForm, setForm] = useForm({
    link: "",
    body: ""
  })
  const [hashtagList, setHashtagList] = useState([])

  useEffect(() => updatePosts(), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsDisabled(true)
    setPost({ ...form })
      .then(() => {
        updatePosts()
        resetForm()
        setIsDisabled(false)
      }).catch(() => {
        alert("Houve um erro ao publicar seu link")
        setIsDisabled(false)
      })
  }

  const { setUser, user } = useGlobalContext();

  const fillUser = () => {
    getUser()
    .then(({ data }) => {
      setUser({ pictureUrl: data.pictureUrl });
    })
    .catch(err => {
      console.error(err);
    }) 
  } 

  const updatePosts = () => {

    getHashtagsRanking()
    .then(({ data }) => setHashtagList(data))
    .catch(err => {
      console.error(err)
    })

    getPosts()
    .then(({ data }) => setPosts(data))
    .catch(err => {
      console.error(err)
      setError(true)
    })
  }

  const resetForm = () => {
    setForm({ link: "", body: "" })
  }

  return (
    <>
        <Header />
        <TimelineWrapper>
            <HashtagTrending hashtagList={hashtagList}/>
            <Feed>
              <Feed.Title>timeline</Feed.Title>
              <NewPostWrapper isDisabled={isDisabled}>
                <img src={ user.pictureUrl || "https://picsum.photos/200/200"} alt="abc" />
                <form onSubmit={handleSubmit}>
                  <h3>What are you going to share today?</h3>
                  <input 
                    type="text" 
                    name="link" 
                    value={form.link}
                    onChange={handleForm} 
                    placeholder="http://..." 
                  />
                  <input 
                    type="text" 
                    name="body" 
                    value={form.body}
                    onChange={handleForm} 
                    placeholder="Awesome article about #javascript" 
                  />
                  <button type="submit">{ isDisabled ? "Publishing..." : "Publish"}</button>
                </form>
              </NewPostWrapper>
              <Feed.Status loading={posts} error={error} />
              {posts?.length > 0 && posts.map((post, index) => (
                <Feed.Post 
                  key={index} 
                  post={post} />
              ))}
            </Feed>
        </TimelineWrapper>
        
    </>
  )
}

export default Timeline