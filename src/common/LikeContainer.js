import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLikes } from "../services/axios";

export default function LikeContainer (){

    const [isLiked, setIsLiked] = useState(false)
    const [likeAmount, setLikeAmount] = useState(0)

    useEffect (()=>{ updateLikes() },[])

    function likeClickBotton(){

        setIsLiked(!isLiked)
        if (isLiked){
            //post removendo like
        } else {
            //post adcionando like
        }
    }
    function updateLikes(){
        getLikes()
        .then(({ likes }) => setLikeAmount(likes))
        .catch(err => {
            console.error(err)
          })        
    }
    return(
        <ContainerLikes onClick={() => likeClickBotton()} isLiked={ isLiked ? ("#AC0000"):("#FFFFFF")}>
              <div>s2</div>
              <span>{likeAmount} likes</span>
          </ContainerLikes>
    )
}

const ContainerLikes = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  width:50px;

  div{
    display:flex;
    justify-content:center;
    align-items:center;

    margin-top: 15px;
    width:25px;
    height:25px;
    
    color:black;
    font-weight:700;
    background-color:${(props)=>props.isLiked};

    border-radius:8px;
  }
  span {
    text-align:center;
    font-size: 11px;

    margin-top: 9px;
    color:white;
  }
`

