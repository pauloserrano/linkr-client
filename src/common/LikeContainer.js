import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLikes, deleteLike, insertLike } from "../services/axios";

export default function LikeContainer ({postId}){

  const [isLiked, setIsLiked] = useState(false)
  const [likeAmount, setLikeAmount] = useState(0)
  console.log(likeAmount)

  useEffect (()=>{ updateLikes() },[isLiked])

  function likeClickBotton(){

    if (isLiked){

      deleteLike(postId)

    } else {

      insertLike(postId)

    }
    setIsLiked(!isLiked)
  }

  function updateLikes(){
    getLikes(postId)
      .then((res) => {
        setLikeAmount(res.data?.likeAmount)
        setIsLiked(res.data?.isLiked)
      })
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

