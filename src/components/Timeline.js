import { useEffect, useState } from "react";
import useInterval from 'use-interval'
import InfiniteScroll from 'react-infinite-scroller';
import LoadingSpinner from "../common/LoadingSpinner";
import { TimelineWrapper, NewPostWrapper } from "../styles";
import { getPosts, setPost, getUser, getHashtagsRanking, getAllFollowed } from "../services/axios";
import useForm from "../hooks/useForm";
import Header from "../common/Header";
import Feed from "../common/Feed";
import useGlobalContext from "../hooks/useGlobalContext";
import HashtagTrending from "../common/hashtagsTrending";
import { useNavigate } from "react-router-dom";

const Timeline = () => {
  const { user, follows } = useGlobalContext()
  const [posts, setPosts] = useState()
  const [error, setError] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [hashtagList, setHashtagList] = useState([])
  const [form, handleForm, setForm] = useForm({ link: "", body: "" })
  const [newPosts, setNewPosts] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const POSTS_PER_PAGE = 2
  const navigate = useNavigate()
  
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) navigate('/')
    
    updatePosts()
  }, [])

  useInterval(() => {
    setNewPosts([])
    getPosts()
    .then(({ data }) => setNewPosts(data))
  }, 15000)

  const renderNewPosts = () => {
    setPosts([...newPosts, ...posts]);
    setNewPosts([]);
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsDisabled(true)

    try {
      await setPost({ ...form })
      updatePosts()
      resetForm()
      
    } catch (error) {
      console.error(error)
      alert("Houve um erro ao publicar seu link")
    }

    setIsDisabled(false)
  }

const loadNextPage = () => {
  setLoading(true);
  setTimeout(() => {
    setPage(page + 1);
  setLoading(false);
  }, 400)
  
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
              <InfiniteScroll
                loadMore={loadNextPage}
                hasMore={ page * POSTS_PER_PAGE < posts?.length }
                loader={ (loading) ?
                        <>
                        <div className="space"></div>
                        <div className="loader" key={0}>
                          <LoadingSpinner />
                          <span>Loading more posts...</span>
                        </div>
                        </>
                        : <></> }
              >
                <Feed.Status follows={follows} posts={posts} error={error} />
                {posts?.length > 0 && posts.slice(0, POSTS_PER_PAGE * page).map((post) => (
                  <Feed.Post 
                    key={`${post.id}${post.repostId}`} 
                    post={post}
                    refresh={updatePosts}
                  />
                ))}
              </InfiniteScroll>
            </Feed>
            <HashtagTrending hashtagList={hashtagList}/>
        </TimelineWrapper>
        
    </>
  )
}

export default Timeline