import { useEffect, useState } from "react";
import { HiMagnifyingGlass as Magnifier } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

import SearchBarWrapper from "../styles/SearchBarWrapper.js";
import { getUsers, getAllUsers } from "../services/axios";
import SearchResult from "./SearchResult.js";

import useGlobalContext from "../hooks/useGlobalContext"


const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [focused, setFocused] = useState(true);

    const { follows } = useGlobalContext()
    const [allUsers, setAllUsers] = useState()

    /*
    const {follows} = useGlobalContext()
    console.log("follows")
    console.log(results)
    */

    useEffect(()=>{

        getAllUsers()
        .then(res => {
            setAllUsers(res.data)
            console.log("res.data")
            console.log(res.data)
        })

    }, [])

    useEffect(()=>{

        if (search !== "") {

            setResults(allUsers?.filter( (e) => e.name.toLowerCase().includes(search.toLowerCase())))
        }

    }, [search])

    function verifyFollow(id){
        if(follows?.rows.filter( e => e?.followedId === id).length !== 0){
            return true
        } else return false
    }

    return (
    <>
        <SearchBarWrapper onFocus={ () => setFocused(true) } /*onBlur={ () => setFocused(false) } */>

            <DebounceInput 
                minLength={3}
                debounceTimeout={300}
                onChange={ e => setSearch(e.target.value) } 
                placeholder="Search for people"
            >
            </DebounceInput>
            <div className="icon" onClick={ () => {setFocused(true)} } ><Magnifier color="#cfcfcf" /></div>
            <div className="search-results" >
                {
                    (results?.length > 0 && focused) 
                    ? results.map((profile, i) => { return <Link to={ "/user/" + profile.id }><SearchResult key={i} user={profile} index={i} isFollowed={verifyFollow(profile.id)}/></Link> })
                    : <></>
                }
            </div>
        </SearchBarWrapper>
    </>
    )    
}    

export default SearchBar;