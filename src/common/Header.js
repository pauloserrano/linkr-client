import { useState } from "react";
import { AiOutlineDown as DropIconDown } from "react-icons/ai"
import { AiOutlineUp as DropIconUp } from "react-icons/ai"
import useGlobalContext from "../hooks/useGlobalContext"
import { HeaderWrapper as Wrapper } from "../styles"
import { endSession } from "../services/axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { user } = useGlobalContext()
    const [menu, setMenu] = useState(false);
    
    const navigate = useNavigate();

    const logout = () => {
      endSession()
      .then(() => {
        localStorage.clear();
        navigate("/");
      })
      .catch( err => {
        console.error(err);
      })
    }

  return (
    <Wrapper>
        <h1>Linkr</h1>
        <div className="user-container">
              <button onClick={() => setMenu(!menu)}>
                  { menu ? <DropIconUp size={24} /> : <DropIconDown size={24} /> }
              </button>
              <img src={user.pictureUrl} alt={user.name} />   
        </div>
        
          {
            (menu) ?
            <div className="header-menu" onClick={ logout }> 
              <h4>Logout</h4>
            </div>
            : 
            <></>
          }        
    </Wrapper>
  )
}

export default Header