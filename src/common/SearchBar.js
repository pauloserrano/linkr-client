import SearchBarWrapper from "../styles/SearchBarWrapper.js";
import { useState } from "react";
import { HiMagnifyingGlass as Magnifier } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { getUsers } from "../services/axios";
import SearchResult from "./SearchResult.js";

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const [test, setTest] = useState([0,1,2])

    const searchUsers = async () => { 
        getUsers(search)
        .then(response => {
            setResults([...response.data.profiles])
            console.log(results)
        })
        .catch(e => console.log(e))
        console.log(results)

        
    }

    return (
    <>
        <SearchBarWrapper>
            <input value={ search } onChange={ e => setSearch(e.target.value) } placeholder="Search for people" ></input>
            <div className="icon"  onClick={searchUsers} ><Magnifier color="#cfcfcf" /></div>
            <div className="search-results" >
                {
                    (results?.length > 0 && search.length >= 3) 
                    ? results.map((profile, i) => { return <Link to={ "/user/" + profile.userId }><SearchResult key={i} user={profile} index={i} /></Link> })
                    : <></>
                }
            </div>
        </SearchBarWrapper>
    </>
    )    
}    

export default SearchBar;