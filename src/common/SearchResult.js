import { Link } from "react";

const SearchResult = ({ user, index }) => {
    const { username, pictureUrl } = user;
    
    return (
            <div className="result" key={index} >
                <img src={pictureUrl} alt={user.username} />
                <span spellcheck="false" >{username}</span>
            </div>
    )
}

export default SearchResult;