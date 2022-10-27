import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { getLikes, deleteLike, insertLike } from "../services/axios";
import { AiFillHeart as FilledHeart } from "react-icons/ai"
import { AiOutlineHeart as EmptyHeart } from "react-icons/ai"

export default function LikeContainer ({postId}){

  const [whoLike, setWhoLike] = useState([])
  const [likeInfo, setLikeInfo] = useState(false)
  const [likeResponse, setLikeResponse] = useState()
  const [awaitResponse, setAwaitResponse] = useState(false)
  
  useEffect(updateLikes,[])

  function likeClickBotton(){

    setAwaitResponse(true)

    if (likeResponse?.isLiked){
      deleteLike(postId)
      .then((res) => {
        updateLikes()
        setAwaitResponse(false)
      })
    } else {
      insertLike(postId)
      .then((res) => {
        updateLikes()
        setAwaitResponse(false)
      })
    }
  }

  function updateLikes(){
    getLikes(postId)
      .then((res) => {
        setWhoLike(res.data?.whoLiked)
        setLikeResponse(res.data)
      })
      .catch(err => {
        console.error(err)
      })        
  }

  return(
    <ContainerLikes onClick={() => likeClickBotton()} onMouseEnter={() => setLikeInfo(true)} onMouseLeave={() => setLikeInfo(false)} awaitResponse={awaitResponse}>
      <LikeInfoContainer likeStatus={likeInfo}>
        {(whoLike !== undefined) ? (whoLike.join(", ")):("")}
      </LikeInfoContainer>
      <div> {(likeResponse?.isLiked ? (<FilledHeartStyled/> ):(<EmptyHeartStyled/> ))}</div>
      <span>{likeResponse?.likeAmount} likes</span>
    </ContainerLikes>
  )
}

const ContainerLikes = styled.div`

  pointer-events: ${(props) => props.awaitResponse ? ("none"):("auto")};
  cursor: pointer;
  
  display:flex;
  flex-direction:column;
  align-items:center;
  width:50px;

  position:relative;

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
const LikeInfoContainer = styled.div`
  display:${(props) => (props.likeStatus) ? ("flex"):("none")} !important;
  position:absolute;

  bottom:-30px;
  width: 169px !important;
  height: 24px;

  z-index:3;

  background: rgba(255, 255, 255, 0.9);
  border-radius: 3px;

  font-family: 'Lato';
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;

  color: #505050;
`