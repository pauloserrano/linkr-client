import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLikes, deleteLike, insertLike } from "../services/axios";
import { AiFillHeart as FilledHeart } from "react-icons/ai"
import { AiOutlineHeart as EmptyHeart } from "react-icons/ai"

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
    <ContainerLikes onClick={() => likeClickBotton()}>
      <div> {(isLiked ? (<FilledHeartStyled/> ):(<EmptyHeartStyled/> ))}</div>
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
  }
  span {
    text-align:center;
    font-size: 11px;

    margin-top: 9px;
    color:white;
  }
`
const FilledHeartStyled = styled(FilledHeart)`
  color:#AC0000;
  font-size:25px;
`
const EmptyHeartStyled = styled(EmptyHeart)`
  color:#FFFFFF;
  font-size:25px;
`