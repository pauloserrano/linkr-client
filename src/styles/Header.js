import styled from "styled-components";

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: min(70px, 20vh);
    position: sticky;
    top: 0;
    padding: 0.5rem 1.5rem;
    margin-bottom: 2.5rem;
    background-color: #151515;
    z-index: 5;

    h1{
        font-family: 'Passion One', cursive;
        font-weight: bold;
        font-size: 3rem;
        cursor: pointer;
    }

    .user-container{
        display: flex;
        justify-content: center;
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

    .header-menu {
        display: flex;
        align-items: center;
        border-radius: 8px;
        background-color: #151515;
        width: 10rem;
        height: 8vh;

        position: absolute;
        top: min(65px, 20vh);
        right: 0;

        h4 {
            font-family: 'Passion One', cursive;
            font-weight: 400;
            margin-left: 0.6rem;
        }
        }
`

export default Wrapper