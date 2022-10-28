import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #1E1E1E;
    width: 100%;
    padding: 0.5rem 1rem 1.25rem;
    position: relative;
    top: 0.75rem;
    border-radius: 1rem 1rem 0 0;
    font-size: 0.75rem;
    font-family: inherit;
    color: #fff;

    p{
        margin-left: 1ch;

        .username{
            font-weight: bold;
        }
    }

`

export default Wrapper