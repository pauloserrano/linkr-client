import { Link } from "react";
import styled from "styled-components";


const SearchResult = ({ user, index, isFollowed }) => {
    const { name, pictureUrl } = user;
    
    return (
            <div className="result" key={index} >
                <img src={pictureUrl} alt={name} />
                <span spellcheck="false">{name}</span>
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