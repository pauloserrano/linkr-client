import styled from "styled-components";

const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    margin: 0 auto;

    article{
        width: 100%;
        margin-bottom: 0.5rem;
    }

    .update-posts {
        width: 100%;
        
        button {
            width: 100%;
            height: 5vh;
            border: none;
            border-radius: 15px;
            background-color: #1877f2;
            color: white;
            font-family: 'lato', sans-serif;
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 3vh;
        }
    }

    .loader {
        display: flex;
        margin-top: 12vh;
        position: fixed;
        bottom: 8vh;
        left: 30%;

        div {
            height: 2vh;
        }

        span {
            font-size: 1rem;
            font-family: "lato", sans-serif;
            color: white;
            text-align: center;
            width: 100%;
            margin-top: 8vh;
        }

    }
    .space {
        height: 20vh;
    }
`

export default Wrapper