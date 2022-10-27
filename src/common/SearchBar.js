import { useState } from "react";
import { HiMagnifyingGlass as Magnifier } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

import SearchBarWrapper from "../styles/SearchBarWrapper.js";
import { getUsers } from "../services/axios";
import SearchResult from "./SearchResult.js";


const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [focused, setFocused] = useState(true);

    const [test, setTest] = useState([0,1,2])

    const searchUsers = async () => { 
        getUsers(search)
        .then(response => {
            setResults([...response.data.profiles])
        })
        .catch(e => console.log(e))
        console.log(results) 
    }

    const autoSearch = keyDown => {
        setSearch(keyDown.target.value);
        searchUsers();
        console.log(search)
    }

    return (
    <>
        <SearchBarWrapper onFocus={ () => setFocused(true) } contentEditable onBlur={ () => setFocused(false) } >
            <DebounceInput 
                    minLength={3}
                    debounceTimeout={300}
                    value={ search }
                    onChange={ e => autoSearch(e) } 
                    placeholder="Search for people"
                     >
            </DebounceInput>
            <div className="icon" onClick={ () => setFocused(true) } ><Magnifier onClick={searchUsers} color="#cfcfcf" /></div>
            <div className="search-results" >
                {
                    (results?.length > 0 && focused) 
                    ? results.map((profile, i) => { return <Link to={ "/user/" + profile.userId }><SearchResult key={i} user={profile} index={i} /></Link> })
                    : <></>
                }
            </div>
        </SearchBarWrapper>
    </>
    )    
}    

export default SearchBar;