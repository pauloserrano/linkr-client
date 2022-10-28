import styled from "styled-components";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 1.55rem;
    background-color: #FFF;
    color: #707070;

    > img{
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
    }

    form {
        display: flex;
        flex-direction: column;

        h3{
            font-size: 1.25rem;
            margin-bottom: 1em;
        }

        input{
            background-color: #EFEFEF;
            color: #949494;
            padding: 0.5em;
            border: none;
            margin-bottom: 0.5rem;
            ${props => props.isDisabled ? 'pointer-events: none;' : ''}

            ::placeholder{
                font-family: 'Lato', sans-serif;
                font-weight: bold;
            }
        }

        button{
            margin-left: auto;
            width: min(110px, 25%);
            padding: 0.5em 1em;
            border: none;
            border-radius: 5px;
            background-color: ${props => props.isDisabled ? '#6AA8F9' : '#1877F2'};
            ${props => props.isDisabled ? 'pointer-events: none;' : ''}
            color: #FFF;
        }
    }
`

export default Wrapper