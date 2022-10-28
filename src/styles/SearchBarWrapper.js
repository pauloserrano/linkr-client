import styled from "styled-components";

const SearchBarWrapper = styled.div`
    width: 50%;
    position: absolute;
    font-family: 'Lato', sans-serif;
    outline: none;

    input {
        width: 100%;
        height: 6vh;
        border: none;
        border-radius: 10px;
        background-color: white;
        font-family: 'Lato', sans-serif;
        padding-left: 0.4rem;
        font-size: 1rem;
        color: black;
        font-weight: 500;
        outline: none;
    }

    input::placeholder {
        color: #cfcfcf;
        font-weight: 400;
    }

    .icon {
            position: absolute;
            right: 0.6rem;
            bottom: 0.8vh;   
            font-size: 4vh;  
        }

    .search-results {
        width: 100%;

        position: absolute;
        top: 4.8vh;
        background-color: #E7E7E7;
        border-radius: 0 0 10px 10px;
        z-index: 1;

        .result {
            display: flex;
            align-items: center;

            padding-left: 1rem;
            height: 6.8vh;
            
            color: #515151;
            font-size: 1rem;

            img {
                width: 6vh;
                height: 6vh;
                margin-right: 1rem;
                border-radius: 50%;
            }

        }

        .result:last-child {
            border-radius: 0 0 10px 10px;
        }

        .result:hover {
            background-color: #00000080; 
        }
    }

`;

export default SearchBarWrapper;