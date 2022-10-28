import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineDown as DropIconDown } from "react-icons/ai"
import { AiOutlineUp as DropIconUp } from "react-icons/ai"
import useGlobalContext from "../hooks/useGlobalContext"
import { HeaderWrapper as Wrapper } from "../styles"
import { endSession, getAllFollowed, getUser } from "../services/axios";
import SearchBar from "./SearchBar.js";

const Header = () => {
    const { user, setUser, setFollows } = useGlobalContext()
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      if (!user.pictureUrl) getUserData()
    }, [])

    const getUserData = async () => {
      try {
        const { data: { name, pictureUrl, id: userId } } = await getUser()
        const { data: followed } = await getAllFollowed()
        
        setUser({ name, pictureUrl, userId })
        setFollows(followed)
  
      } catch (error) {
        console.error(error)
      }
    }

    const logout = async () => {
      try {
        await endSession()
        localStorage.clear();
        navigate("/");

      } catch (error) {
        console.error(error);
      }
    }

  return (
    <Wrapper>
        <h1 onClick={() => navigate('/timeline')}>Linkr</h1>
        <SearchBar />
        <div className="user-container">
          <button onClick={() => setMenu(!menu)}>
              { menu ? <DropIconUp size={24} /> : <DropIconDown size={24} /> }
          </button>
          <img src={user.pictureUrl} alt={user.name} />   
        </div>
        {menu && (
          <div className="header-menu" onClick={ logout }> 
            <h4>Logout</h4>
          </div>
        )}        
    </Wrapper>
  )
}

export default Header