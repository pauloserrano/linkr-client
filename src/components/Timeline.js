import { useEffect, useState } from "react";
import { TimelineWrapper, NewPostWrapper } from "../styles";
import { getPosts, setPost, getUser, getHashtagsRanking } from "../services/axios";
import useForm from "../hooks/useForm";
import Header from "../common/Header";
import Feed from "../common/Feed";
import useGlobalContext from "../hooks/useGlobalContext";
import HashtagTrending from "../common/hashtagsTrending";

const Timeline = () => {
  const { user, setUser } = useGlobalContext()
  const [posts, setPosts] = useState()
  const [error, setError] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [hashtagList, setHashtagList] = useState([])
  const [form, handleForm, setForm] = useForm({ link: "", body: "" })
  
  useEffect(() => {
    updatePosts()
    fillUser()
  }, [])

  const fillUser = () => {
    getUser()
    .then(({ data: { name, pictureUrl, id: userId} }) => setUser({ name, pictureUrl, userId }))
    .catch(console.error) 
  } 

  const updatePosts = async () => {
    try {
      const { data: hashtags } = await getHashtagsRanking()
      const { data: posts } = await getPosts()

      setHashtagList(hashtags)
      setPosts(posts)
      
    } catch (error) {
      setError(error)
      console.error(error)
    }
  }

  const resetForm = () => setForm({ link: "", body: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setIsDisabled(true)
    setPost({ ...form })
      .then(() => {
        updatePosts()
        resetForm()
        setIsDisabled(false)
      })
      .catch(() => {
        alert("Houve um erro ao publicar seu link")
        setIsDisabled(false)
      })
  }

  return (
    <>
        <Header />
        <TimelineWrapper>
            <Feed>
              <Feed.Title>timeline</Feed.Title>
              <NewPostWrapper isDisabled={isDisabled}>
                <img src={user.pictureUrl} alt={user.name} />
                <form onSubmit={handleSubmit}>
                  <h3>What are you going to share today?</h3>
                  {isDisabled
                    ? <>
                      <input type="text" value={form.link} disabled />
                      <input type="text" value={form.body} disabled />
                    </>
                    : <>
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
                    </>
                  }
                  <button type="submit">{ isDisabled ? "Publishing..." : "Publish" }</button>
                </form>
              </NewPostWrapper>
              <Feed.Status loading={posts} error={error} />
              {posts?.length > 0 && posts.map((post) => (
                <Feed.Post 
                  key={`${post.id}${post.repostId}`} 
                  post={post}
                  userId={user.userId}
                  refresh={updatePosts}
                />
              ))}
            </Feed>
            <HashtagTrending hashtagList={hashtagList}/>
        </TimelineWrapper>
        
    </>
  )
}

export default Timeline