import { Link } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const SearchResult = ({ user, index, isFollowed,  }) => {
    const { name, pictureUrl } = user;
    const navigate = useNavigate()

    function clicked(){
        navigate("/user/"+user.id)
        window.location.reload(false);
    }
    
    return (
            <div className="result" key={index} onClick={()=>clicked()}>
                <img src={pictureUrl} />
                <span spellcheck="false" >{name}</span>
                <FollowStatus>{ (isFollowed)?("• following"):("")}</FollowStatus>
            </div>
    )
}

const FollowStatus = styled.span`
    margin-left:8px;
    color: #C5C5C5;
    font-size:1rem;
    font-weight:400;
`
export default SearchResult;