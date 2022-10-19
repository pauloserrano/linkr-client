import { AiOutlineDown as DropIcon } from "react-icons/ai"
import useGlobalContext from "../hooks/useGlobalContext"
import { HeaderWrapper as Wrapper } from "../styles"

const Header = () => {
    const { user } = useGlobalContext()

  return (
    <Wrapper>
        <h1>Linkr</h1>
        <div className="user-container">
            <button>
                <DropIcon size={24}/>
            </button>
            <img src={user.pictureUrl} alt="ae" />
        </div>
            
    </Wrapper>
  )
}

export default Header