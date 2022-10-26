import { Link } from "react";

const SearchResult = ({ user, index }) => {
    const { username, pictureUrl } = user;
    
    return (
            <div className="result" key={index} >
                <img src={pictureUrl} />
                <span>{username}</span>
            </div>
    )
}

export default SearchResult;