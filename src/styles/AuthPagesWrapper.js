import styled from "styled-components";

const AuthPagesWrapper = styled.section`
    display: flex;
    
    div {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    a {
        margin-top: 0.8rem;
        color: white;
        text-decoration: underline;
    }
`;

const Left = styled.section`
    display: flex;
    flex-direction: column;

    width: 60%;
    height: 100vh;

    background-color: #141514;
    color: white;
    font-weight: bold;

    span {
        margin: 24vh 0 0 10%;
    }
    h1 {
        font-size: 5rem;
    }

    h2 {
        font-size: 2.2rem;
        width: 70%;
    }
`

export { AuthPagesWrapper, Left };