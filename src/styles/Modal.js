import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: #333;
    width: max(50vw, 600px);
    min-height: 250px;
    padding: 2rem;
    border-radius: 50px;
    z-index: 10;

    h2{
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        line-height: 1.2em;
        margin-bottom: 1em;
    }

    div{
        display: flex;
        justify-content: center;
        width: 80%;

        .btn-cancel, .btn-confirm{
            width: min(130px, 40%);
            padding: 0.5em 1em;
            font-family: inherit;
            font-weight: bold;
            border-radius: 5px;
            margin: 0 1rem;
            border: none;
            cursor: pointer;
        }

        .btn-cancel{
            background-color: #fff;
            color: #1877F2;
        }

        .btn-confirm{
            background-color: #1877F2;
            color: #fff;
        }
    }
`

export default Wrapper