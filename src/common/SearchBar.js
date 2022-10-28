import { useEffect, useState } from "react";
import { HiMagnifyingGlass as Magnifier } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

import SearchBarWrapper from "../styles/SearchBarWrapper.js";
import { getUsers, getAllUsers, getAllFollowed } from "../services/axios";
import SearchResult from "./SearchResult.js";

import useGlobalContext from "../hooks/useGlobalContext"

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [focused, setFocused] = useState(true);

    const { follows, setFollows } = useGlobalContext()
    const [allUsers, setAllUsers] = useState()

    const getFollowsData = async () => {
        try {
          const { data: followed } = await getAllFollowed()
          setFollows(followed)
    
        } catch (error) {
          console.error(error)
        }
    }

    useEffect(()=>{

        getFollowsData()
        
        getAllUsers()
        .then(res => {
            setAllUsers(res.data)
            console.log("res.data")
            console.log(res.data)
        })

    }, [])

    useEffect(()=>{

        if (search !== "") {

            setResults(priorityFormat(follows, allUsers?.filter( (e) => e.name.toLowerCase().includes(search.toLowerCase()))))
        }

    }, [search])

    function priorityFormat(follows, arr){

        let indiceFollowed
        let aux

        for (let i = 0; i < arr.length; i++){
            indiceFollowed = i
            for (let z = i + 1; z < arr.length; z++){
                if (follows?.filter( e => e === arr[z].id).length !== 0 && indiceFollowed === i){
                    indiceFollowed = z
                }
            }
            aux = arr[i] 
            arr[i] = arr[indiceFollowed]
            arr[indiceFollowed] = aux
        }
        return arr
    }

    function verifyFollow(id){
        console.log(follows)
        if(follows?.filter( e => e === id).length !== 0){
            return true
        } else return false
    }  

    return (
    <>
        <SearchBarWrapper onFocus={ () => setFocused(true) } onBlur={ () => setTimeout(() => {setFocused(false)}, 200)  } >

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
                    ? results.map((profile, i) => { return <SearchResult key={i} user={profile} index={i} isFollowed={verifyFollow(profile.id)}/> })
                    : <></>
                }
            </div>
        </SearchBarWrapper>
    </>
    )    
}    

export default SearchBar;