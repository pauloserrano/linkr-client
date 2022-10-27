import styled from "styled-components";
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HashtagTrending({hashtagList}){
    
    const navigate = useNavigate()


    function clicked (nome){
        console.log(nome)
        navigate(`/hashtag/${nome}`)
    }
    
    return(

        <Container>
            <Tittle>
                <p>trending</p>
            </Tittle>

            <HashtagContainer>
                {
                    (hashtagList.length >= 0) ? (

                        hashtagList.map(e => { return(
                            <p onClick={() => clicked(e)} key={e}># {e}</p>
                        )})

                    ):(<p>carregando...</p>)
                    
                }
            </HashtagContainer>
        </Container>
    )
}

const Container = styled.div`    
    width:300px;
    height: 400px;
    background-color: #171717;
    border-radius: 16px;
    position: sticky;
    top: 110px;
    color:#ffffff;

`
const Tittle = styled.div`
    width:100%;
    height: 61px;
    border-bottom: 1px solid #484848;

    display:flex;
    align-items:center;
    
    p{
        font-weight:700;
        font-size:27px;
        font-family: 'Oswald';
        
        margin-left: 18px;
    }
`
const HashtagContainer = styled.div`
    margin-left:16px;
    margin-top:20px;

    p {
        font-family: 'Lato';
        font-weight:700;
        font-size:19px;
        line-height:23px;
        letter-spacing:0.05em;
        margin-bottom:6px;
        cursor: pointer;
    }
`