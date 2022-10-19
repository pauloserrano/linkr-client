import Styled from "styled-components";

const FormWrapper = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
        box-sizing: border-box;
        width: 88%;
        height: 3rem;
        border-radius: 8px;
        border: none;
        margin: 0.4rem 0;
        font-size: 1.3rem;
        font-weight: bold;
        padding-left: 1.6rem;
    }

    input::placeholder {
        text-align: left;
        font-size: 1.3rem;
        font-weight: bold;
        color: #555;
    }
    
    button {
        width: 88%;
        height: 3rem;
        border-radius: 8px;
        border: none;
        margin: 0.4rem 0;
        padding: 0 2rem;
        font-size: 1.5rem;
        font-weight: 700;
        background-color: #1877f2;
        color: white;
    }

`;

export { FormWrapper };