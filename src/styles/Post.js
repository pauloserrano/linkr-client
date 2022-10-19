import styled from "styled-components";

const PostWrapper = styled.section`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #171717;

    img{
        width: 50px;
        border-radius: 50%;
    }

    h3, p{
        margin-bottom: 0.5rem
    }

    h3{
        font-size: 1.25rem;
    }
`

export { PostWrapper }