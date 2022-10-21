import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function HashtagPage(){
        
    const {hashtag} = useParams()

    return(

        <Tittle><p>{hashtag}</p></Tittle>
        
    )
}

const Tittle = styled.div`
    width:100%;
    height: 61px;

    display:flex;
    align-items:center;
    p{
        font-weight:700;
        font-size:57px;
        font-family: 'Oswald';
        
        margin-left: 18px;
    }
`
