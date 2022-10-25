import styled from "styled-components";

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: min(70px, 20vh);
    position: sticky;
    top: 0;
    padding: 0.5rem 1.5rem;
    margin-bottom: 2.5rem;
    background-color: #151515;
    z-index: 1;

    h1{
        font-family: 'Passion One', cursive;
        font-weight: bold;
        font-size: 3rem;
        cursor: pointer;
    }

    .user-container{
        display: flex;
        align-items: center;
        height: 100%;
        margin-left: auto;

        img, button{
            cursor: pointer;
        }

        img{
            display: flex;
            justify-content: center;
            align-items: center;
            aspect-ratio: 1 / 1;
            height: 100%;
            object-fit: cover;
            margin-left: 0.5rem;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.5);
        }

        button{
            background-color: transparent;
            border: none;
            color: #fff;
        }
    }
`

export default Wrapper