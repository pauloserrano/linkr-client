import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: min(100%, 600px);
    margin-right: 1.5rem;

    h2{
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        font-size: 2.5rem;
        align-self: flex-start;
        margin-bottom: 1em;
    }

    section:not(:last-of-type){
        margin-bottom: 1rem;
    }
`

export default Wrapper