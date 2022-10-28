import { useEffect, useState } from "react";
import useInterval from 'use-interval'
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
  const [newPosts, setNewPosts] = useState([0, 1])
  useEffect(() => {
    updatePosts()
    fillUser()
  }, [])

  useInterval(() => {
    console.log("update!")
    setNewPosts([1, 2, 3])
    getPosts()
    .then(({ data }) => setNewPosts(data))
  }, 15000)

  const renderNewPosts = () => {
    setPosts([...newPosts, ...posts]);
    setNewPosts([]);
  }

  const fillUser = () => {
    getUser()
    .then(({ data: { name, pictureUrl, id: userId} }) => setUser({ name, pictureUrl, userId }))
    .catch(console.error) 
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
                <img src={user?.pictureUrl} alt={user.name} />
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
                <div className="update-posts">
                {
                  ( newPosts?.length - posts?.length > 0 ) 
                  ? <button onClick={renderNewPosts} > { newPosts.length - posts.length } new posts</button>
                  : <></>  
                }
                </div>               

              <Feed.Status loading={posts} error={error} />
              {posts?.length > 0 && posts.map((post) => (
                <Feed.Post 
                  key={post.id} 
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